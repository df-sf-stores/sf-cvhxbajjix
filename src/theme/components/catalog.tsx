import type { ReactNode } from 'react'
import { useStorefront } from '@dripfunnel/storefront-core/theme'

export type IconName =
  | 'cricket'
  | 'football'
  | 'badminton'
  | 'tennis'
  | 'swimming'
  | 'gym'
  | 'footwear'
  | 'apparel'
  | 'gifts'
  | 'shield'
  | 'medal'
  | 'chat'
  | 'tag'
  | 'calendar'
  | 'beginner'
  | 'star'
  | 'school'
  | 'athlete'
  | 'academy'
  | 'truck'
  | 'team'
  | 'heart'
  | 'phone'
  | 'whatsapp'
  | 'mail'
  | 'pin'
  | 'clock'
  | 'instagram'
  | 'google'
  | 'search'
  | 'arrow'
  | 'jersey'
  | 'box'
  | 'flag'

const paths: Record<IconName, ReactNode> = {
  cricket: (
    <>
      <path d="M15 3.5l5.5 5.5-9 9-5.5-5.5z" />
      <path d="M8.5 15.5L3 21" />
      <circle cx="18.5" cy="18.5" r="2" />
    </>
  ),
  football: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5l3.4 2.5-1.3 4h-4.2l-1.3-4z" />
      <path d="M12 3v4.5M20.5 9.5l-5.1.5M17.5 19l-3.4-5M6.5 19l3.4-5M3.5 9.5l5.1.5" />
    </>
  ),
  badminton: (
    <>
      <path d="M9.5 17.5L6 4h12l-3.5 13.5z" />
      <path d="M10 4l1 13.5M14 4l-1 13.5M7 8.5h10" />
      <path d="M9.5 17.5h5a2.5 2.5 0 01-5 0z" />
    </>
  ),
  tennis: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M5.6 5.6c3.2 3.2 3.2 9.6 0 12.8M18.4 5.6c-3.2 3.2-3.2 9.6 0 12.8" />
    </>
  ),
  swimming: (
    <>
      <circle cx="16.5" cy="7" r="2" />
      <path d="M4 13.5l5-4 3.5 3.5" />
      <path d="M2 18c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5" />
    </>
  ),
  gym: <path d="M6.5 7v10M17.5 7v10M3.5 9.5v5M20.5 9.5v5M6.5 12h11" />,
  footwear: (
    <>
      <path d="M3 17v-6l4.5-1.5 3 3 5 1.2 4.6 1.3a1.5 1.5 0 011 1.4V17a1 1 0 01-1 1H4a1 1 0 01-1-1z" />
      <path d="M3 15h18M10 11l-1.5 1.5M12 12.5l-1.5 1.5" />
    </>
  ),
  apparel: <path d="M8.5 3.5L3 6.5l2 4 3-1.5V20.5h8V9l3 1.5 2-4-5.5-3c-.6 1.5-2 2.5-3.5 2.5s-2.9-1-3.5-2.5z" />,
  jersey: (
    <>
      <path d="M8.5 3.5L3 6.5l2 4 3-1.5V20.5h8V9l3 1.5 2-4-5.5-3c-.6 1.5-2 2.5-3.5 2.5s-2.9-1-3.5-2.5z" />
      <path d="M11 11.5h2v5" />
    </>
  ),
  gifts: (
    <>
      <path d="M8 3.5h8v5.5a4 4 0 01-8 0z" />
      <path d="M8 5.5H5a3 3 0 003 4.5M16 5.5h3a3 3 0 01-3 4.5M12 13v3.5M8.5 20.5h7M9.5 16.5h5v4h-5z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7.5 3v5.5c0 4.5-3.2 8-7.5 9.5-4.3-1.5-7.5-5-7.5-9.5V6z" />
      <path d="M8.5 12l2.5 2.5 4.5-5" />
    </>
  ),
  medal: (
    <>
      <path d="M7.5 3l3 6M16.5 3l-3 6" />
      <circle cx="12" cy="15" r="5.5" />
      <path d="M12 12.3l.9 1.8 2 .3-1.4 1.4.3 2-1.8-.9-1.8.9.3-2-1.4-1.4 2-.3z" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5.5h16v10H9l-5 4z" />
      <path d="M8 9.5h8M8 12.5h5" />
    </>
  ),
  tag: (
    <>
      <path d="M3.5 12.5V4.5a1 1 0 011-1h8l8 8-9 9z" />
      <circle cx="8" cy="8" r="1.6" />
    </>
  ),
  calendar: (
    <>
      <path d="M4 6h16v14H4zM4 10h16M8 3.5v4M16 3.5v4" />
      <path d="M8.5 15l2 2 4-4" />
    </>
  ),
  beginner: (
    <>
      <path d="M12 21c-4-3-6-6.2-6-9.5a6 6 0 0112 0c0 3.3-2 6.5-6 9.5z" />
      <path d="M12 11.5V21M12 13.5l-2.5-2M12 15.5l2.5-2" />
    </>
  ),
  star: <path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.3-4.1 5.9-.8z" />,
  school: (
    <>
      <path d="M2.5 9l9.5-5 9.5 5-9.5 5z" />
      <path d="M6.5 11v5c1.5 1.5 3.5 2.3 5.5 2.3s4-.8 5.5-2.3v-5M21.5 9v6" />
    </>
  ),
  athlete: (
    <>
      <circle cx="14" cy="4.5" r="2" />
      <path d="M6 9.5l4-2.5 4 2-1.5 5 3.5 2.5-1.5 4.5M12.5 14l-4 1.5-3.5 4.5M14 9l3.5 2.5 2.5-1" />
    </>
  ),
  academy: (
    <>
      <path d="M3 20.5h18M5 20.5V10M19 20.5V10M9.5 20.5V10M14.5 20.5V10" />
      <path d="M2.5 9.5L12 3.5l9.5 6z" />
    </>
  ),
  truck: (
    <>
      <path d="M2.5 6h11v10h-11zM13.5 9.5H18l3.5 3.5v3h-8" />
      <circle cx="6.5" cy="17.5" r="2" />
      <circle cx="17" cy="17.5" r="2" />
    </>
  ),
  team: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 19.5c.8-3.4 3.2-5.2 6-5.2s5.2 1.8 6 5.2M15 14.5c2.8-.6 5.2.8 6 4" />
    </>
  ),
  heart: <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0112 7.3a4.3 4.3 0 017.5 2.5C19.5 15.4 12 20 12 20z" />,
  phone: <path d="M6.5 3.5h3l1.5 4.5-2 1.3a11 11 0 005.7 5.7l1.3-2 4.5 1.5v3a2 2 0 01-2 2A16.5 16.5 0 014.5 5.5a2 2 0 012-2z" />,
  whatsapp: (
    <>
      <path d="M4 20l1.3-4.2A8.5 8.5 0 1112 20.5a8.4 8.4 0 01-4.1-1z" />
      <path d="M9 8.5c0 3.3 2.8 6.5 6.3 6.5l1-1.6-2-1-1 1c-1.2-.5-2.2-1.5-2.7-2.7l1-1-1-2z" />
    </>
  ),
  mail: (
    <>
      <path d="M3.5 5.5h17v13h-17z" />
      <path d="M3.5 6.5l8.5 6.5 8.5-6.5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0113 0c0 5.4-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  instagram: (
    <>
      <path d="M4 8a4 4 0 014-4h8a4 4 0 014 4v8a4 4 0 01-4 4H8a4 4 0 01-4-4z" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17" cy="7" r=".8" />
    </>
  ),
  google: <path d="M20 12.2c0-.6 0-1.2-.2-1.7H12v3.3h4.5a4.6 4.6 0 01-1.9 2.9v2.2h3A8.8 8.8 0 0020 12.2zM12 20.5a8.5 8.5 0 116-14.5l-2.4 2.3A5.2 5.2 0 0012 7a5 5 0 000 10c2 0 3.6-1 4.3-2.6" />,
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4.5 4.5" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  box: (
    <>
      <path d="M3.5 7.5L12 3.5l8.5 4v9L12 20.5l-8.5-4z" />
      <path d="M3.5 7.5L12 11.5l8.5-4M12 11.5v9" />
    </>
  ),
  flag: <path d="M5 21V4M5 4.5h12l-2.5 4 2.5 4H5" />,
}

