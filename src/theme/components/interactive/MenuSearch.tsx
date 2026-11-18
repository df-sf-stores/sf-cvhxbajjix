'use client'

import { navigate, SearchField, useStorefront } from '@dripfunnel/storefront-core/theme'
import { shop } from '../styles/shop'

// The characters that would end or change a query value; the browser encodes the rest itself.
const escape = (words: string) => words.replace(/%/g, '%25').replace(/&/g, '%26').replace(/#/g, '%23').replace(/\+/g, '%2B').replace(/ /g, '+')

/** The phone menu's search box: the words open the search page. */
export const MenuSearch = ({ className }: { className?: string }) => {
  const { t } = useStorefront()
  return (
    <SearchField
      label={t('shop.search.label')}
      placeholder={t('shop.search.placeholder')}
      button={t('shop.search.button')}
      value=""
      onSearch={(words) => navigate(words.trim() ? `/search/?q=${escape(words.trim())}` : '/search/')}
      suggest={4}
      className={className ? `${shop.search} ${className}` : shop.search}
    />
  )
}
