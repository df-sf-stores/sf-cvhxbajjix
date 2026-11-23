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
        {product.stock.inStock && product.price && product.compareAt && Number(product.compareAt.amount) > Number(product.price.amount) ? (
          <span className={styles.saleBadge}>{t('site.card.off', { percent: Math.round((1 - Number(product.price.amount) / Number(product.compareAt.amount)) * 100) })}</span>
        ) : null}
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
        <p className={product.stock.inStock ? styles.stock : styles.stockOut}>{product.stock.inStock ? t('site.card.inStock') : t('site.card.soldOut')}</p>
        <Link href={product.href} className={styles.buy}>
          <Icon name="cart" className={styles.enquireIcon} />
          <span>{product.stock.inStock ? t('site.card.buy') : t('site.card.view')}</span>
        </Link>
      </div>
    </article>
  )
}

const brandLogos = [
  { id: 'yonex', src: 'brand-yonex.webp', alt: 'catalog.brands.yonex' },
  { id: 'li-ning', src: 'brand-li-ning.webp', alt: 'catalog.brands.li-ning' },
  { id: 'hundred', src: 'brand-hundred.webp', alt: 'catalog.brands.hundred' },
  { id: 'victor', src: 'brand-victor.webp', alt: 'catalog.brands.victor' },
  { id: 'apacs', src: 'brand-apacs.webp', alt: 'catalog.brands.apacs' },
  { id: 'maxbolt', src: 'brand-maxbolt.webp', alt: 'catalog.brands.maxbolt' },
  { id: 'nivia', src: 'brand-nivia.webp', alt: 'catalog.brands.nivia' },
  { id: 'cosco', src: 'brand-cosco.webp', alt: 'catalog.brands.cosco' },
  { id: 'ss', src: 'brand-ss.webp', alt: 'catalog.brands.ss' },
  { id: 'sg', src: 'brand-sg.webp', alt: 'catalog.brands.sg' },
  { id: 'tynor', src: 'brand-tynor.webp', alt: 'catalog.brands.tynor' },
  { id: 'konex', src: 'brand-konex.webp', alt: 'catalog.brands.konex' },
  { id: 'guptas', src: 'brand-guptas.webp', alt: 'catalog.brands.guptas' },
  { id: 'sega', src: 'brand-sega.webp', alt: 'catalog.brands.sega' },
  { id: 'jj-jonex', src: 'brand-jj-jonex.webp', alt: 'catalog.brands.jj-jonex' },
  { id: 'gupta', src: 'brand-gupta.webp', alt: 'catalog.brands.gupta' },
  { id: 'solinco', src: 'brand-solinco.webp', alt: 'catalog.brands.solinco' },
  { id: 'babolat', src: 'brand-babolat.webp', alt: 'catalog.brands.babolat' },
  { id: 'stag', src: 'brand-stag.webp', alt: 'catalog.brands.stag' },
  { id: 'asics', src: 'brand-asics.webp', alt: 'catalog.brands.asics' },
  { id: 'black-panther', src: 'brand-black-panther.webp', alt: 'catalog.brands.black-panther' },
  { id: 'exergy', src: 'brand-exergy.webp', alt: 'catalog.brands.exergy' },
] as const

/** The brands the store offers, as the logos the store supplied: each whole, on its own ground. */
export const BrandLogos = () => {
  const { t } = useStorefront()
  return (
    <ul className={styles.logoGrid}>
      {brandLogos.map((b) => (
        <li key={b.id} className={styles.reveal}>
          <span className={b.id === 'exergy' ? `${styles.logoTile} ${styles.logoTileLight}` : styles.logoTile}>
            <ThemeImage src={b.src} alt={t(b.alt)} ratio={12 / 5} sizes="(min-width: 1200px) 190px, (min-width: 640px) 25vw, 50vw" className={styles.logoImg} />
          </span>
        </li>
      ))}
    </ul>
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
      <span className={styles.sportMore} aria-hidden="true">
        <Icon name="arrow" className={styles.sportMoreIcon} />
      </span>
    </span>
  </Link>
)

/** The dark-green heading band at the top of each inner page. */
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
