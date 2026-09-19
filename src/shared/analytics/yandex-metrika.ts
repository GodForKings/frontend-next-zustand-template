import { ENVIRONMENT_CONFIG, SITE_NAME } from '../config'
import { isBrowser, normalizeAnalyticsUrl } from '../utils'
import {
  gaHit,
  trackGaAddToCart,
  trackGaProductDetail,
  trackGaPurchase,
  trackGaRemoveFromCart,
} from './google-analytics'
import type {
  AnalyticsPageHitOptions,
  AnalyticsProductInput,
  AnalyticsPurchaseItemInput,
  AnalyticsVariantInput,
  YmEcommerceData,
  YmEcommerceProduct,
  YmFunction,
  YmHitOptions,
  YmVisitParams,
} from './types'
import { trackVkEvent, vkHit } from './vk-pixel'

/** Получение числового идентификатора счетчика Метрики */
export const getYmCounterId = (): number | null => {
  const rawId = ENVIRONMENT_CONFIG.YM_COUNTER_ID
  if (!rawId) return null
  const parsed = Number(rawId)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : null
}

/** Безопасная отправка данных в dataLayer */
const pushToDataLayer = (data: YmEcommerceData): void => {
  if (!isBrowser()) return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(data)
}

/** Безопасный вызов методов Яндекс Метрики с поддержкой буферизации до загрузки tag.js */
const safeCallYm = (counterId: number, method: string, ...args: unknown[]): void => {
  if (!isBrowser()) return

  if (typeof window.ym === 'function') {
    window.ym(counterId, method, ...args)
    return
  }

  // Буферизация вызовов до полной инициализации tag.js
  const fallbackYm = (...callArgs: unknown[]) => {
    fallbackYm.a = fallbackYm.a || []
    fallbackYm.a.push(callArgs)
  }
  fallbackYm.a = [] as unknown[][]
  fallbackYm.l = Date.now()

  window.ym = window.ym || (fallbackYm as unknown as YmFunction)
  window.ym(counterId, method, ...args)
}

/** Сквозная фиксация перехода по страницам во всех системах аналитики */
export const trackPageHit = (url: string, options?: AnalyticsPageHitOptions): void => {
  if (!isBrowser()) return
  const { fullUrl } = normalizeAnalyticsUrl(url)

  const counterId = getYmCounterId()
  if (counterId) {
    const ymOptions: YmHitOptions = {
      title: options?.title,
      referer: options?.referer,
      params: options?.params,
    }

    safeCallYm(counterId, 'hit', fullUrl, ymOptions)
  }

  gaHit(url, { title: options?.title, referer: options?.referer })
  vkHit()
}

/** Фиксация достижения пользовательской цели в Яндекс Метрике */
export const trackGoal = (target: string, params?: YmVisitParams): void => {
  if (!isBrowser()) return
  const counterId = getYmCounterId()
  if (counterId) {
    safeCallYm(counterId, 'reachGoal', target, params)
  }
}

/** Остановка и деинициализация счетчика на SPA */
export const destructYm = (): void => {
  if (!isBrowser()) return
  const counterId = getYmCounterId()
  if (counterId) {
    safeCallYm(counterId, 'destruct')
  }
}

/** Форматирование сущности товара в схему Яндекс Ecommerce */
export const formatEcommerceProduct = (
  product: AnalyticsProductInput,
  variant?: AnalyticsVariantInput | null,
  quantity = 1,
): YmEcommerceProduct => {
  const effectivePrice = variant ? variant.price : product.minPrice || 0

  return {
    id: variant ? `${product.id}_${variant.id}` : product.id,
    name: product.name,
    price: effectivePrice,
    brand: SITE_NAME,
    category: product.category?.name || 'Общее',
    variant: variant?.title || undefined,
    quantity,
  }
}

/** Сквозное отслеживание просмотра карточки товара */
export const trackProductDetail = (
  product: AnalyticsProductInput,
  variant?: AnalyticsVariantInput | null,
): void => {
  const item = formatEcommerceProduct(product, variant, 1)

  pushToDataLayer({
    ecommerce: {
      currencyCode: 'RUB',
      detail: {
        products: [item],
      },
    },
  })

  trackGoal('view_item', { id: item.id, name: item.name, price: item.price })
  trackGaProductDetail(product, variant)
  trackVkEvent('view_product')
}

/** Сквозное отслеживание добавления товара в корзину */
export const trackAddToCart = (
  product: AnalyticsProductInput,
  variant?: AnalyticsVariantInput | null,
  quantity = 1,
): void => {
  const item = formatEcommerceProduct(product, variant, quantity)

  pushToDataLayer({
    ecommerce: {
      currencyCode: 'RUB',
      add: {
        products: [item],
      },
    },
  })

  trackGoal('add_to_cart', { id: item.id, name: item.name, price: item.price, quantity })
  trackGaAddToCart(product, variant, quantity)
  trackVkEvent('add_to_cart')
}

/** Сквозное отслеживание удаления товара из корзины */
export const trackRemoveFromCart = (
  product: AnalyticsProductInput,
  variant?: AnalyticsVariantInput | null,
  quantity = 1,
): void => {
  const item = formatEcommerceProduct(product, variant, quantity)

  pushToDataLayer({
    ecommerce: {
      currencyCode: 'RUB',
      remove: {
        products: [item],
      },
    },
  })

  trackGoal('remove_from_cart', { id: item.id, name: item.name, price: item.price, quantity })
  trackGaRemoveFromCart(product, variant, quantity)
  trackVkEvent('remove_from_cart')
}

/** Сквозное отслеживание успешной покупки заказа */
export const trackPurchase = (
  orderNumber: string,
  revenue: number,
  products: AnalyticsPurchaseItemInput[],
): void => {
  pushToDataLayer({
    ecommerce: {
      currencyCode: 'RUB',
      purchase: {
        actionField: {
          id: orderNumber,
          revenue,
        },
        products,
      },
    },
  })

  trackGoal('purchase', { orderNumber, revenue, count: products.length })
  trackGaPurchase(orderNumber, revenue, products)
  trackVkEvent('purchase')
}
