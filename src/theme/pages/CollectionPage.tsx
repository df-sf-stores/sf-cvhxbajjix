import { Breadcrumbs, Image, Link, SearchField, navigate, useCollection, useCollections, useListing, useStorefront, type CollectionCard } from '@dripfunnel/storefront-core/theme'
import { Layout } from '../components/Layout'
import { ListingResults } from '../components/ListingResults'
import { Notice } from '../components/Notice'
import { Retry } from '../components/interactive/Retry'
import { shop as styles } from '../components/styles/shop'
import { encode } from '../components/site'

export const CollectionPage = () => {
  const { t } = useStorefront()
  const page = useCollection()
  const name = page.collection?.name ?? (page.all ? t('shop.collection.all') : null)
  const lead = page.collection ? page.collection.description : page.all ? t('shop.collection.allLead') : null
  return (
    <Layout>
      <section className={styles.page}>
        {page.found === 'missing' ? (
          <Notice main title={t('shop.collection.missing')} lead={t('shop.collection.missingLead')}>
            <Link href="/collections/all/" className={styles.primary}>
              {t('shop.collection.browse')}
            </Link>
          </Notice>
        ) : page.found === 'error' ? (
          <Notice main title={t('shop.listing.failed')} lead={t('shop.listing.failedLead')}>
            <Retry label={t('shop.listing.retry')} onRetry={page.retry} />
          </Notice>
        ) : (
          <>
            <Breadcrumbs crumbs={name ? [{ label: t('shop.crumbs.home'), href: '/' }, { label: name, href: page.collection?.href ?? '/collections/all/' }] : []} t={t} className={styles.crumbs} />
            <header className={page.collection?.image ? styles.introMedia : styles.intro}>
              <div className={styles.introText}>
                <h1 className={styles.title}>{name ?? t('shop.collection.loading')}</h1>
                {lead ? <p className={styles.lead}>{lead}</p> : null}
              </div>
              {page.collection?.image ? <Image image={page.collection.image} alt="" ratio={16 / 9} sizes="(min-width: 900px) 288px, 224px" className={styles.introImg} /> : null}
            </header>
            {page.all ? <SearchField label={t('shop.search.label')} placeholder={t('shop.search.placeholder')} button={t('shop.search.button')} value="" onSearch={(q) => navigate(`/search/?q=${encode(q)}`)} suggest={4} className={styles.search} /> : null}
            <CollectionNav current={page.all ? null : (page.collection?.id ?? null)} />
            <ListingResults listing={page} />
          </>
        )}
      </section>
    </Layout>
  )
}

/** One collection as a chip; nothing while it holds no products, so the row never leads to an empty page. */
const CollectionChip = ({ collection, on }: { collection: CollectionCard; on: boolean }) => {
  const slug = collection.href.split('/').filter(Boolean).pop() ?? ''
  const listing = useListing({ collection: slug }, slug !== '')
  if (!on && (listing.status !== 'ready' || listing.items.length === 0)) return null
  return (
    <li>
      <Link href={collection.href} className={on ? styles.navChipOn : styles.navChip} aria-current={on ? 'page' : undefined}>
        {collection.name}
      </Link>
    </li>
  )
}

/** Every collection of the store as a row of chips, with Shop all first and the open one marked. */
const CollectionNav = ({ current }: { current: string | null }) => {
  const { t } = useStorefront()
  const { collections } = useCollections({ first: 24 })
  if (collections.length === 0) return null
  return (
    <nav aria-label={t('shop.collection.nav')}>
      <ul className={styles.navChips}>
        <li>
          <Link href="/collections/all/" className={current === null ? styles.navChipOn : styles.navChip} aria-current={current === null ? 'page' : undefined}>
            {t('shop.collection.all')}
          </Link>
        </li>
        {collections.map((c) => (
          <CollectionChip key={c.id} collection={c} on={c.id === current} />
        ))}
      </ul>
    </nav>
  )
}
