import { useStorefront } from '@dripfunnel/storefront-core/theme'

const plain = /^[A-Za-z0-9._~-]$/

/** Percent-encodes words for a link's query, as UTF-8, so a WhatsApp or email message keeps its spaces and symbols. */
export const encode = (text: string): string => {
  let out = ''
  for (const ch of text) {
    if (plain.test(ch)) {
      out += ch
      continue
    }
    const cp = ch.codePointAt(0) ?? 0
    const bytes =
      cp < 0x80
        ? [cp]
        : cp < 0x800
          ? [0xc0 | (cp >> 6), 0x80 | (cp & 63)]
          : cp < 0x10000
            ? [0xe0 | (cp >> 12), 0x80 | ((cp >> 6) & 63), 0x80 | (cp & 63)]
            : [0xf0 | (cp >> 18), 0x80 | ((cp >> 12) & 63), 0x80 | ((cp >> 6) & 63), 0x80 | (cp & 63)]
    for (const b of bytes) out += `%${b < 16 ? '0' : ''}${b.toString(16).toUpperCase()}`
  }
  return out
}

/** The store's contact details from Site settings, and the links built from them. */
export const useContact = () => {
  const { store, t } = useStorefront()
  const digits = (store.contactPhone ?? '').replace(/\D/g, '')
  const national = digits.slice(-10)
  const country = digits.length > 10 ? digits.slice(0, -10) : ''
  const phone = digits ? t('site.phone', { country, national }) : ''
  const call = digits ? t('site.links.tel', { number: digits }) : ''
  const whatsapp = (text: string) => (digits ? t('site.links.whatsapp', { number: digits, text: encode(text) }) : '')
  const email = store.contactEmail ?? ''
  const mail = (subject: string, body: string) => (email ? t('site.links.gmail', { email, subject: encode(subject), body: encode(body) }) : '')
  const instagram = store.social.find((s) => s.network === 'instagram')?.url ?? ''
  const handle = instagram.split('/').filter(Boolean).pop() ?? ''
  return { phone, call, whatsapp, email, mail, instagram, handle, hello: whatsapp(t('site.wa.hello', { store: store.name })) }
}
