import { Link, useHead, useStorefront } from '@dripfunnel/storefront-core/theme'
import { Layout } from '../components/Layout'
import { PageHero } from '../components/Blocks'
import { Icon } from '../components/catalog'
import { ProductBrowser } from '../components/interactive/ProductBrowser'
import { useContact } from '../components/site'
import styles from '../styles/site.module.css'

export const ShopPage = () => {
  const { store, t } = useStorefront()
  const contact = useContact()
  useHead({ title: t('pages.shop.seo', { store: store.name }), description: t('pages.shop.lead') })
  return (
    <Layout>
      <PageHero eyebrow={t('pages.shop.eyebrow')} title={t('pages.shop.title')} lead={t('pages.shop.lead')} />
      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.notice}>
            <Icon name="whatsapp" className={styles.noticeIcon} />
            <span>
              {t('pages.shop.notice')}{' '}
              {contact.hello ? (
                <Link href={contact.hello} className={styles.noticeLink}>
                  {t('pages.shop.noticeLink')}
                </Link>
              ) : null}
            </span>
          </p>
          <ProductBrowser />
        </div>
      </section>
    </Layout>
  )
}
