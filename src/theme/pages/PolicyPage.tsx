import type { ReactNode } from 'react'
import { Link, useHead, useLocation, useStorefront } from '@dripfunnel/storefront-core/theme'
import { Layout } from '../components/Layout'
import { PageHero } from '../components/Blocks'
import { Icon } from '../components/catalog'
import styles from '../styles/site.module.css'

// The policy pages' shape: each section's heading and blocks, by content key (pages.policies in content/en/pages.json).
const policyLayouts = {
  'terms': {
    'intro': 'pages.policies.terms.intro',
    'outro': 'pages.policies.terms.outro',
    'sections': [
      {
        'id': 's1',
        'title': 'pages.policies.terms.s1.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.terms.s1.b1'
          }
        ]
      },
      {
        'id': 's2',
        'title': 'pages.policies.terms.s2.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.terms.s2.b1'
          }
        ]
      },
      {
        'id': 's3',
        'title': 'pages.policies.terms.s3.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.terms.s3.b1'
          }
        ]
      },
      {
        'id': 's4',
        'title': 'pages.policies.terms.s4.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.terms.s4.b1'
          }
        ]
      },
      {
        'id': 's5',
        'title': 'pages.policies.terms.s5.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.terms.s5.b1'
          }
        ]
      },
      {
        'id': 's6',
        'title': 'pages.policies.terms.s6.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.terms.s6.b1'
          }
        ]
      },
      {
        'id': 's7',
        'title': 'pages.policies.terms.s7.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.terms.s7.b1'
          }
        ]
      },
      {
        'id': 's8',
        'title': 'pages.policies.terms.s8.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.terms.s8.b1'
          }
        ]
      }
    ]
  },
  'privacy': {
    'intro': 'pages.policies.privacy.intro',
    'outro': null,
    'sections': [
      {
        'id': 's1',
        'title': 'pages.policies.privacy.s1.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.privacy.s1.b1'
          },
          {
            'kind': 'ul',
            'keys': [
              'pages.policies.privacy.s1.b2',
              'pages.policies.privacy.s1.b3',
              'pages.policies.privacy.s1.b4',
              'pages.policies.privacy.s1.b5',
              'pages.policies.privacy.s1.b6'
            ]
          }
        ]
      },
      {
        'id': 's2',
        'title': 'pages.policies.privacy.s2.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.privacy.s2.b1'
          },
          {
            'kind': 'ul',
            'keys': [
              'pages.policies.privacy.s2.b2',
              'pages.policies.privacy.s2.b3',
              'pages.policies.privacy.s2.b4',
              'pages.policies.privacy.s2.b5',
              'pages.policies.privacy.s2.b6',
              'pages.policies.privacy.s2.b7'
            ]
          }
        ]
      },
      {
        'id': 's3',
        'title': 'pages.policies.privacy.s3.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.privacy.s3.b1'
          },
          {
            'kind': 'p',
            'key': 'pages.policies.privacy.s3.b2'
          }
        ]
      },
      {
        'id': 's4',
        'title': 'pages.policies.privacy.s4.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.privacy.s4.b1'
          }
        ]
      },
      {
        'id': 's5',
        'title': 'pages.policies.privacy.s5.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.privacy.s5.b1'
          }
        ]
      },
      {
        'id': 's6',
        'title': 'pages.policies.privacy.s6.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.privacy.s6.b1'
          }
        ]
      },
      {
        'id': 's7',
        'title': 'pages.policies.privacy.s7.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.privacy.s7.b1'
          }
        ]
      },
      {
        'id': 's8',
        'title': 'pages.policies.privacy.s8.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.privacy.s8.b1'
          }
        ]
      },
      {
        'id': 's9',
        'title': 'pages.policies.privacy.s9.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.privacy.s9.b1'
          }
        ]
      }
    ]
  },
  'shipping': {
    'intro': 'pages.policies.shipping.intro',
    'outro': null,
    'sections': [
      {
        'id': 's1',
        'title': 'pages.policies.shipping.s1.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.shipping.s1.b1'
          }
        ]
      },
      {
        'id': 's2',
        'title': 'pages.policies.shipping.s2.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.shipping.s2.b1'
          },
          {
            'kind': 'p',
            'key': 'pages.policies.shipping.s2.b2'
          }
        ]
      },
      {
        'id': 's3',
        'title': 'pages.policies.shipping.s3.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.shipping.s3.b1'
          }
        ]
      },
      {
        'id': 's4',
        'title': 'pages.policies.shipping.s4.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.shipping.s4.b1'
          }
        ]
      },
      {
        'id': 's5',
        'title': 'pages.policies.shipping.s5.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.shipping.s5.b1'
          }
        ]
      },
      {
        'id': 's6',
        'title': 'pages.policies.shipping.s6.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.shipping.s6.b1'
          }
        ]
      },
      {
        'id': 's7',
        'title': 'pages.policies.shipping.s7.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.shipping.s7.b1'
          }
        ]
      },
      {
        'id': 's8',
        'title': 'pages.policies.shipping.s8.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.shipping.s8.b1'
          }
        ]
      }
    ]
  },
  'legal': {
    'intro': 'pages.policies.legal.intro',
    'outro': null,
    'sections': [
      {
        'id': 's1',
        'title': 'pages.policies.legal.s1.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.legal.s1.b1'
          }
        ]
      },
      {
        'id': 's2',
        'title': 'pages.policies.legal.s2.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.legal.s2.b1'
          }
        ]
      },
      {
        'id': 's3',
        'title': 'pages.policies.legal.s3.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.legal.s3.b1'
          }
        ]
      },
      {
        'id': 's4',
        'title': 'pages.policies.legal.s4.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.legal.s4.b1'
          }
        ]
      },
      {
        'id': 's5',
        'title': 'pages.policies.legal.s5.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.legal.s5.b1'
          }
        ]
      },
      {
        'id': 's6',
        'title': 'pages.policies.legal.s6.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.legal.s6.b1'
          }
        ]
      },
      {
        'id': 's7',
        'title': 'pages.policies.legal.s7.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.legal.s7.b1'
          }
        ]
      }
    ]
  },
  'returns': {
    'intro': 'pages.policies.returns.intro',
    'outro': 'pages.policies.returns.outro',
    'sections': [
      {
        'id': 's1',
        'title': 'pages.policies.returns.s1.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.returns.s1.b1'
          },
          {
            'kind': 'p',
            'key': 'pages.policies.returns.s1.b2'
          }
        ]
      },
      {
        'id': 's2',
        'title': 'pages.policies.returns.s2.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.returns.s2.b1'
          },
          {
            'kind': 'ul',
            'keys': [
              'pages.policies.returns.s2.b2',
              'pages.policies.returns.s2.b3',
              'pages.policies.returns.s2.b4',
              'pages.policies.returns.s2.b5'
            ]
          },
          {
            'kind': 'p',
            'key': 'pages.policies.returns.s2.b6'
          }
        ]
      },
      {
        'id': 's3',
        'title': 'pages.policies.returns.s3.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.returns.s3.b1'
          },
          {
            'kind': 'ul',
            'keys': [
              'pages.policies.returns.s3.b2',
              'pages.policies.returns.s3.b3',
              'pages.policies.returns.s3.b4'
            ]
          },
          {
            'kind': 'p',
            'key': 'pages.policies.returns.s3.b5'
          }
        ]
      },
      {
        'id': 's4',
        'title': 'pages.policies.returns.s4.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.returns.s4.b1'
          },
          {
            'kind': 'p',
            'key': 'pages.policies.returns.s4.b2'
          },
          {
            'kind': 'ul',
            'keys': [
              'pages.policies.returns.s4.b3',
              'pages.policies.returns.s4.b4',
              'pages.policies.returns.s4.b5',
              'pages.policies.returns.s4.b6'
            ]
          },
          {
            'kind': 'p',
            'key': 'pages.policies.returns.s4.b7'
          }
        ]
      },
      {
        'id': 's5',
        'title': 'pages.policies.returns.s5.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.returns.s5.b1'
          },
          {
            'kind': 'ul',
            'keys': [
              'pages.policies.returns.s5.b2',
              'pages.policies.returns.s5.b3',
              'pages.policies.returns.s5.b4'
            ]
          },
          {
            'kind': 'p',
            'key': 'pages.policies.returns.s5.b5'
          }
        ]
      },
      {
        'id': 's6',
        'title': 'pages.policies.returns.s6.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.returns.s6.b1'
          },
          {
            'kind': 'p',
            'key': 'pages.policies.returns.s6.b2'
          }
        ]
      },
      {
        'id': 's7',
        'title': 'pages.policies.returns.s7.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.returns.s7.b1'
          },
          {
            'kind': 'ul',
            'keys': [
              'pages.policies.returns.s7.b2',
              'pages.policies.returns.s7.b3',
              'pages.policies.returns.s7.b4',
              'pages.policies.returns.s7.b5'
            ]
          },
          {
            'kind': 'p',
            'key': 'pages.policies.returns.s7.b6'
          }
        ]
      },
      {
        'id': 's8',
        'title': 'pages.policies.returns.s8.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.returns.s8.b1'
          }
        ]
      },
      {
        'id': 's9',
        'title': 'pages.policies.returns.s9.title',
        'blocks': [
          {
            'kind': 'p',
            'key': 'pages.policies.returns.s9.b1'
          }
        ]
      }
    ]
  }
} as const

