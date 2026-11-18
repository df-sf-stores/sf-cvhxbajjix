'use client'

import { useEffect, useState } from 'react'
import { Link, ThemeImage, useReducedMotion, useStorefront } from '@dripfunnel/storefront-core/theme'
import { Icon } from '../catalog'
import { useContact } from '../site'
import styles from '../../styles/site.module.css'

const everyMs = 6000

/** The home page's three slides, turning every few seconds unless paused or the shopper prefers less motion. */
export const HeroSlider = () => {
  const { t } = useStorefront()
  const contact = useContact()
  const still = useReducedMotion()
  const [shown, setShown] = useState(0)
  const [paused, setPaused] = useState(false)
  const slides = [
    { image: 'hero-cricket.webp', tag: t('home.hero.one.tag'), title: t('home.hero.one.title'), lead: t('home.hero.one.lead'), alt: t('home.hero.one.alt'), position: t('home.hero.one.position'), goTo: t('home.hero.one.goTo') },
    { image: 'hero-football.webp', tag: t('home.hero.two.tag'), title: t('home.hero.two.title'), lead: t('home.hero.two.lead'), alt: t('home.hero.two.alt'), position: t('home.hero.two.position'), goTo: t('home.hero.two.goTo') },
    { image: 'hero-team.webp', tag: t('home.hero.three.tag'), title: t('home.hero.three.title'), lead: t('home.hero.three.lead'), alt: t('home.hero.three.alt'), position: t('home.hero.three.position'), goTo: t('home.hero.three.goTo') },
  ] as const
  const count = slides.length
  useEffect(() => {
    if (still || paused) return
    const timer = setInterval(() => setShown((n) => (n + 1) % count), everyMs)
    return () => clearInterval(timer)
  }, [still, paused, count])
  const go = (n: number) => setShown((n + count) % count)
  return (
    <section className={styles.hero} aria-roledescription={t('home.hero.carousel')} aria-label={t('home.hero.label')} onPointerEnter={() => setPaused(true)} onPointerLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      {slides.map((s, i) => (
        <div key={s.image} className={i === shown ? styles.slideActive : styles.slide} aria-hidden={i === shown ? undefined : true} role="group" aria-roledescription={t('home.hero.slide')} aria-label={s.position}>
          <ThemeImage src={s.image} alt={s.alt} ratio={16 / 9} sizes="100vw" className={styles.slideImg} />
          <div className={styles.slideShade} />
          <div className={styles.slideContent}>
            <div className={styles.container}>
              <div className={styles.slideCopy}>
                <span className={styles.slideTag}>{s.tag}</span>
                {i === 0 ? <h1 className={styles.slideTitle}>{s.title}</h1> : <h2 className={styles.slideTitle}>{s.title}</h2>}
                <p className={styles.slideLead}>{s.lead}</p>
                {i === shown ? (
                  <div className={styles.actions}>
                    <Link href="/shop-by-sport/" className={`${styles.btn} ${styles.btnOrange}`}>
                      <span>{t('home.hero.explore')}</span>
                      <Icon name="arrow" className={styles.btnIcon} />
                    </Link>
                    {contact.hello ? (
                      <Link href={contact.hello} className={`${styles.btn} ${styles.btnLight}`}>
                        <Icon name="whatsapp" className={styles.btnIcon} />
                        <span>{t('home.hero.chat')}</span>
                      </Link>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className={styles.heroControls}>
        <div className={`${styles.container} ${styles.heroControlsInner}`}>
          <div className={styles.dots}>
            {slides.map((s, i) => (
              <button key={s.image} type="button" className={styles.dot} aria-current={i === shown ? true : undefined} onClick={() => go(i)}>
                <span className={i === shown ? styles.dotMarkActive : styles.dotMark} />
                <span className={styles.hidden}>{s.goTo}</span>
              </button>
            ))}
          </div>
          <div className={styles.arrows}>
            <button type="button" className={styles.arrowButton} onClick={() => go(shown - 1)}>
              <Icon name="arrow" className={`${styles.btnIcon} ${styles.flip}`} />
              <span className={styles.hidden}>{t('home.hero.previous')}</span>
            </button>
            <button type="button" className={styles.arrowButton} onClick={() => go(shown + 1)}>
              <Icon name="arrow" className={styles.btnIcon} />
              <span className={styles.hidden}>{t('home.hero.next')}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
