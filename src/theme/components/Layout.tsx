import type { ReactNode } from 'react'
import { ConsentBanner, ConsentSettingsButton, Link, PoweredBy, PreviewBanner, ThemeImage, useCart, useLocation, useStorefront, useWishlist } from '@dripfunnel/storefront-core/theme'
import { Icon, useSports } from './catalog'
import { MenuSearch } from './interactive/MenuSearch'
import { SiteMenu } from './interactive/SiteMenu'
import { useContact } from './site'
import styles from '../styles/site.module.css'

const same = (a: string, b: string) => a.replace(/\/+$/, '') === b.replace(/\/+$/, '')

export const Layout = ({ children }: { children: ReactNode }) => {
  const { store, t, mode, poweredBy } = useStorefront()
  const contact = useContact()
  const sports = useSports()
  const { path } = useLocation()
  const { count } = useCart()
  const { count: wished } = useWishlist()
  const links = [
    { href: '/', label: t('site.nav.home') },
    { href: '/about/', label: t('site.nav.about') },
    { href: '/shop-by-sport/', label: t('site.nav.shop') },
    { href: '/brands/', label: t('site.nav.brands') },
    { href: '/team-orders/', label: t('site.nav.team') },
    { href: '/gallery/', label: t('site.nav.gallery') },
    { href: '/contact/', label: t('site.nav.contact') },
  ]
  const help = [
    { href: '/collections/all/', label: t('site.footer.allProducts') },
    { href: '/account/', label: t('common.tools.account') },
    { href: '/account/orders/', label: t('site.footer.orders') },
    { href: '/cart/', label: t('common.tools.cart') },
    { href: '/policies/shipping/', label: t('common.footer.shipping') },
    { href: '/policies/returns/', label: t('common.footer.returns') },
    { href: '/policies/privacy/', label: t('common.footer.privacy') },
    { href: '/policies/terms/', label: t('common.footer.terms') },
  ]
  const mail = contact.mail(t('site.mail.subject', { store: store.name }), '')
  return (
    <div className={styles.shell}>
      {mode === 'live' ? null : <PreviewBanner t={t} className={styles.preview} />}
      <div className={styles.topbar}>
        <div className={`${styles.container} ${styles.topInner}`}>
          <div className={styles.topLinks}>
            {contact.call ? (
              <Link href={contact.call} className={styles.topLink}>
                <Icon name="phone" className={styles.topIcon} />
                <span>{contact.phone}</span>
              </Link>
            ) : null}
            {mail ? (
              <Link href={mail} className={`${styles.topLink} ${styles.topHideSm}`}>
                <Icon name="mail" className={styles.topIcon} />
                <span>{contact.email}</span>
              </Link>
            ) : null}
            {contact.instagram ? (
              <Link href={contact.instagram} className={styles.topLink}>
                <Icon name="instagram" className={styles.topIcon} />
                <span className={styles.hidden}>{t('site.top.instagram')}</span>
              </Link>
            ) : null}
          </div>
          <p className={styles.topNote}>{t('site.top.note')}</p>
        </div>
      </div>
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.headerInner}`}>
          <Link href="/" className={styles.brand}>
            <ThemeImage src="hitesh-logo.webp" alt={t('site.brand.logoAlt', { store: store.name })} ratio={3} sizes="220px" className={styles.logo} />
          </Link>
          <SiteMenu label={t('site.nav.menu')} close={t('site.nav.close')}>
            <div className={styles.menuTop}>
              <MenuSearch className={styles.menuSearch} />
              <Link href="/account/wishlist/" className={same(path, '/account/wishlist/') ? `${styles.navLink} ${styles.navActive} ${styles.menuWish}` : `${styles.navLink} ${styles.menuWish}`}>
                <Icon name="heart" className={styles.icon} />
                <span>{t('common.tools.wishlist')}</span>
                {wished > 0 ? <span className={styles.menuCount}>{wished}</span> : null}
              </Link>
            </div>
            <nav className={styles.nav} aria-label={t('site.nav.label')}>
              {links.map((l) => (
                <Link key={l.href} href={l.href} className={same(path, l.href) ? `${styles.navLink} ${styles.navActive}` : styles.navLink}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </SiteMenu>
          <div className={styles.headerActions}>
            <Link href="/search/" className={`${styles.iconButton} ${styles.hideMobile}`}>
              <Icon name="search" className={styles.icon} />
              <span className={styles.hidden}>{t('site.nav.search')}</span>
            </Link>
            <Link href="/account/" className={styles.iconButton}>
              <Icon name="user" className={styles.icon} />
              <span className={styles.hidden}>{t('common.tools.account')}</span>
            </Link>
            <Link href="/account/wishlist/" className={`${styles.iconButton} ${styles.hideMobile}`}>
              <Icon name="heart" className={styles.icon} />
              <span className={styles.hidden}>{wished > 0 ? t('common.tools.wishlistCount', { count: wished }) : t('common.tools.wishlist')}</span>
              {wished > 0 ? (
                <span className={styles.toolCount} aria-hidden="true">
                  {wished}
                </span>
              ) : null}
            </Link>
            <Link href="/cart/" className={styles.iconButton}>
              <Icon name="cart" className={styles.icon} />
              <span className={styles.hidden}>{count > 0 ? t('common.tools.cartCount', { count }) : t('common.tools.cart')}</span>
              {count > 0 ? (
                <span className={styles.toolCount} aria-hidden="true">
                  {count}
                </span>
              ) : null}
            </Link>
          </div>
        </div>
      </header>
      <main className={styles.main} id="main">
        {children}
      </main>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div className={styles.footerBrand}>
              <span className={styles.footerLogoWrap}>
                <ThemeImage src="hitesh-logo.webp" alt={t('site.brand.logoAlt', { store: store.name })} ratio={3} sizes="180px" className={styles.footerLogo} />
              </span>
              <p className={styles.footerText}>{t('site.footer.about')}</p>
              <p className={styles.gst}>{t('site.footer.gst')}</p>
              <div className={styles.social}>
                {contact.instagram ? (
                  <Link href={contact.instagram} className={styles.socialLink}>
                    <Icon name="instagram" className={styles.btnIcon} />
                    <span className={styles.hidden}>{t('site.top.instagram')}</span>
                  </Link>
                ) : null}
                <Link href={t('site.links.google')} className={styles.socialLink}>
                  <Icon name="google" className={styles.btnIcon} />
                  <span className={styles.hidden}>{t('site.footer.google')}</span>
                </Link>
                {contact.hello ? (
                  <Link href={contact.hello} className={styles.socialLink}>
                    <Icon name="whatsapp" className={styles.btnIcon} />
                    <span className={styles.hidden}>{t('site.nav.whatsapp')}</span>
                  </Link>
                ) : null}
              </div>
            </div>
            <div className={styles.footerCols}>
              <div>
                <h2 className={styles.footerTitle}>{t('site.footer.quick')}</h2>
                <ul className={styles.footerLinks}>
                  {links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className={styles.footerLink}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className={styles.footerTitle}>{t('site.footer.sports')}</h2>
                <ul className={styles.footerLinks}>
                  {sports.map((s) => (
                    <li key={s.id}>
                      <Link href={`/shop-by-sport/?sport=${s.id}`} className={styles.footerLink}>
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h2 className={styles.footerTitle}>{t('site.footer.help')}</h2>
              <ul className={styles.footerLinks}>
                {help.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={styles.footerLink}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className={styles.footerTitle}>{t('site.footer.contact')}</h2>
              <Link href={t('site.links.google')} className={styles.footerContact}>
                <Icon name="pin" className={styles.footerIcon} />
                <span>{t('site.address')}</span>
              </Link>
              {contact.call ? (
                <Link href={contact.call} className={styles.footerContact}>
                  <Icon name="phone" className={styles.footerIcon} />
                  <span>{contact.phone}</span>
                </Link>
              ) : null}
              {mail ? (
                <Link href={mail} className={styles.footerContact}>
                  <Icon name="mail" className={styles.footerIcon} />
                  <span>{contact.email}</span>
                </Link>
              ) : null}
            </div>
          </div>
        </div>
        <div className={styles.bottomBar}>
          <div className={`${styles.container} ${styles.baseInner}`}>
            <p className={styles.copyright}>{t('site.footer.copyright', { store: store.name })}</p>
            <div className={styles.baseRight}>
              <ConsentSettingsButton t={t} className={styles.cookies} />
              <span className={styles.divider} aria-hidden="true" />
              <span className={styles.poweredGroup}>
                {poweredBy ? <PoweredBy brand={poweredBy} t={t} className={styles.powered} /> : <span className={styles.powered}>{t('common.poweredBy')}</span>}
                <Link href={t('common.poweredUrl')} className={styles.brandLink}>
                  <ThemeImage src="dripfunnel-white-logo.png" alt={t('common.poweredLogo')} ratio={2077 / 369} sizes="104px" className={styles.brandLogo} />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </footer>
      {contact.call ? (
        <Link href={contact.call} className={styles.floatCall}>
          <Icon name="phone" className={styles.floatIcon} />
          <span className={styles.hidden}>{t('site.float.call')}</span>
        </Link>
      ) : null}
      <ConsentBanner t={t} className={styles.consent} />
    </div>
  )
}
