'use client'

import { navigate, useLocation, useStorefront } from '@dripfunnel/storefront-core/theme'
import { ProductTile } from '../Blocks'
import { Icon, useProductsList, useSports } from '../catalog'
import styles from '../../styles/site.module.css'

/** The products page's category tabs and grid; the chosen sport lives in the address, so a link can open it. */
export const ProductBrowser = () => {
  const { t } = useStorefront()
  const { query } = useLocation()
  const sports = useSports()
  const products = useProductsList()
  const asked = query.get('sport')
  const chosen = sports.find((s) => s.id === asked)?.id ?? null
  const shown = chosen ? products.filter((p) => p.sport === chosen) : products
  const sportName = new Map<string, string>(sports.map((s) => [s.id, s.name]))
  const pick = (id: string | null) => navigate(id ? `/shop-by-sport/?sport=${id}` : '/shop-by-sport/', { replace: true })
  return (
    <>
      <div className={styles.tabs} role="group" aria-label={t('pages.shop.filter')}>
        <button type="button" className={chosen === null ? `${styles.tab} ${styles.tabActive}` : styles.tab} aria-pressed={chosen === null} onClick={() => pick(null)}>
          {t('pages.shop.all')}
        </button>
        {sports.map((s) => (
          <button key={s.id} type="button" className={chosen === s.id ? `${styles.tab} ${styles.tabActive}` : styles.tab} aria-pressed={chosen === s.id} onClick={() => pick(s.id)}>
            <Icon name={s.id} className={styles.tabIcon} />
            {s.tab}
          </button>
        ))}
      </div>
      <p className={styles.count} aria-live="polite">
        {t('pages.shop.count', { count: shown.length })}
      </p>
      <ul className={styles.productGrid}>
        {shown.map((p) => (
          <li key={p.id}>
            <ProductTile product={p} sport={sportName.get(p.sport) ?? ''} />
          </li>
        ))}
      </ul>
    </>
  )
}
