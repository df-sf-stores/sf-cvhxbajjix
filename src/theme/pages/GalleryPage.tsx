import { Link, ThemeImage, useHead, useStorefront } from '@dripfunnel/storefront-core/theme'
import { Layout } from '../components/Layout'
import { PageHero } from '../components/Blocks'
import { Icon } from '../components/catalog'
import { useContact } from '../components/site'
import styles from '../styles/site.module.css'

export const GalleryPage = () => {
  const { store, t } = useStorefront()
  const contact = useContact()
  useHead({ title: t('pages.gallery.seo', { store: store.name }), description: t('pages.gallery.lead') })
  const photos = [
    { image: 'about-stadium.webp', wide: true, caption: t('pages.gallery.stadium') },
    { image: 'team-kids.webp', wide: false, caption: t('pages.gallery.team') },
    { image: 'sport-gym.webp', wide: false, caption: t('pages.gallery.gym') },
    { image: 'sport-badminton.webp', wide: false, caption: t('pages.gallery.badminton') },
    { image: 'gallery-court.webp', wide: false, caption: t('pages.gallery.tennis') },
    { image: 'sport-swimming.webp', wide: true, caption: t('pages.gallery.swimming') },
    { image: 'team-volley.webp', wide: false, caption: t('pages.gallery.volley') },
    { image: 'gallery-goal.webp', wide: false, caption: t('pages.gallery.goal') },
    { image: 'gallery-run.webp', wide: false, caption: t('pages.gallery.run') },
    { image: 'sport-footwear.webp', wide: false, caption: t('pages.gallery.boots') },
    { image: 'gallery-tt.webp', wide: false, caption: t('pages.gallery.tt') },
    { image: 'gallery-fitness.webp', wide: false, caption: t('pages.gallery.fitness') },
  ] as const
  return (
    <Layout>
      <PageHero eyebrow={t('pages.gallery.eyebrow')} title={t('pages.gallery.title')} lead={t('pages.gallery.lead')} />
      <section className={styles.section}>
        <div className={styles.container}>
          <ul className={styles.galleryGrid}>
            {photos.map((p) => (
              <li key={p.image} className={p.wide ? `${styles.galleryItem} ${styles.galleryWide} ${styles.reveal}` : `${styles.galleryItem} ${styles.reveal}`}>
                <ThemeImage src={p.image} alt={p.caption} ratio={4 / 3} sizes="(min-width: 900px) 25vw, 50vw" className={styles.galleryImg} />
                <span className={styles.galleryTag}>{t('pages.gallery.placeholder')}</span>
                <span className={styles.galleryCaption}>{p.caption}</span>
              </li>
            ))}
          </ul>
          <div className={styles.center}>
            {contact.instagram ? (
              <Link href={contact.instagram} className={`${styles.btn} ${styles.btnOrange}`}>
                <Icon name="instagram" className={styles.btnIcon} />
                <span>{t('pages.gallery.more')}</span>
              </Link>
            ) : null}
          </div>
        </div>
      </section>
    </Layout>
  )
}
