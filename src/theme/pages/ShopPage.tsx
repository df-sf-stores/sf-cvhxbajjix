import { useHead, useStorefront } from '@dripfunnel/storefront-core/theme'
import { Layout } from '../components/Layout'
import { PageHero } from '../components/Blocks'
import { ProductBrowser } from '../components/interactive/ProductBrowser'
import styles from '../styles/site.module.css'

export const ShopPage = () => {
  const { store, t } = useStorefront()
  useHead({ title: t('pages.shop.seo', { store: store.name }), description: t('pages.shop.lead') })
  return (
    <Layout>
      <PageHero eyebrow={t('pages.shop.eyebrow')} title={t('pages.shop.title')} lead={t('pages.shop.lead')} />
      <section className={styles.section}>
        <div className={styles.container}>
          <ProductBrowser />
        </div>
      </section>
    </Layout>
  )
}
