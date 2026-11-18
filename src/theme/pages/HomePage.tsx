import { Link, ThemeImage, useHead, useProducts, useStorefront } from '@dripfunnel/storefront-core/theme'
import { Layout } from '../components/Layout'
import { ProductSkeleton, SectionHead, SportTile, StoreProductCard } from '../components/Blocks'
import { Icon, useSports } from '../components/catalog'
import { HeroSlider } from '../components/interactive/HeroSlider'
import { useContact } from '../components/site'
import styles from '../styles/site.module.css'

const slots = [0, 1, 2, 3, 4, 5, 6, 7]

export const HomePage = () => {
  const { store, t } = useStorefront()
  const contact = useContact()
  const sports = useSports()
  const featured = useProducts({ sort: 'newest', first: 8 })
  useHead({ title: t('home.seo.title', { store: store.name }), description: t('home.seo.description', { store: store.name }) })
  const trust = [
    { icon: 'shield', label: t('home.trust.genuine') },
    { icon: 'medal', label: t('home.trust.brands') },
    { icon: 'chat', label: t('home.trust.expert') },
    { icon: 'tag', label: t('home.trust.prices') },
    { icon: 'calendar', label: t('home.trust.since') },
  ] as const
  const serve = [
    { icon: 'beginner', label: t('home.serve.beginners') },
    { icon: 'heart', label: t('home.serve.amateurs') },
    { icon: 'school', label: t('home.serve.schools') },
    { icon: 'athlete', label: t('home.serve.pros') },
    { icon: 'academy', label: t('home.serve.academies') },
  ] as const
  const why = [
    { icon: 'shield', title: t('home.why.genuine.title'), body: t('home.why.genuine.body') },
    { icon: 'medal', title: t('home.why.brands.title'), body: t('home.why.brands.body') },
    { icon: 'chat', title: t('home.why.expert.title'), body: t('home.why.expert.body') },
    { icon: 'tag', title: t('home.why.prices.title'), body: t('home.why.prices.body') },
    { icon: 'team', title: t('home.why.teams.title'), body: t('home.why.teams.body') },
    { icon: 'heart', title: t('home.why.local.title'), body: t('home.why.local.body') },
  ] as const
  const reviews = [
    { id: 'one', text: t('home.reviews.one.text'), name: t('home.reviews.one.name') },
    { id: 'two', text: t('home.reviews.two.text'), name: t('home.reviews.two.name') },
    { id: 'three', text: t('home.reviews.three.text'), name: t('home.reviews.three.name') },
  ]
  const insta = [
    { image: 'gallery-court.webp', alt: t('home.insta.one') },
    { image: 'sport-badminton.webp', alt: t('home.insta.two') },
    { image: 'gallery-goal.webp', alt: t('home.insta.three') },
    { image: 'prod-cricket-ball.webp', alt: t('home.insta.four') },
    { image: 'gallery-lift.webp', alt: t('home.insta.five') },
    { image: 'team-volley.webp', alt: t('home.insta.six') },
  ] as const
  return (
    <Layout>
      <HeroSlider />

      <section className={styles.trust} aria-label={t('home.trust.label')}>
        <div className={styles.container}>
          <ul className={styles.trustList}>
            {trust.map((item, i) => (
              <li key={item.icon} className={styles.trustItem}>
                <span className={i % 2 ? styles.trustIconAlt : styles.trustIcon}>
                  <Icon name={item.icon} className={styles.btnIcon} />
                </span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHead eyebrow={t('home.sports.eyebrow')} title={t('home.sports.title')} lead={t('home.sports.lead')} />
          <ul className={styles.sportGrid}>
            {sports.map((s) => (
              <li key={s.id} className={styles.reveal}>
                <SportTile sport={s} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.sectionWhite}>
        <div className={`${styles.container} ${styles.split}`}>
          <div className={`${styles.splitMedia} ${styles.reveal}`}>
            <ThemeImage src="about-stadium.webp" alt={t('home.about.imageAlt')} ratio={4 / 3} sizes="(min-width: 900px) 50vw, 100vw" className={styles.splitImg} />
            <span className={styles.since}>
              <span className={styles.sinceYear}>{t('home.about.year')}</span>
              <span className={styles.sinceLabel}>{t('home.about.since')}</span>
            </span>
          </div>
          <div className={`${styles.splitCopy} ${styles.reveal}`}>
            <p className={styles.eyebrow}>{t('home.about.eyebrow')}</p>
            <h2 className={styles.h2}>{t('home.about.title', { store: store.name })}</h2>
            <p className={styles.lead}>{t('home.about.body')}</p>
            <ul className={styles.checks}>
              <li className={styles.check}>
                <Icon name="shield" className={styles.checkIcon} />
                <span>{t('home.about.pointOne')}</span>
              </li>
              <li className={styles.check}>
                <Icon name="chat" className={styles.checkIcon} />
                <span>{t('home.about.pointTwo')}</span>
              </li>
              <li className={styles.check}>
                <Icon name="tag" className={styles.checkIcon} />
                <span>{t('home.about.pointThree')}</span>
              </li>
            </ul>
            <Link href="/about/" className={`${styles.btn} ${styles.btnNavy}`}>
              <span>{t('home.about.more')}</span>
              <Icon name="arrow" className={styles.btnIcon} />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHead eyebrow={t('home.products.eyebrow')} title={t('home.products.title')} lead={t('home.products.lead')} />
          {featured.status === 'ready' && featured.products.length === 0 ? (
            <p className={`${styles.lead} ${styles.centerText}`}>{t('home.products.empty')}</p>
          ) : featured.status === 'ready' ? (
            <ul className={styles.productGrid}>
              {featured.products.map((p) => (
                <li key={p.id} className={styles.reveal}>
                  <StoreProductCard product={p} />
                </li>
              ))}
            </ul>
          ) : (
            <ProductSkeleton label={t('home.products.loading')} />
          )}
          <div className={styles.center}>
            <Link href="/collections/all/" className={`${styles.btn} ${styles.btnOutline}`}>
              <span>{t('home.products.all')}</span>
              <Icon name="arrow" className={styles.btnIcon} />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <SectionHead eyebrow={t('home.brands.eyebrow')} title={t('home.brands.title')} lead={t('home.brands.lead')} />
          <ul className={styles.brandGrid}>
            {slots.map((n) => (
              <li key={n} className={`${styles.brandTile} ${styles.reveal}`}>
                <span className={styles.brandMark}>{t('home.brands.logo')}</span>
                <span className={styles.brandNote}>{t('home.brands.note')}</span>
              </li>
            ))}
          </ul>
          <div className={styles.center}>
            <Link href="/brands/" className={`${styles.btn} ${styles.btnOutline}`}>
              <span>{t('home.brands.all')}</span>
              <Icon name="arrow" className={styles.btnIcon} />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.serve}>
        <div className={styles.container}>
          <div className={`${styles.serveHead} ${styles.reveal}`}>
            <p className={styles.serveEyebrow}>{t('home.serve.eyebrow')}</p>
            <h2 className={styles.serveTitle}>{t('home.serve.title')}</h2>
            <p className={styles.serveLead}>{t('home.serve.lead')}</p>
          </div>
          <ul className={styles.serveGrid}>
            {serve.map((s) => (
              <li key={s.icon} className={`${styles.serveItem} ${styles.reveal}`}>
                <span className={styles.serveIcon}>
                  <Icon name={s.icon} className={styles.cardIconSvg} />
                </span>
                <h3 className={styles.serveName}>{s.label}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHead eyebrow={t('home.why.eyebrow')} title={t('home.why.title', { store: store.name })} lead={t('home.why.lead')} />
          <ul className={styles.cardGrid}>
            {why.map((w, i) => (
              <li key={w.icon} className={styles.reveal}>
                <div className={styles.card}>
                  <span className={i % 2 ? styles.cardIconGreen : styles.cardIcon}>
                    <Icon name={w.icon} className={styles.cardIconSvg} />
                  </span>
                  <h3 className={styles.h3}>{w.title}</h3>
                  <p className={styles.text}>{w.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <SectionHead eyebrow={t('home.reviews.eyebrow')} title={t('home.reviews.title')} lead={t('home.reviews.lead')} />
          <ul className={styles.cardGrid}>
            {reviews.map((r) => (
              <li key={r.id} className={styles.reveal}>
                <figure className={styles.quote}>
                  <svg className={styles.quoteMark} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
                    <path d="M4 18v-5.5C4 8.4 6 6 9.5 5.5l.5 1.8c-2 .6-3 1.8-3 3.7H10V18zm10 0v-5.5c0-4.1 2-6.5 5.5-7l.5 1.8c-2 .6-3 1.8-3 3.7H20V18z" />
                  </svg>
                  <blockquote className={styles.quoteText}>{r.text}</blockquote>
                  <figcaption className={styles.quoteWho}>
                    <span className={styles.avatar}>
                      <Icon name="team" className={styles.btnIcon} />
                    </span>
                    <span>
                      <span className={styles.quoteName}>{r.name}</span>
                      <br />
                      <span className={styles.placeholder}>{t('site.placeholder')}</span>
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
          <div className={styles.center}>
            <Link href={t('site.links.google')} className={`${styles.btn} ${styles.btnNavy}`}>
              <Icon name="google" className={styles.btnIcon} />
              <span>{t('home.reviews.google')}</span>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.insta}>
        <div className={`${styles.container} ${styles.instaInner}`}>
          <div className={`${styles.splitCopy} ${styles.reveal}`}>
            <p className={styles.eyebrow}>{t('home.insta.eyebrow')}</p>
            <h2 className={styles.h2}>{contact.handle ? t('home.insta.title', { handle: contact.handle }) : t('home.insta.titlePlain')}</h2>
            <p className={styles.lead}>{t('home.insta.lead')}</p>
            {contact.instagram ? (
              <Link href={contact.instagram} className={`${styles.btn} ${styles.btnOrange}`}>
                <Icon name="instagram" className={styles.btnIcon} />
                <span>{t('home.insta.follow')}</span>
              </Link>
            ) : null}
          </div>
          <ul className={`${styles.instaGrid} ${styles.reveal}`}>
            {insta.map((p) => (
              <li key={p.image}>
                {contact.instagram ? (
                  <Link href={contact.instagram} className={styles.instaTile}>
                    <ThemeImage src={p.image} alt={p.alt} ratio={1} sizes="(min-width: 900px) 15vw, 33vw" className={styles.instaImg} />
                  </Link>
                ) : (
                  <span className={styles.instaTile}>
                    <ThemeImage src={p.image} alt={p.alt} ratio={1} sizes="(min-width: 900px) 15vw, 33vw" className={styles.instaImg} />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.cta}>
          <ThemeImage src="cta-track.webp" alt={t('home.cta.imageAlt')} ratio={16 / 7} sizes="100vw" className={styles.ctaImg} />
          <div className={`${styles.ctaInner} ${styles.reveal}`}>
            <p className={styles.serveEyebrow}>{t('home.cta.eyebrow')}</p>
            <h2 className={styles.ctaTitle}>{t('home.cta.title')}</h2>
            <p className={styles.ctaLead}>{t('home.cta.lead')}</p>
            <div className={styles.actions}>
              {contact.call ? (
                <Link href={contact.call} className={`${styles.btn} ${styles.btnOrange}`}>
                  <Icon name="phone" className={styles.btnIcon} />
                  <span>{t('home.cta.call', { phone: contact.phone })}</span>
                </Link>
              ) : null}
              <Link href="/shop-by-sport/" className={`${styles.btn} ${styles.btnGreen}`}>
                <Icon name="cart" className={styles.btnIcon} />
                <span>{t('home.cta.shop')}</span>
              </Link>
              <Link href={t('site.links.google')} className={`${styles.btn} ${styles.btnLight}`}>
                <Icon name="pin" className={styles.btnIcon} />
                <span>{t('home.cta.directions')}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
