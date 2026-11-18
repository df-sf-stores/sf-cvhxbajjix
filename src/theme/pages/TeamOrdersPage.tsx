import { Link, ThemeImage, useHead, useStorefront } from '@dripfunnel/storefront-core/theme'
import { Layout } from '../components/Layout'
import { PageHero, SectionHead } from '../components/Blocks'
import { Icon } from '../components/catalog'
import { TeamForm } from '../components/interactive/TeamForm'
import { useContact } from '../components/site'
import styles from '../styles/site.module.css'

export const TeamOrdersPage = () => {
  const { store, t } = useStorefront()
  const contact = useContact()
  useHead({ title: t('pages.team.seo', { store: store.name }), description: t('pages.team.lead') })
  const services = [
    { icon: 'jersey', title: t('pages.team.services.kits.title'), body: t('pages.team.services.kits.body') },
    { icon: 'apparel', title: t('pages.team.services.jerseys.title'), body: t('pages.team.services.jerseys.body') },
    { icon: 'box', title: t('pages.team.services.bulk.title'), body: t('pages.team.services.bulk.body') },
    { icon: 'gifts', title: t('pages.team.services.trophies.title'), body: t('pages.team.services.trophies.body') },
    { icon: 'flag', title: t('pages.team.services.sportsDay.title'), body: t('pages.team.services.sportsDay.body') },
    { icon: 'chat', title: t('pages.team.services.advice.title'), body: t('pages.team.services.advice.body') },
  ] as const
  const who = [
    { icon: 'school', label: t('pages.team.who.schools') },
    { icon: 'academy', label: t('pages.team.who.colleges') },
    { icon: 'athlete', label: t('pages.team.who.academies') },
    { icon: 'team', label: t('pages.team.who.clubs') },
  ] as const
  return (
    <Layout>
      <PageHero eyebrow={t('pages.team.eyebrow')} title={t('pages.team.title')} lead={t('pages.team.lead')}>
        <div className={styles.actions}>
          {contact.hello ? (
            <Link href={contact.hello} className={`${styles.btn} ${styles.btnGreen}`}>
              <Icon name="whatsapp" className={styles.btnIcon} />
              <span>{t('pages.team.chat')}</span>
            </Link>
          ) : null}
          {contact.call ? (
            <Link href={contact.call} className={`${styles.btn} ${styles.btnLight}`}>
              <Icon name="phone" className={styles.btnIcon} />
              <span>{t('pages.team.call')}</span>
            </Link>
          ) : null}
        </div>
      </PageHero>

      <section className={styles.section}>
        <div className={`${styles.container} ${styles.split}`}>
          <div className={`${styles.splitMedia} ${styles.reveal}`}>
            <ThemeImage src="team-kids.webp" alt={t('pages.team.imageAlt')} ratio={4 / 3} sizes="(min-width: 900px) 50vw, 100vw" className={styles.splitImg} />
          </div>
          <div className={`${styles.splitCopy} ${styles.reveal}`}>
            <p className={styles.eyebrow}>{t('pages.team.forEyebrow')}</p>
            <h2 className={styles.h2}>{t('pages.team.forTitle')}</h2>
            <p className={styles.lead}>{t('pages.team.forBody')}</p>
            <ul className={styles.checks}>
              {who.map((w) => (
                <li key={w.icon} className={styles.check}>
                  <Icon name={w.icon} className={styles.checkIcon} />
                  <span>{w.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <SectionHead eyebrow={t('pages.team.services.eyebrow')} title={t('pages.team.services.title')} lead={t('pages.team.services.lead')} />
          <ul className={styles.cardGrid}>
            {services.map((s, i) => (
              <li key={s.icon} className={styles.reveal}>
                <div className={styles.card}>
                  <span className={i % 2 ? styles.cardIconGreen : styles.cardIcon}>
                    <Icon name={s.icon} className={styles.cardIconSvg} />
                  </span>
                  <h3 className={styles.h3}>{s.title}</h3>
                  <p className={styles.text}>{s.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section} id="enquiry">
        <div className={styles.container}>
          <SectionHead eyebrow={t('pages.team.form.eyebrow')} title={t('pages.team.form.title')} lead={t('pages.team.form.lead')} />
          <TeamForm />
        </div>
      </section>
    </Layout>
  )
}
