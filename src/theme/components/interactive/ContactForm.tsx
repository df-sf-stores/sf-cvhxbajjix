'use client'

import { useEffect, useRef, useState } from 'react'
import { Form, Link, SubmitButton, TextField, useStorefront } from '@dripfunnel/storefront-core/theme'
import { Icon } from '../catalog'
import { useContact } from '../site'
import styles from '../../styles/site.module.css'

/** The contact form: checked, then sent through WhatsApp or email with the shopper's words filled in. */
export const ContactForm = () => {
  const { store, t } = useStorefront()
  const contact = useContact()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [tried, setTried] = useState(false)
  const [ready, setReady] = useState(false)
  const send = useRef<HTMLAnchorElement>(null)
  const nameError = tried && !name.trim() ? t('pages.contact.form.nameError') : null
  const phoneError = tried && phone.replace(/\D/g, '').length < 10 ? t('pages.contact.form.phoneError') : null
  const messageError = tried && !message.trim() ? t('pages.contact.form.messageError') : null
  const body = t('pages.contact.form.whatsapp', { store: store.name, name, phone, email, message })
  const whatsapp = contact.whatsapp(body)
  const mail = contact.mail(t('pages.contact.form.subject', { name }), body)
  useEffect(() => {
    if (ready) send.current?.focus()
  }, [ready])
  const submit = () => {
    setTried(true)
    setReady(name.trim() !== '' && phone.replace(/\D/g, '').length >= 10 && message.trim() !== '')
  }
  return (
    <div className={styles.formCard}>
      <h2 className={styles.h3}>{t('pages.contact.form.title')}</h2>
      <Form onSubmit={submit} label={t('pages.contact.form.title')} className={styles.form}>
        <TextField label={t('pages.contact.form.name')} value={name} onChange={setName} autoComplete="name" error={nameError} className={styles.field} />
        <TextField label={t('pages.contact.form.phone')} value={phone} onChange={setPhone} type="tel" inputMode="tel" autoComplete="tel" error={phoneError} className={styles.field} />
        <TextField label={t('pages.contact.form.email')} value={email} onChange={setEmail} type="email" inputMode="email" autoComplete="email" note={t('pages.contact.form.optional')} className={`${styles.field} ${styles.wide}`} />
        <TextField label={t('pages.contact.form.message')} value={message} onChange={setMessage} maxLength={500} error={messageError} className={`${styles.field} ${styles.wide}`} />
        <div className={styles.wide}>
          <SubmitButton className={styles.submit}>{t('pages.contact.form.submit')}</SubmitButton>
        </div>
      </Form>
      {ready ? (
        <div className={styles.ready} role="status">
          <p className={styles.readyTitle}>{t('pages.contact.form.readyTitle')}</p>
          <p className={styles.small}>{t('pages.contact.form.readyBody')}</p>
          <div className={styles.actions}>
            {whatsapp ? (
              <Link ref={send} href={whatsapp} className={`${styles.btn} ${styles.btnGreen}`}>
                <Icon name="whatsapp" className={styles.btnIcon} />
                <span>{t('pages.contact.form.sendWhatsapp')}</span>
              </Link>
            ) : null}
            {mail ? (
              <Link href={mail} className={`${styles.btn} ${styles.btnOutline}`}>
                <Icon name="mail" className={styles.btnIcon} />
                <span>{t('pages.contact.form.sendEmail')}</span>
              </Link>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  )
}