/** A line icon from the theme's own set, coloured by the text around it. */
export const Icon = ({ name, className }: { name: IconName; className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    {paths[name]}
  </svg>
)

export type SportId = 'cricket' | 'football' | 'badminton' | 'tennis' | 'swimming' | 'gym' | 'footwear' | 'apparel' | 'gifts'

/** The sports and categories the store sells, in the order the site shows them. */
export const useSports = () => {
  const { t } = useStorefront()
  return [
    { id: 'cricket', image: 'sport-cricket.webp', name: t('catalog.sports.cricket.name'), tab: t('catalog.sports.cricket.name'), blurb: t('catalog.sports.cricket.blurb') },
    { id: 'football', image: 'sport-football.webp', name: t('catalog.sports.football.name'), tab: t('catalog.sports.football.name'), blurb: t('catalog.sports.football.blurb') },
    { id: 'badminton', image: 'sport-badminton.webp', name: t('catalog.sports.badminton.name'), tab: t('catalog.sports.badminton.name'), blurb: t('catalog.sports.badminton.blurb') },
    { id: 'tennis', image: 'sport-tennis.webp', name: t('catalog.sports.tennis.name'), tab: t('catalog.sports.tennis.name'), blurb: t('catalog.sports.tennis.blurb') },
    { id: 'swimming', image: 'sport-swimming.webp', name: t('catalog.sports.swimming.name'), tab: t('catalog.sports.swimming.name'), blurb: t('catalog.sports.swimming.blurb') },
    { id: 'gym', image: 'sport-gym.webp', name: t('catalog.sports.gym.name'), tab: t('catalog.sports.gym.name'), blurb: t('catalog.sports.gym.blurb') },
    { id: 'footwear', image: 'sport-footwear.webp', name: t('catalog.sports.footwear.name'), tab: t('catalog.sports.footwear.name'), blurb: t('catalog.sports.footwear.blurb') },
    { id: 'apparel', image: 'sport-apparel.webp', name: t('catalog.sports.apparel.name'), tab: t('catalog.sports.apparel.tab'), blurb: t('catalog.sports.apparel.blurb') },
    { id: 'gifts', image: null, name: t('catalog.sports.gifts.name'), tab: t('catalog.sports.gifts.name'), blurb: t('catalog.sports.gifts.blurb') },
  ] as const
}

/** Placeholder products, each to be replaced with what the store really stocks. */
export const useProductsList = () => {
  const { t } = useStorefront()
  return [
    { id: 'bat', sport: 'cricket', image: 'prod-cricket-bat.webp', art: null, name: t('catalog.products.bat.name'), desc: t('catalog.products.bat.desc') },
    { id: 'ball', sport: 'cricket', image: 'prod-cricket-ball.webp', art: null, name: t('catalog.products.ball.name'), desc: t('catalog.products.ball.desc') },
    { id: 'football', sport: 'football', image: 'prod-football.webp', art: null, name: t('catalog.products.football.name'), desc: t('catalog.products.football.desc') },
    { id: 'training', sport: 'football', image: 'prod-football-train.webp', art: null, name: t('catalog.products.training.name'), desc: t('catalog.products.training.desc') },
    { id: 'racket', sport: 'badminton', image: 'prod-shuttle.webp', art: null, name: t('catalog.products.racket.name'), desc: t('catalog.products.racket.desc') },
    { id: 'tennisRacket', sport: 'tennis', image: 'prod-tennis.webp', art: null, name: t('catalog.products.tennisRacket.name'), desc: t('catalog.products.tennisRacket.desc') },
    { id: 'tennisBalls', sport: 'tennis', image: 'prod-tennis-ball.webp', art: null, name: t('catalog.products.tennisBalls.name'), desc: t('catalog.products.tennisBalls.desc') },
    { id: 'swim', sport: 'swimming', image: 'prod-swim.webp', art: null, name: t('catalog.products.swim.name'), desc: t('catalog.products.swim.desc') },
    { id: 'dumbbells', sport: 'gym', image: 'prod-dumbbells.webp', art: null, name: t('catalog.products.dumbbells.name'), desc: t('catalog.products.dumbbells.desc') },
    { id: 'ropes', sport: 'gym', image: 'prod-ropes.webp', art: null, name: t('catalog.products.ropes.name'), desc: t('catalog.products.ropes.desc') },
    { id: 'mat', sport: 'gym', image: 'prod-mat.webp', art: null, name: t('catalog.products.mat.name'), desc: t('catalog.products.mat.desc') },
    { id: 'shoes', sport: 'footwear', image: 'prod-shoes.webp', art: null, name: t('catalog.products.shoes.name'), desc: t('catalog.products.shoes.desc') },
    { id: 'studs', sport: 'footwear', image: 'prod-football-boots.webp', art: null, name: t('catalog.products.studs.name'), desc: t('catalog.products.studs.desc') },
    { id: 'jersey', sport: 'apparel', image: 'prod-jersey.webp', art: null, name: t('catalog.products.jersey.name'), desc: t('catalog.products.jersey.desc') },
    { id: 'kit', sport: 'apparel', image: 'team-volley.webp', art: null, name: t('catalog.products.kit.name'), desc: t('catalog.products.kit.desc') },
    { id: 'trophy', sport: 'gifts', image: null, art: 'gifts', name: t('catalog.products.trophy.name'), desc: t('catalog.products.trophy.desc') },
    { id: 'medal', sport: 'gifts', image: null, art: 'medal', name: t('catalog.products.medal.name'), desc: t('catalog.products.medal.desc') },
    { id: 'hamper', sport: 'gifts', image: null, art: 'box', name: t('catalog.products.hamper.name'), desc: t('catalog.products.hamper.desc') },
  ] as const
}
