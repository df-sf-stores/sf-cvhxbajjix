import { useOffers } from '@dripfunnel/storefront-core/theme'

/** The store's running shipping offer (or else a whole-order one), as the slim strip above the top bar; nothing while none runs. */
export const Announcement = ({ className, markClassName }: { className?: string; markClassName?: string }) => {
  const { offers } = useOffers()
  const offer = offers.find((o) => o.appliesTo === 'shipping') ?? offers.find((o) => o.appliesTo === 'order') ?? null
  if (!offer) return null
  return (
    <p className={className}>
      <strong className={markClassName}>{offer.name}</strong>
      {offer.description ? ` ${offer.description}` : null}
    </p>
  )
}
