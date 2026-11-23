'use client'

import { Link, navigate, useLocation, useProducts, useStorefront } from '@dripfunnel/storefront-core/theme'
import { ProductSkeleton, StoreProductCard } from '../Blocks'
import { Icon, useSports } from '../catalog'
import styles from '../../styles/site.module.css'

/** The store's products under sport tabs; the chosen sport lives in the address, so a link can open it. */
export const ProductBrowser = () => {
  const { t } = useStorefront()
  const { query } = useLocation()
  const sports = useSports()
  const { status, products, retry } = useProducts({ sort: 'newest', first: 48 })
  const chosen = sports.find((s) => s.id === query.get('sport')) ?? null
  const words: readonly string[] = chosen ? chosen.words : []
  const shown = chosen ? products.filter((p) => words.some((w) => p.name.toLowerCase().includes(w))) : products
  const pick = (id: string | null) => navigate(id ? `/shop-by-sport/?sport=${id}` : '/shop-by-sport/', { replace: true })
  return (
    <>
      <div className={styles.tabs} role="group" aria-label={t('pages.shop.filter')}>
        <button type="button" className={chosen === null ? `${styles.tab} ${styles.tabActive}` : styles.tab} aria-pressed={chosen === null} onClick={() => pick(null)}>
          {t('pages.shop.all')}
        </button>
        {sports.map((s) => (
          <button key={s.id} type="button" className={chosen?.id === s.id ? `${styles.tab} ${styles.tabActive}` : styles.tab} aria-pressed={chosen?.id === s.id} onClick={() => pick(s.id)}>
            <Icon name={s.id} className={styles.tabIcon} />
            {s.tab}
          </button>
        ))}
      </div>
      {status === 'loading' || status === 'idle' ? (
        <ProductSkeleton label={t('pages.shop.loading')} />
      ) : status === 'error' ? (
        <div className={styles.empty}>
          <p className={styles.text}>{t('pages.shop.failed')}</p>
          <button type="button" className={`${styles.btn} ${styles.btnDark}`} onClick={retry}>
            {t('pages.shop.retry')}
          </button>
        </div>
      ) : shown.length ? (
        <>
          <p className={styles.count} aria-live="polite">
            {t('pages.shop.count', { count: shown.length })}
          </p>
          <ul className={styles.productGrid}>
            {shown.map((p) => (
              <li key={p.id}>
                <StoreProductCard product={p} />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className={styles.empty}>
          <Icon name="box" className={styles.emptyIcon} />
          <p className={styles.h3}>{t('pages.shop.emptyTitle')}</p>
          <p className={styles.text}>{t('pages.shop.empty')}</p>
          <Link href="/shop-by-sport/" className={`${styles.btn} ${styles.btnBrand}`}>
            {t('pages.shop.seeAll')}
          </Link>
        </div>
      )}
      <div className={styles.center}>
        <Link href="/collections/all/" className={`${styles.btn} ${styles.btnOutline}`}>
          <span>{t('pages.shop.catalogue')}</span>
          <Icon name="arrow" className={styles.btnIcon} />
        </Link>
      </div>
    </>
  )
}
