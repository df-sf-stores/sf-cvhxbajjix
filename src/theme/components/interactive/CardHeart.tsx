'use client'

import { useStorefront, useWishlist } from '@dripfunnel/storefront-core/theme'
import styles from '../../styles/site.module.css'

/** A product card's wishlist heart: pressed while the product is on the shopper's wishlist. */
export const CardHeart = ({ productId, name }: { productId: string; name: string }) => {
  const { t } = useStorefront()
  const wishlist = useWishlist()
  const on = wishlist.has(productId)
  return (
    <button type="button" className={on ? `${styles.heart} ${styles.heartOn}` : styles.heart} aria-pressed={on} aria-label={t('shop.wishlist.heart', { name })} disabled={wishlist.busy || wishlist.status === 'loading'} onClick={() => void wishlist.toggle(productId, null)}>
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
        <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0112 7.3a4.3 4.3 0 017.5 2.5C19.5 15.4 12 20 12 20z" fill={on ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    </button>
  )
}
