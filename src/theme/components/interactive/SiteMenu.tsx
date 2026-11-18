'use client'

import { useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import styles from '../../styles/site.module.css'

/** The header's menu: a toggle on phones, always open on wide screens. */
export const SiteMenu = ({ label, close, children }: { label: string; close: string; children: ReactNode }) => {
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  const onKey = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Escape' || !open) return
    setOpen(false)
    toggle.current?.focus()
  }
  return (
    <>
      <button ref={toggle} type="button" className={`${styles.iconButton} ${styles.menuToggle}`} aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(!open)}>
        <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" focusable="false">
          <path d={open ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'} />
        </svg>
        <span className={styles.hidden}>{open ? close : label}</span>
      </button>
      <div id="site-menu" className={open ? styles.navPanelOpen : styles.navPanel} onKeyDown={onKey}>
        {children}
      </div>
    </>
  )
}
