import { Link, useHead, useStorefront } from '@dripfunnel/storefront-core/theme'
import { Layout } from '../components/Layout'
import { PageHero } from '../components/Blocks'
import { Icon } from '../components/catalog'
import { ContactForm } from '../components/interactive/ContactForm'
import { useContact } from '../components/site'
import styles from '../styles/site.module.css'

export const ContactPage = () => {
  const { store, t } = useStorefront()
  const contact = useContact()
  useHead({ title: t('pages.contact.seo', { store: store.name }), description: t('pages.contact.lead') })
  const mail = contact.mail(t('site.mail.subject', { store: store.name }), '')
  return (
    <Layout>
      <PageHero eyebrow={t('pages.contact.eyebrow')} title={t('pages.contact.title')} lead={t('pages.contact.lead')} />
      <section className={styles.section}>
        <div className={`${styles.container} ${styles.contactGrid}`}>
          <div className={styles.prose}>
            <ul className={styles.contactList}>
              <li className={`${styles.contactItem} ${styles.reveal}`}>
                <span className={styles.contactIcon}>
                  <Icon name="pin" className={styles.btnIcon} />
                </span>
                <div className={styles.contactBody}>
                  <p className={styles.contactLabel}>{t('pages.contact.visit')}</p>
                  <Link href={t('site.links.map')} className={styles.contactValue}>
                    {t('site.address')}
                  </Link>
                </div>
              </li>
              {contact.call ? (
                <li className={`${styles.contactItem} ${styles.reveal}`}>
                  <span className={styles.contactIcon}>
                    <Icon name="phone" className={styles.btnIcon} />
                  </span>
                  <div className={styles.contactBody}>
                    <p className={styles.contactLabel}>{t('pages.contact.phone')}</p>
                    <Link href={contact.call} className={styles.contactValue}>
                      {contact.phone}
                    </Link>
                  </div>
                </li>
              ) : null}
              {contact.hello ? (
                <li className={`${styles.contactItem} ${styles.reveal}`}>
                  <span className={styles.contactIcon}>
                    <Icon name="whatsapp" className={styles.btnIcon} />
                  </span>
                  <div className={styles.contactBody}>
                    <p className={styles.contactLabel}>{t('pages.contact.whatsapp')}</p>
                    <Link href={contact.hello} className={styles.contactValue}>
                      {contact.phone}
                    </Link>
                  </div>
                </li>
              ) : null}
              {mail ? (
                <li className={`${styles.contactItem} ${styles.reveal}`}>
                  <span className={styles.contactIcon}>
                    <Icon name="mail" className={styles.btnIcon} />
                  </span>
                  <div className={styles.contactBody}>
                    <p className={styles.contactLabel}>{t('pages.contact.email')}</p>
                    <Link href={mail} className={styles.contactValue}>
                      {contact.email}
                    </Link>
                  </div>
                </li>
              ) : null}
              {contact.instagram ? (
                <li className={`${styles.contactItem} ${styles.reveal}`}>
                  <span className={styles.contactIcon}>
                    <Icon name="instagram" className={styles.btnIcon} />
                  </span>
                  <div className={styles.contactBody}>
                    <p className={styles.contactLabel}>{t('pages.contact.instagram')}</p>
                    <Link href={contact.instagram} className={styles.contactValue}>
                      {t('pages.contact.instagramHandle', { handle: contact.handle })}
                    </Link>
                  </div>
                </li>
              ) : null}
            </ul>
            <div className={`${styles.card} ${styles.reveal}`}>
              <h2 className={styles.h3}>
                <Icon name="clock" className={styles.btnIcon} /> {t('pages.contact.hours.title')}
              </h2>
              <dl className={styles.hours}>
                <div className={styles.hoursRow}>
                  <dt className={styles.hoursDay}>{t('pages.contact.hours.days')}</dt>
                  <dd className={styles.hoursOpen}>{t('pages.contact.hours.time')}</dd>
                </div>
              </dl>
              <p className={styles.small}>{t('pages.contact.hours.note')}</p>
            </div>
          </div>
          <div className={styles.prose}>
            <div className={`${styles.mapCard} ${styles.reveal}`}>
              <span className={styles.mapPin}>
                <Icon name="pin" className={styles.mapPinIcon} />
              </span>
              <h2 className={styles.h3}>{t('pages.contact.map.title')}</h2>
              <p className={styles.small}>{t('site.address')}</p>
              <div className={styles.actions}>
                <Link href={t('site.links.google')} className={`${styles.btn} ${styles.btnBrand}`}>
                  <Icon name="pin" className={styles.btnIcon} />
                  <span>{t('pages.contact.map.directions')}</span>
                </Link>
                <Link href={t('site.links.map')} className={`${styles.btn} ${styles.btnOutline}`}>
                  <span>{t('pages.contact.map.open')}</span>
                </Link>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  )
}
