import type { ReactNode } from 'react'
import { Link, ThemeImage, useStorefront } from '@dripfunnel/storefront-core/theme'
import { Icon, useProductsList, useSports } from './catalog'
import { useContact } from './site'
import styles from '../styles/site.module.css'

type Product = ReturnType<typeof useProductsList>[number]
type Sport = ReturnType<typeof useSports>[number]

/** A placeholder product with its picture, words and a WhatsApp enquiry. */
export const ProductTile = ({ product, sport }: { product: Product; sport: string }) => {
  const { t } = useStorefront()
  const contact = useContact()
  const ask = contact.whatsapp(t('site.wa.product', { product: product.name }))
  return (
    <article className={styles.productCard}>
      <div className={styles.productMedia}>
        {product.image ? (
          <ThemeImage src={product.image} alt={product.name} ratio={1} sizes="(min-width: 900px) 25vw, 50vw" className={styles.productImg} />
        ) : (
          <div className={styles.productArt}>
            <Icon name={product.art ?? 'gifts'} className={styles.productArtIcon} />
          </div>
        )}
        <span className={styles.productTag}>{sport}</span>
      </div>
      <div className={styles.productBody}>
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.productDesc}>{product.desc}</p>
        {ask ? (
          <Link href={ask} className={styles.enquire}>
            <Icon name="whatsapp" className={styles.enquireIcon} />
            <span>{t('site.enquire')}</span>
          </Link>
        ) : null}
      </div>
    </article>
  )
}

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