const kinds = ['terms', 'privacy', 'shipping', 'returns', 'legal'] as const
type Kind = (typeof kinds)[number]

/** A policy line, with its **marked** words (a period, a delivery estimate) highlighted. */
const Marked = ({ text }: { text: string }): ReactNode =>
  text.split('**').map((part, i) =>
    i % 2 ? (
      <strong key={i} className={styles.policyMark}>
        {part}
      </strong>
    ) : (
      part
    ),
  )

export const PolicyPage = () => {
  const { store, t } = useStorefront()
  const { path } = useLocation()
  const kind = kinds.find((k) => path === `/policies/${k}/` || path === `/policies/${k}`)
  const names: Record<Kind, string> = { terms: t('pages.policy.terms'), privacy: t('pages.policy.privacy'), shipping: t('pages.policy.shipping'), returns: t('pages.policy.returns'), legal: t('pages.policy.legal') }
  const layout = kind ? policyLayouts[kind] : null
  useHead({
    title: t('pages.policy.seo', { name: kind ? names[kind] : t('pages.policy.title'), store: store.name }),
    description: layout ? t(layout.intro, { store: store.name }) : t('pages.policy.lead'),
  })
  return (
    <Layout>
      <PageHero eyebrow={t('pages.policy.eyebrow')} title={kind ? names[kind] : t('pages.policy.title')} lead={layout ? t(layout.intro, { store: store.name }) : t('pages.policy.lead')} />
      <section className={styles.section}>
        <div className={styles.policyWrap}>
          {layout ? (
            <>
              <ol className={styles.policySections}>
                {layout.sections.map((sec) => (
                  <li key={sec.id} className={styles.policySection} id={sec.id}>
                    <div className={styles.policyBody}>
                      <h2 className={styles.policyH2}>{t(sec.title, { store: store.name })}</h2>
                      {sec.blocks.map((b) =>
                        b.kind === 'p' ? (
                          <p key={b.key} className={styles.policyText}>
                            <Marked text={t(b.key, { store: store.name })} />
                          </p>
                        ) : (
                          <ul key={b.keys[0]} className={styles.policyList}>
                            {b.keys.map((k) => (
                              <li key={k}>
                                <Marked text={t(k, { store: store.name })} />
                              </li>
                            ))}
                          </ul>
                        ),
                      )}
                    </div>
                  </li>
                ))}
              </ol>
              {layout.outro ? <p className={styles.policyOutro}>{t(layout.outro, { store: store.name })}</p> : null}
            </>
          ) : null}
          <div className={styles.policyAsk}>
            <div>
              <h2 className={styles.h3}>{t('pages.policy.questions')}</h2>
              <p className={styles.small}>{t('pages.policy.ask')}</p>
            </div>
            <Link href="/contact/" className={`${styles.btn} ${styles.btnDark}`}>
              <Icon name="chat" className={styles.btnIcon} />
              <span>{t('pages.policy.contact')}</span>
            </Link>
          </div>
          <nav className={styles.policyNav} aria-label={t('pages.policy.eyebrow')}>
            {kinds.map((k) =>
              k === kind ? (
                <span key={k} className={`${styles.policyChip} ${styles.policyChipOn}`} aria-current="page">
                  {names[k]}
                </span>
              ) : (
                <Link key={k} href={`/policies/${k}/`} className={styles.policyChip}>
                  {names[k]}
                </Link>
              ),
            )}
          </nav>
        </div>
      </section>
    </Layout>
  )
}
