import { Link, useStorefront, type Listing } from '@dripfunnel/storefront-core/theme'
import { FilterPanel, ListingBar, MoreOnScroll } from './interactive/Filters'
import { Retry } from './interactive/Retry'
import { Notice } from './Notice'
import { GridPlaceholder, ProductGrid } from './ProductCard'
import { shop as styles } from './styles/shop'

/** A collection's or a search's products: filters, sort, the grid and its states, and more loading on scroll. */
export const ListingResults = ({ listing }: { listing: Listing }) => {
  const { t } = useStorefront()
  // A collection with nothing in it has nothing to narrow, so it shows no filters.
  const nothing = listing.status === 'ready' && listing.items.length === 0 && listing.selected.length === 0 && listing.priceRange.min === null && listing.priceRange.max === null
  const filters = !nothing && (listing.facets.length > 0 || listing.priceBounds !== null)
  return (
    <div className={filters ? styles.listingFiltered : styles.listing}>
      {filters ? <FilterPanel listing={listing} /> : null}
      <div className={styles.results}>
        {listing.status === 'ready' ? (
          <ListingBar listing={listing} />
        ) : null}
        {listing.status === 'loading' ? <GridPlaceholder label={t('shop.listing.loading')} count={6} /> : null}
        {listing.status === 'error' ? (
          <Notice title={t('shop.listing.failed')} lead={t('shop.listing.failedLead')}>
            <Retry label={t('shop.listing.retry')} onRetry={listing.retry} />
          </Notice>
        ) : null}
        {listing.status === 'ready' && listing.items.length === 0 ? (
          !nothing ? (
            <Notice title={t('shop.listing.empty')} lead={t('shop.listing.emptyLead')}>
              <Retry label={t('shop.listing.clear')} onRetry={listing.clear} />
            </Notice>
          ) : (
            <Notice title={t('shop.collection.empty')} lead={t('shop.collection.emptyLead')}>
              <Link href="/" className={styles.secondary}>
                {t('shop.collection.home')}
              </Link>
            </Notice>
          )
        ) : null}
        {listing.status === 'ready' ? <ProductGrid products={listing.items} /> : null}
        <MoreOnScroll listing={listing} />
      </div>
    </div>
  )
}
