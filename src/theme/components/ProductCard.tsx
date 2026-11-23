import { type ProductCard as Card } from '@dripfunnel/storefront-core/theme'
import { StoreProductCard } from './Blocks'
import { shop as styles } from './styles/shop'

/** A product in a grid: the same card as the home page's, so every list of products looks and works alike. */
export const ProductCard = ({ product }: { product: Card }) => <StoreProductCard product={product} />

export const ProductGrid = ({ products, wide = false }: { products: readonly Card[]; wide?: boolean }) => (
  <ul className={wide ? styles.gridWide : styles.grid}>
    {products.map((p) => (
      <li key={p.id} className={styles.cell}>
        <ProductCard product={p} />
      </li>
    ))}
  </ul>
)

/** The grid's shape while its products load, so nothing moves when they arrive. */
export const GridPlaceholder = ({ label, count }: { label: string; count: number }) => (
  <ul className={styles.grid} aria-busy="true" aria-label={label}>
    {[...Array(count).keys()].map((i) => (
      <li key={i} className={styles.cell}>
        <div className={styles.skeletonPicture} />
        <div className={styles.skeletonLine} />
      </li>
    ))}
  </ul>
)
