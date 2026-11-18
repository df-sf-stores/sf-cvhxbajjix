import { Link, ThemeImage, useHead, useStorefront } from '@dripfunnel/storefront-core/theme'
import { Layout } from '../components/Layout'
import { PageHero, SectionHead } from '../components/Blocks'
import { Icon } from '../components/catalog'
import { useContact } from '../components/site'
import styles from '../styles/site.module.css'

export const AboutPage = () => {
  const { store, t } = useStorefront()
  const contact = useContact()
  useHead({ title: t('pages.about.seo', { store: store.name }), description: t('pages.about.company', { store: store.name }) })
  const timeline = [
    { id: 'founded', year: t('pages.about.timeline.foundedYear'), title: t('pages.about.timeline.foundedTitle'), body: t('pages.about.timeline.foundedBody') },
    { id: 'growth', year: t('pages.about.timeline.growthYear'), title: t('pages.about.timeline.growthTitle'), body: t('pages.about.timeline.growthBody') },
    { id: 'today', year: t('pages.about.timeline.todayYear'), title: t('pages.about.timeline.todayTitle'), body: t('pages.about.timeline.todayBody') },
  ]
  const stats = [
    { id: 'years', value: t('pages.about.stats.yearsValue'), label: t('pages.about.stats.years') },
    { id: 'customers', value: t('pages.about.stats.customersValue'), label: t('pages.about.stats.customers') },
    { id: 'brands', value: t('pages.about.stats.brandsValue'), label: t('pages.about.stats.brands') },
    { id: 'schools', value: t('pages.about.stats.schoolsValue'), label: t('pages.about.stats.schools') },
  ]
  return (
    <Layout>
      <PageHero eyebrow={t('pages.about.eyebrow')} title={t('pages.about.title', { store: store.name })} lead={t('pages.about.lead')} />

      <section className={styles.section}>
        <div className={`${styles.container} ${styles.split}`}>
          <div className={`${styles.prose} ${styles.reveal}`}>
            <p className={styles.eyebrow}>{t('pages.about.companyEyebrow')}</p>
            <h2 className={styles.h2}>{t('pages.about.companyTitle')}</h2>
            <p className={styles.lead}>{t('pages.about.company', { store: store.name })}</p>
          </div>
          <div className={`${styles.splitMedia} ${styles.reveal}`}>
            <ThemeImage src="team-kids.webp" alt={t('pages.about.imageAlt')} ratio={4 / 3} sizes="(min-width: 900px) 50vw, 100vw" className={styles.splitImg} />
            <span className={styles.since}>
              <span className={styles.sinceYear}>{t('pages.about.timeline.foundedYear')}</span>
              <span className={styles.sinceLabel}>{t('pages.about.established')}</span>
            </span>
          </div>
        </div>
      </section>

      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <SectionHead eyebrow={t('pages.about.journeyEyebrow')} title={t('pages.about.journeyTitle')} lead={t('pages.about.journey', { store: store.name })} />
          <ol className={styles.timeline}>
            {timeline.map((step) => (
              <li key={step.id} className={`${styles.timelineItem} ${styles.reveal}`}>
                <span className={styles.timelineYear}>{step.year}</span>
                <h3 className={styles.h3}>{step.title}</h3>
                <p className={styles.text}>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={`${styles.mission} ${styles.reveal}`}>
            <p className={styles.eyebrow}>{t('pages.about.missionEyebrow')}</p>
            <h2 className={styles.missionTitle}>{t('pages.about.missionTitle')}</h2>
            <p className={styles.missionText}>{t('pages.about.mission')}</p>
          </div>
        </div>
      </section>

      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={`${styles.founder} ${styles.reveal}`}>
            <div className={styles.founderPhoto}>
              <Icon name="team" className={styles.founderIcon} />
              <span>{t('pages.about.founder.photo')}</span>
            </div>
            <div className={styles.prose}>
              <p className={styles.eyebrow}>{t('pages.about.founder.eyebrow')}</p>
              <h2 className={styles.h2}>{t('pages.about.founder.name')}</h2>
              <p className={styles.h3}>{t('pages.about.founder.role')}</p>
              <p className={styles.text}>{t('pages.about.founder.body', { store: store.name })}</p>
              <div className={styles.actions}>
                {contact.hello ? (
                  <Link href={contact.hello} className={`${styles.btn} ${styles.btnGreen}`}>
                    <Icon name="whatsapp" className={styles.btnIcon} />
                    <span>{t('pages.about.founder.chat')}</span>
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHead eyebrow={t('pages.about.stats.eyebrow')} title={t('pages.about.stats.title')} />
          <ul className={styles.stats}>
            {stats.map((s) => (
              <li key={s.id} className={`${styles.stat} ${styles.reveal}`}>
                <span className={styles.statNum}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
                <span className={styles.statNote}>{t('pages.about.stats.note')}</span>
              </li>
            ))}
          </ul>
          <div className={styles.center}>
            <Link href="/shop-by-sport/" className={`${styles.btn} ${styles.btnOrange}`}>
              <span>{t('pages.about.explore')}</span>
              <Icon name="arrow" className={styles.btnIcon} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
