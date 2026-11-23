'use client'

import { useState } from 'react'
import { Checkbox, PriceRange, Select, useLoadOnScroll, useStorefront, type Listing, type SortKey } from '@dripfunnel/storefront-core/theme'
import { shop as styles } from '../styles/shop'

/**
 * The filter values and the price range: a sticky sidebar card on wide screens, and on narrow ones a drawer
 * the Filters button slides in from the left, closed by its button, the backdrop, Escape or "Show products".
 */
export const FilterPanel = ({ listing }: { listing: Listing }) => {
  const { t } = useStorefront()
  const [open, setOpen] = useState(false)
  if (listing.facets.length === 0 && !listing.priceBounds) return null
  const priced = listing.priceRange.min !== null || listing.priceRange.max !== null
  const chosen = listing.selected.length + Number(priced)
  const clearAll = () => {
    listing.clear()
    if (priced) listing.setPriceRange({ min: null, max: null })
  }
  return (
    <aside className={styles.filters}>
      <button type="button" className={styles.filterToggle} aria-expanded={open} aria-controls="listing-filters" onClick={() => setOpen(true)}>
        <svg className={styles.filterToggleIcon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M4 6h16M7 12h10M10 18h4" />
        </svg>
        {t('shop.listing.filters')}
        {chosen ? <span className={styles.count}>{chosen}</span> : null}
      </button>
      {open ? <button type="button" className={styles.filterBackdrop} aria-label={t('shop.listing.close')} onClick={() => setOpen(false)} /> : null}
      <div
        id="listing-filters"
        className={open ? styles.filterPanelOpen : styles.filterPanel}
        onKeyDown={(e) => {
          if (e.key === 'Escape') setOpen(false)
        }}
      >
        <div className={styles.filterHead}>
          <p className={styles.filterTitle}>
            {t('shop.listing.filterTitle')}
            {chosen ? <span className={styles.count}>{chosen}</span> : null}
          </p>
          {chosen ? (
            <button type="button" className={styles.filterClear} onClick={clearAll}>
              {t('shop.listing.clearAll')}
            </button>
          ) : null}
          <button type="button" className={styles.filterClose} aria-label={t('shop.listing.close')} onClick={() => setOpen(false)}>
            <svg className={styles.chipIcon} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
              <path d="M4 4l8 8M12 4l-8 8" />
            </svg>
          </button>
        </div>
        <div className={styles.filterGroups}>
          {listing.facets.map((facet) => {
            const on = facet.values.filter((v) => v.selected).length
            return (
              <details key={facet.id} open className={styles.facet}>
                <summary className={styles.facetName}>
                  <span>{facet.name}</span>
                  {on ? <span className={styles.facetOn}>{on}</span> : null}
                  <svg className={styles.facetCaret} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                    <path d="M4 6l4 4 4-4" />
                  </svg>
                </summary>
                <div role="group" aria-label={facet.name} className={styles.facetValues}>
                  {facet.values.map((value) => (
                    <Checkbox key={value.id} checked={value.selected} onChange={() => listing.toggle(value.id)} className={styles.check}>
                      <span className={styles.checkName}>{value.name}</span>
                      <span className={styles.checkCount}>{value.count}</span>
                    </Checkbox>
                  ))}
                </div>
              </details>
            )
          })}
          {listing.priceBounds ? (
            <details open className={styles.facet}>
              <summary className={styles.facetName}>
                <span>{t('shop.listing.price')}</span>
                {priced ? <span className={styles.facetOn}>{Number(priced)}</span> : null}
                <svg className={styles.facetCaret} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                  <path d="M4 6l4 4 4-4" />
                </svg>
              </summary>
              <PriceRange
                bounds={listing.priceBounds}
                value={listing.priceRange}
                onChange={listing.setPriceRange}
                label={t('shop.listing.price')}
                className={styles.priceRange}
                parts={{
                  track: styles.priceTrack,
                  rail: styles.priceRail,
                  fill: styles.priceFill,
                  tick: styles.priceTick,
                  thumb: styles.priceThumb,
                  ends: styles.priceEnds,
                  select: styles.priceSelect,
                  to: styles.priceTo,
                }}
              />
            </details>
          ) : null}
        </div>
        <div className={styles.filterFoot}>
          <button type="button" className={styles.filterApply} onClick={() => setOpen(false)}>
            {t('shop.listing.apply', { count: listing.items.length })}
          </button>
        </div>
      </div>
    </aside>
  )
}

/** How many products show, the sort, and the chosen filters as "Filter: value" chips that each remove one. */
export const ListingBar = ({ listing }: { listing: Listing }) => {
  const { t } = useStorefront()
  const labels: Record<SortKey, string> = {
    featured: t('shop.listing.sorts.featured'),
    newest: t('shop.listing.sorts.newest'),
    'price-low': t('shop.listing.sorts.priceLow'),
    'price-high': t('shop.listing.sorts.priceHigh'),
    name: t('shop.listing.sorts.name'),
  }
  const facetOf = new Map(listing.facets.flatMap((f) => f.values.map((v) => [v.id, f.name] as const)))
  const priced = listing.priceRange.min !== null || listing.priceRange.max !== null
  const clearAll = () => {
    listing.clear()
    if (priced) listing.setPriceRange({ min: null, max: null })
  }
  return (
    <div className={styles.toolbar}>
      <p className={styles.toolbarCount} role="status">
        {t('shop.listing.showing', { count: listing.items.length })}
      </p>
      <Select label={t('shop.listing.sort')} value={listing.sort} options={listing.sorts.map((s) => ({ value: s, label: labels[s] }))} onChange={listing.setSort} className={styles.sort} />
      <div className={styles.chips}>
        {listing.selected.map((s) => {
          const facet = facetOf.get(s.id)
          const name = facet ? t('shop.listing.chip', { facet, value: s.name }) : s.name
          return (
            <button key={s.id} type="button" className={styles.chip} aria-label={t('shop.listing.remove', { name })} onClick={() => listing.toggle(s.id)}>
              {name}
              <svg className={styles.chipIcon} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                <path d="M4 4l8 8M12 4l-8 8" />
              </svg>
            </button>
          )
        })}
        {listing.selected.length > 0 ? (
          <button type="button" className={styles.clear} onClick={clearAll}>
            {t('shop.listing.clearAll')}
          </button>
        ) : null}
      </div>
    </div>
  )
}

/** Infinite scroll: the next page loads as the end of the grid nears the screen, and a page that didn't load offers a retry. */
export const MoreOnScroll = ({ listing }: { listing: Listing }) => {
  const { t } = useStorefront()
  const end = useLoadOnScroll(listing)
  return (
    <div ref={end} className={styles.more}>
      {listing.loadingMore ? (
        <p className={styles.muted} role="status">
          {t('shop.listing.loadingMore')}
        </p>
      ) : null}
      {listing.moreFailed ? (
        <>
          <p className={styles.muted} role="alert">
            {t('shop.listing.moreFailed')}
          </p>
          <button type="button" className={styles.secondary} onClick={listing.fetchMore}>
            {t('shop.listing.retry')}
          </button>
        </>
      ) : null}
    </div>
  )
}
