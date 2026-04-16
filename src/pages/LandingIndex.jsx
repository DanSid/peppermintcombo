import ProductPage from '../components/site/ProductPage'
import { productMap } from '../data/products'

export default function LandingIndex() {
  return <ProductPage product={productMap['peppermint-combo']} />
}
