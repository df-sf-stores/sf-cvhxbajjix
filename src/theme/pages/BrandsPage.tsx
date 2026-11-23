import { Link, useHead, useProducts, useStorefront } from '@dripfunnel/storefront-core/theme'
import { Layout } from '../components/Layout'
import { BrandLogos, PageHero, SectionHead } from '../components/Blocks'
import { brandsOf, Icon } from '../components/catalog'
import { encode, useContact } from '../components/site'
import styles from '../styles/site.module.css'

export const BrandsPage = () => {
  const { store, t } = useStorefront()
  const contact = useContact()
  const catalogue = useProducts({ sort: 'name', first: 100 })
  const brands = brandsOf(catalogue.products)
  useHead({ title: t('pages.brands.seo', { store: store.name }), description: t('pages.brands.lead') })
  return (
    <Layout>
      <PageHero eyebrow={t('pages.brands.eyebrow')} title={t('pages.brands.title')} lead={t('pages.brands.lead')} />
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <SectionHead eyebrow={t('pages.brands.logosEyebrow')} title={t('pages.brands.logosTitle')} lead={t('pages.brands.logosLead')} />
          <BrandLogos />
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHead eyebrow={t('pages.brands.eyebrow')} title={t('pages.brands.onlineTitle')} lead={t('pages.brands.onlineLead')} />
          {catalogue.status !== 'ready' ? (
            <div className={styles.brandGrid} aria-busy="true" aria-label={t('pages.brands.loading')} />
          ) : brands.length === 0 ? (
            <p className={`${styles.lead} ${styles.centerText}`}>{t('pages.brands.empty')}</p>
          ) : (
            <ul className={styles.brandGrid}>
              {brands.map((b) => (
                <li key={b.name} className={styles.reveal}>
                  <Link href={`/search/?q=${encode(b.name)}`} className={styles.brandTile}>
                    <Icon name="medal" className={styles.cardIconSvg} />
                    <span className={styles.brandMark}>{b.name}</span>
                    <span className={styles.brandNote}>{b.count === 1 ? t('pages.brands.countOne') : t('pages.brands.count', { count: b.count })}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
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
