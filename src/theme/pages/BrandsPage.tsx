import { Link, useHead, useStorefront } from '@dripfunnel/storefront-core/theme'
import { Layout } from '../components/Layout'
import { PageHero } from '../components/Blocks'
import { Icon } from '../components/catalog'
import { useContact } from '../components/site'
import styles from '../styles/site.module.css'

const slots = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

export const BrandsPage = () => {
  const { store, t } = useStorefront()
  const contact = useContact()
  useHead({ title: t('pages.brands.seo', { store: store.name }), description: t('pages.brands.lead') })
  return (
    <Layout>
      <PageHero eyebrow={t('pages.brands.eyebrow')} title={t('pages.brands.title')} lead={t('pages.brands.lead')} />
      <section className={styles.section}>
        <div className={styles.container}>
          <ul className={styles.brandGrid}>
            {slots.map((n) => (
              <li key={n} className={`${styles.brandTile} ${styles.reveal}`}>
                <Icon name="medal" className={styles.cardIconSvg} />
                <span className={styles.brandMark}>{t('pages.brands.logo')}</span>
                <span className={styles.brandNote}>{t('pages.brands.note')}</span>
              </li>
            ))}
          </ul>
          <div className={styles.center}>
            <div className={`${styles.sectionHead} ${styles.reveal}`}>
              <h2 className={styles.h3}>{t('pages.brands.askTitle')}</h2>
              <p className={styles.text}>{t('pages.brands.ask')}</p>
              <div className={styles.center}>
                {contact.hello ? (
                  <Link href={contact.hello} className={`${styles.btn} ${styles.btnGreen}`}>
                    <Icon name="whatsapp" className={styles.btnIcon} />
                    <span>{t('pages.brands.askAction')}</span>
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
