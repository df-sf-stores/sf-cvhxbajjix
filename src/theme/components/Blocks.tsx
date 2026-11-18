import type { ReactNode } from 'react'
import { Image, Link, Price, ThemeImage, useStorefront, type ProductCard as Card } from '@dripfunnel/storefront-core/theme'
import { Icon, useSports } from './catalog'
import { CardHeart } from './interactive/CardHeart'
import styles from '../styles/site.module.css'

type Sport = ReturnType<typeof useSports>[number]

/** A product from the store's catalogue: its photo, name and price, the wishlist heart, and a way into its page to buy. */
export const StoreProductCard = ({ product }: { product: Card }) => {
  const { store, locale, t } = useStorefront()
  return (
    <article className={styles.productCard}>
      <div className={styles.productMedia}>
        <Link href={product.href} className={styles.productPhotoLink}>
          {product.photo ? (
            <Image image={product.photo} alt={product.photo.alt ?? product.name} ratio={1} sizes="(min-width: 900px) 25vw, 50vw" className={styles.productImg} />
          ) : (
            <span className={styles.productArt}>
              <Icon name="box" className={styles.productArtIcon} />
            </span>
          )}
        </Link>
        {product.badges[0] ? <span className={styles.productTag}>{product.badges[0].label}</span> : null}
        {product.stock.inStock ? null : <span className={styles.soldOut}>{t('site.card.soldOut')}</span>}
        <CardHeart productId={product.id} name={product.name} />
      </div>
      <div className={styles.productBody}>
        <h3 className={styles.productName}>
          <Link href={product.href} className={styles.productNameLink}>
            {product.name}
          </Link>
        </h3>
        {product.price ? (
          <p className={styles.productPrice}>
            {product.from ? <span className={styles.from}>{t('site.card.from')}</span> : null}
            <Price money={product.price} compareAt={product.compareAt} includesTax={store.pricesIncludeTax} locale={locale} t={t} className={styles.priceTag} />
          </p>
        ) : null}
        <Link href={product.href} className={styles.buy}>
          <Icon name="cart" className={styles.enquireIcon} />
          <span>{product.stock.inStock ? t('site.card.buy') : t('site.card.view')}</span>
        </Link>
      </div>
    </article>
  )
}

/** The grid's shape while products load, so nothing jumps when they arrive. */
export const ProductSkeleton = ({ label }: { label: string }) => (
  <ul className={styles.productGrid} aria-busy="true" aria-label={label}>
    {[0, 1, 2, 3].map((n) => (
      <li key={n}>
        <div className={styles.skeleton} />
      </li>
    ))}
  </ul>
)

/** A sport's picture card, linking to its products. */
export const SportTile = ({ sport }: { sport: Sport }) => (
  <Link href={`/shop-by-sport/?sport=${sport.id}`} className={styles.sportCard}>
    {sport.image ? (
      <ThemeImage src={sport.image} alt={sport.name} ratio={4 / 3} sizes="(min-width: 900px) 33vw, 50vw" className={styles.sportImg} />
    ) : (
      <span className={styles.sportArt}>
        <Icon name="gifts" className={styles.sportArtIcon} />
      </span>
    )}
    <span className={styles.sportShade} />
    <span className={styles.sportLabel}>
      <span className={styles.sportBadge}>
        <Icon name={sport.id} className={styles.sportBadgeIcon} />
      </span>
      <span className={styles.sportName}>{sport.name}</span>
    </span>
  </Link>
)

/** The navy heading band at the top of each inner page. */
export const PageHero = ({ eyebrow, title, lead, children }: { eyebrow: string; title: string; lead: string; children?: ReactNode }) => (
  <section className={styles.pageHero}>
    <span className={styles.pageHeroStripe} />
    <span className={styles.pageHeroStripeAlt} />
    <div className={styles.container}>
      <div className={styles.pageHeroInner}>
        <p className={styles.pageHeroEyebrow}>{eyebrow}</p>
        <h1 className={styles.pageHeroTitle}>{title}</h1>
        <p className={styles.pageHeroLead}>{lead}</p>
        {children}
      </div>
    </div>
  </section>
)

/** A section's eyebrow, heading and lead, centred. */
export const SectionHead = ({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) => (
  <div className={`${styles.sectionHead} ${styles.reveal}`}>
    <p className={styles.eyebrow}>{eyebrow}</p>
    <h2 className={styles.h2}>{title}</h2>
    {lead ? <p className={styles.lead}>{lead}</p> : null}
  </div>
)
