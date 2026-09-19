export interface YmEcommerceProduct {
  id: string
  name: string
  price?: number
  brand?: string
  category?: string
  variant?: string
  quantity?: number
}

export interface YmActionField {
  id: string
  revenue?: number
}

export interface YmEcommerceData {
  ecommerce: {
    currencyCode?: string
    detail?: {
      products: YmEcommerceProduct[]
    }
    add?: {
      products: YmEcommerceProduct[]
    }
    remove?: {
      products: YmEcommerceProduct[]
    }
    purchase?: {
      actionField: YmActionField
      products: YmEcommerceProduct[]
    }
  }
}

export interface GaEcommerceItem {
  item_id: string
  item_name: string
  price?: number
  item_brand?: string
  item_category?: string
  item_variant?: string
  quantity?: number
}

export interface AnalyticsProductInput {
  id: string
  name: string
  category?: { name: string } | null
  minPrice?: number
}

export interface AnalyticsVariantInput {
  id: string
  title?: string
  price: number
}

export interface AnalyticsPurchaseItemInput {
  id: string
  name: string
  price: number
  brand?: string
  variant?: string
  quantity: number
}

/** Параметры визита Яндекс Метрики */
export interface YmVisitParams {
  order_price?: number
  currency?: string
  [key: string]: unknown
}

/** Опции для фиксации просмотра страницы (hit) в SPA */
export interface YmHitOptions {
  /** Заголовок текущей страницы (по умолчанию document.title) */
  title?: string
  /** URL, с которого посетитель перешел на текущую страницу */
  referer?: string
  /** Параметры визита */
  params?: YmVisitParams
  /** Callback-функция после отправки данных о просмотре */
  callback?: (this: unknown) => void
  /** Контекст выполнения callback-функции */
  ctx?: unknown
}

/** Параметры инициализации счетчика Яндекс Метрики */
export interface YmInitOptions {
  /** Отложить автоматическую отправку первого просмотра (критично для SPA) */
  defer?: boolean
  /** Сбор данных для карты кликов */
  clickmap?: boolean
  /** Отслеживание переходов по внешним ссылкам */
  trackLinks?: boolean
  /** Точный показатель отказов (true или тайм-аут в мс) */
  accurateTrackBounce?: boolean | number
  /** Запись действий посетителей (Вебвизор 2.0) */
  webvisor?: boolean
  /** Сбор данных электронной коммерции */
  ecommerce?: boolean | string | unknown[]
  /** Отслеживание хеша в URL */
  trackHash?: boolean
  /** Доверенные домены для кросс-доменного отслеживания */
  trustedDomains?: string[]
  /** Параметры визита при инициализации */
  params?: YmVisitParams
  /** Параметры посетителя при инициализации */
  userParams?: Record<string, unknown>
  /** Отправка события готовности счетчика yandex_metrika_callbacks */
  triggerEvent?: boolean
  [key: string]: unknown
}

/** Строго типизированный фасад глобальной функции ym */
export interface YmFunction {
  /** Инициализация счетчика с параметрами */
  (counterId: number, method: 'init', options: YmInitOptions): void

  /** Фиксация виртуального просмотра страницы (SPA Hit) */
  (counterId: number, method: 'hit', url: string, options?: YmHitOptions): void

  /** Достижение цели */
  (
    counterId: number,
    method: 'reachGoal',
    target: string,
    params?: YmVisitParams,
    callback?: (this: unknown) => void,
    ctx?: unknown,
  ): void

  /** Передача параметров визита */
  (counterId: number, method: 'params', params: YmVisitParams): void

  /** Передача параметров посетителя */
  (counterId: number, method: 'userParams', params: Record<string, unknown>): void

  /** Остановка и деинициализация счетчика */
  (counterId: number, method: 'destruct'): void

  /** Фиксация не-отказа */
  (counterId: number, method: 'notBounce', options?: { callback?: () => void; ctx?: unknown }): void

  /** Фиксация перехода по внешней ссылке */
  (counterId: number, method: 'extLink', url: string, options?: YmHitOptions): void

  /** Фиксация скачивания файла */
  (counterId: number, method: 'file', url: string, options?: YmHitOptions): void

  /** Получение ClientID посетителя */
  (counterId: number, method: 'getClientID', cb: (clientId: string) => void): void

  /** Fallback сигнатура для прочих сценариев */
  (counterId: number, method: string, ...args: unknown[]): void

  /** Буфер вызовов счетчика до полной загрузки tag.js */
  a?: unknown[][]
  /** Метка времени инициализации */
  l?: number
}

/** Параметры события page_view в Google Analytics 4 */
export interface GtagPageViewParams {
  /** Относительный путь со строкой запроса (например, /catalog?sort=price) */
  page_path?: string
  /** Полный абсолютный URL (например, https://example.com/catalog?sort=price) */
  page_location?: string
  /** Заголовок страницы */
  page_title?: string
  /** Реферер / предыдущая страница в SPA */
  page_referrer?: string
  /** Целевой идентификатор потока данных */
  send_to?: string | string[]
  [key: string]: unknown
}

/** Параметры конфигурации счетчика gtag('config', ...) */
export interface GtagConfigParams {
  page_path?: string
  page_location?: string
  page_title?: string
  send_page_view?: boolean
  user_id?: string
  [key: string]: unknown
}

/** Параметры Ecommerce-событий GA4 */
export interface GtagEcommerceParams {
  currency?: string
  value?: number
  transaction_id?: string
  tax?: number
  shipping?: number
  coupon?: string
  items?: GaEcommerceItem[]
  [key: string]: unknown
}

/** Строгая типизация глобальной функции gtag */
export interface GtagFunction {
  (command: 'config', targetId: string, configParams?: GtagConfigParams): void
  (command: 'set', params: Record<string, unknown>): void
  (command: 'js', date: Date): void
  (command: 'event', eventName: 'page_view', eventParams?: GtagPageViewParams): void
  (
    command: 'event',
    eventName:
      | 'view_item'
      | 'view_item_list'
      | 'select_item'
      | 'add_to_cart'
      | 'remove_from_cart'
      | 'view_cart'
      | 'begin_checkout'
      | 'purchase'
      | 'refund',
    eventParams?: GtagEcommerceParams,
  ): void
  (command: 'event', eventName: string, eventParams?: Record<string, unknown>): void
  (command: 'consent', action: 'default' | 'update', params: Record<string, unknown>): void
  (command: string, ...args: unknown[]): void
}

/** Единые параметры фиксации просмотра страницы для всех систем аналитики */
export interface AnalyticsPageHitOptions {
  /** Заголовок страницы */
  title?: string
  /** Предыдущий URL перехода */
  referer?: string
  /** Дополнительные параметры визита */
  params?: Record<string, unknown>
}

declare global {
  interface Window {
    ym?: YmFunction
    dataLayer?: Array<Record<string, unknown> | YmEcommerceData>
    gtag?: GtagFunction
    VK?: {
      Retargeting?: {
        Init: (pixelId: string) => void
        Hit: () => void
        Event: (eventName: string) => void
        Add: (target: string) => void
      }
    }
  }
}
