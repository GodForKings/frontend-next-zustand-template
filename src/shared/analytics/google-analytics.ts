import { ENVIRONMENT_CONFIG, SITE_NAME } from '../config'
import { isBrowser, normalizeAnalyticsUrl } from '../utils'
import type {
  AnalyticsProductInput,
  AnalyticsPurchaseItemInput,
  AnalyticsVariantInput,
  GaEcommerceItem,
} from './types'

export const getGaId = (): string | null => {
  const rawId = ENVIRONMENT_CONFIG.GA_ID?.trim()
  return rawId ? rawId : null
}

export const formatGaItem = (
  product: AnalyticsProductInput,
  variant?: AnalyticsVariantInput | null,
  quantity = 1,
): GaEcommerceItem => {
  const effectivePrice = variant ? variant.price : product.minPrice || 0

  return {
    item_id: variant ? `${product.id}_${variant.id}` : product.id,
    item_name: product.name,
    price: effectivePrice,
    item_brand: SITE_NAME,
    item_category: product.category?.name || 'Общее',
    item_variant: variant?.title || undefined,
    quantity,
  }
}

export const gaHit = (url: string, options?: { title?: string; referer?: string }): void => {
  if (!isBrowser()) return
  const gaId = getGaId()
  if (gaId && typeof window.gtag === 'function') {
    const { fullUrl, pathname } = normalizeAnalyticsUrl(url)

    window.gtag('event', 'page_view', {
      page_path: pathname,
      page_location: fullUrl,
      page_title: options?.title || (typeof document !== 'undefined' ? document.title : ''),
      page_referrer: options?.referer,
    })
  }
}

export const trackGaProductDetail = (
  product: AnalyticsProductInput,
  variant?: AnalyticsVariantInput | null,
): void => {
  if (!isBrowser() || typeof window.gtag !== 'function') return
  const item = formatGaItem(product, variant, 1)

  window.gtag('event', 'view_item', {
    currency: 'RUB',
    value: item.price,
    items: [item],
  })
}

export const trackGaAddToCart = (
  product: AnalyticsProductInput,
  variant?: AnalyticsVariantInput | null,
  quantity = 1,
): void => {
  if (!isBrowser() || typeof window.gtag !== 'function') return
  const item = formatGaItem(product, variant, quantity)

  window.gtag('event', 'add_to_cart', {
    currency: 'RUB',
    value: (item.price || 0) * quantity,
    items: [item],
  })
}

export const trackGaRemoveFromCart = (
  product: AnalyticsProductInput,
  variant?: AnalyticsVariantInput | null,
  quantity = 1,
): void => {
  if (!isBrowser() || typeof window.gtag !== 'function') return
  const item = formatGaItem(product, variant, quantity)

  window.gtag('event', 'remove_from_cart', {
    currency: 'RUB',
    value: (item.price || 0) * quantity,
    items: [item],
  })
}

export const trackGaPurchase = (
  orderNumber: string,
  revenue: number,
  products: AnalyticsPurchaseItemInput[],
): void => {
  if (!isBrowser() || typeof window.gtag !== 'function') return

  const items: GaEcommerceItem[] = products.map((prod) => ({
    item_id: prod.id,
    item_name: prod.name,
    price: prod.price,
    item_brand: prod.brand || SITE_NAME,
    item_variant: prod.variant,
    quantity: prod.quantity,
  }))

  window.gtag('event', 'purchase', {
    transaction_id: orderNumber,
    value: revenue,
    currency: 'RUB',
    items,
  })
}
