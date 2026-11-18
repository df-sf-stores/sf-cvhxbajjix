'use client'

import { useEffect, useRef, useState } from 'react'
import { Form, Link, SubmitButton, TextField, useStorefront } from '@dripfunnel/storefront-core/theme'
import { Icon } from '../catalog'
import { useContact } from '../site'
import styles from '../../styles/site.module.css'

/** The team and bulk order enquiry: checked, then sent through WhatsApp or email with every field filled in. */
export const TeamForm = () => {
  const { store, t } = useStorefront()
  const contact = useContact()
  const [name, setName] = useState('')
  const [institution, setInstitution] = useState('')
  const [phone, setPhone] = useState('')
  const [sport, setSport] = useState('')
  const [quantity, setQuantity] = useState('')
  const [message, setMessage] = useState('')
  const [tried, setTried] = useState(false)
  const [ready, setReady] = useState(false)
  const send = useRef<HTMLAnchorElement>(null)
  const nameError = tried && !name.trim() ? t('pages.team.form.nameError') : null
  const phoneError = tried && phone.replace(/\D/g, '').length < 10 ? t('pages.team.form.phoneError') : null
  const sportError = tried && !sport.trim() ? t('pages.team.form.sportError') : null
  const body = t('pages.team.form.whatsapp', { store: store.name, name, institution, phone, sport, quantity, message })
  const whatsapp = contact.whatsapp(body)
  const mail = contact.mail(t('pages.team.form.subject', { institution }), body)
  useEffect(() => {
    if (ready) send.current?.focus()
  }, [ready])
  const submit = () => {
    setTried(true)
    const ok = name.trim() !== '' && phone.replace(/\D/g, '').length >= 10 && sport.trim() !== ''
    setReady(ok)
  }
  return (
    <div className={styles.formCard}>
      <Form onSubmit={submit} label={t('pages.team.form.label')} className={styles.form}>
        <TextField label={t('pages.team.form.name')} value={name} onChange={setName} autoComplete="name" error={nameError} className={styles.field} />
        <TextField label={t('pages.team.form.institution')} value={institution} onChange={setInstitution} autoComplete="organization" note={t('pages.team.form.optional')} className={styles.field} />
        <TextField label={t('pages.team.form.phone')} value={phone} onChange={setPhone} type="tel" inputMode="tel" autoComplete="tel" error={phoneError} className={styles.field} />
        <TextField label={t('pages.team.form.sport')} value={sport} onChange={setSport} hint={t('pages.team.form.sportHint')} error={sportError} className={styles.field} />
        <TextField label={t('pages.team.form.quantity')} value={quantity} onChange={setQuantity} inputMode="numeric" note={t('pages.team.form.optional')} hint={t('pages.team.form.quantityHint')} className={styles.field} />
        <TextField label={t('pages.team.form.message')} value={message} onChange={setMessage} note={t('pages.team.form.optional')} hint={t('pages.team.form.messageHint')} maxLength={500} className={`${styles.field} ${styles.wide}`} />
        <div className={styles.wide}>
          <SubmitButton className={styles.submit}>{t('pages.team.form.submit')}</SubmitButton>
        </div>
      </Form>
      {ready ? (
        <div className={styles.ready} role="status">
          <p className={styles.readyTitle}>{t('pages.team.form.readyTitle')}</p>
          <p className={styles.small}>{t('pages.team.form.readyBody')}</p>
          <div className={styles.actions}>
            {whatsapp ? (
              <Link ref={send} href={whatsapp} className={`${styles.btn} ${styles.btnGreen}`}>
                <Icon name="whatsapp" className={styles.btnIcon} />
                <span>{t('pages.team.form.sendWhatsapp')}</span>
              </Link>
            ) : null}
            {mail ? (
              <Link href={mail} className={`${styles.btn} ${styles.btnOutline}`}>
                <Icon name="mail" className={styles.btnIcon} />
                <span>{t('pages.team.form.sendEmail')}</span>
              </Link>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  )
}
