/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface SystemSettingResponseDto {
  /**
   * Режим технических работ активен
   * @example false
   */
  maintenanceMode: boolean;
  /**
   * Информационный баннер активен
   * @example false
   */
  bannerEnabled: boolean;
  /**
   * Текст баннера
   * @example "Уважаемые пользователи, 25 июля сайт будет временно недоступен."
   */
  bannerText: string;
  /**
   * Ссылка на баннере
   * @example "https://example.com/maintenance"
   */
  bannerLink: string;
}

export interface UpdateSystemSettingDto {
  /**
   * Режим технических работ активен
   * @example false
   */
  maintenanceMode?: boolean;
  /**
   * Информационный баннер активен
   * @example false
   */
  bannerEnabled?: boolean;
  /**
   * Текст баннера
   * @example "Уважаемые пользователи, 25 июля сайт будет временно недоступен."
   */
  bannerText?: string;
  /**
   * Ссылка на баннере
   * @example "https://example.com/maintenance"
   */
  bannerLink?: string;
}

export interface CategoryResponseDto {
  /** @example "550e8400-e29b-41d4-a716-446655440000" */
  id: string;
  /** @example "Платья" */
  name: string;
  /** @example "platya" */
  slug: string;
  /** @example "https://example.com/images/platya.jpg" */
  image?: string | null;
  /** @example true */
  isActive: boolean;
  /** @example 0 */
  sortOrder: number;
  children?: CategoryResponseDto[];
}

export interface CreateCategoryDto {
  /**
   * Название категории
   * @example "Платья"
   */
  name: string;
  /**
   * Уникальный слаг (slug) для URL
   * @example "platya"
   */
  slug: string;
  /**
   * Ссылка на изображение категории
   * @format uri
   * @example "https://example.com/images/platya.jpg"
   */
  image?: string;
  /**
   * Статус активности категории
   * @default true
   * @example true
   */
  isActive?: boolean;
  /**
   * Порядок сортировки
   * @min 0
   * @default 0
   * @example 0
   */
  sortOrder?: number;
  /**
   * ID родительской категории
   * @example "550e8400-e29b-41d4-a716-446655440000"
   */
  parentId?: string;
}

export interface UpdateCategoryDto {
  /**
   * Название категории
   * @example "Платья"
   */
  name?: string;
  /**
   * Уникальный слаг (slug) для URL
   * @example "platya"
   */
  slug?: string;
  /**
   * Ссылка на изображение категории
   * @format uri
   * @example "https://example.com/images/platya.jpg"
   */
  image?: string;
  /**
   * Статус активности категории
   * @default true
   * @example true
   */
  isActive?: boolean;
  /**
   * Порядок сортировки
   * @min 0
   * @default 0
   * @example 0
   */
  sortOrder?: number;
  /**
   * ID родительской категории
   * @example "550e8400-e29b-41d4-a716-446655440000"
   */
  parentId?: string;
}

export interface RegisterDto {
  /**
   * Электронная почта пользователя
   * @format email
   * @example "user@example.com"
   */
  email: string;
  /**
   * Пароль пользователя (минимум 8 символов)
   * @minLength 8
   * @example "password123"
   */
  password: string;
  /**
   * Имя пользователя
   * @example "Иван Иванов"
   */
  name?: string;
  /**
   * Номер телефона
   * @example "+79991234567"
   */
  phone?: string;
}

export interface UserResponseDto {
  /** @example "550e8400-e29b-41d4-a716-446655440000" */
  id: string;
  /** @example "user@example.com" */
  email: string;
  /** @example "Иван Иванов" */
  name?: string;
  /** @example "+79991234567" */
  phone?: string;
  /** @example "USER" */
  role: "ADMIN" | "USER";
  /** @example false */
  isBanned: boolean;
  /**
   * @format date-time
   * @example "2026-06-25T05:50:17.000Z"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2026-06-25T05:50:17.000Z"
   */
  updatedAt: string;
}

export interface LoginDto {
  /**
   * Электронная почта пользователя
   * @format email
   * @example "user@example.com"
   */
  email: string;
  /**
   * Пароль пользователя (минимум 8 символов)
   * @minLength 8
   * @example "password123"
   */
  password: string;
}

export interface LoginResponseDto {
  user: UserResponseDto;
}

export interface LogoutResponseDto {
  /** @example "Успешный выход" */
  message: string;
}

export interface RefreshResponseDto {
  /** @example true */
  success: boolean;
}

export interface ForgotPasswordDto {
  /**
   * Электронная почта пользователя для отправки ссылки сброса пароля
   * @format email
   * @example "user@example.com"
   */
  email: string;
}

export interface ForgotPasswordResponseDto {
  /** @example "Инструкция по восстановлению пароля отправлена на указанный email" */
  message: string;
}

export interface ValidateResetTokenResponseDto {
  /** @example true */
  success: boolean;
}

export interface ResetPasswordDto {
  /**
   * Токен сброса пароля, полученный из письма
   * @example "a6b8c9d0..."
   */
  token: string;
  /**
   * Новый пароль пользователя (минимум 8 символов)
   * @minLength 8
   * @example "newpassword123"
   */
  password: string;
}

export interface ResetPasswordResponseDto {
  /** @example "Пароль успешно изменен" */
  message: string;
}

export interface SendMailDto {
  /**
   * Тема письма
   * @example "Скидки на новые платья в Maison!"
   */
  subject: string;
  /**
   * HTML-содержимое письма
   * @example "<h1>Приветствуем!</h1><p>Промокод на скидку: NEW2026</p>"
   */
  html: string;
}

export interface MailResponseDto {
  /** @example true */
  success: boolean;
  /** @example 42 */
  sentCount: number;
}

export interface BroadcastResponseDto {
  /** @example "550e8400-e29b-41d4-a716-446655440099" */
  id: string;
  /** @example "Новая коллекция Maison Pattern!" */
  subject: string;
  /** @example "<html><body><h1>Привет!</h1></body></html>" */
  body: string;
  /** @example 42 */
  sentCount: number;
  /**
   * @format date-time
   * @example "2026-07-15T12:00:00.000Z"
   */
  createdAt: string;
}

export interface HeightResponseDto {
  /** @example "550e8400-e29b-41d4-a716-446655440000" */
  id: string;
  /** @example 170 */
  value: number;
  /**
   * @format date-time
   * @example "2026-06-26T14:08:04.000Z"
   */
  createdAt: string;
}

export interface CreateHeightDto {
  /**
   * Значение роста в сантиметрах
   * @min 50
   * @example 170
   */
  value: number;
}

export interface UpdateHeightDto {
  /**
   * Значение роста в сантиметрах
   * @min 50
   * @example 170
   */
  value?: number;
}

export interface SizeResponseDto {
  /** @example "550e8400-e29b-41d4-a716-446655440000" */
  id: string;
  /** @example "42" */
  value: string;
  /**
   * @format date-time
   * @example "2026-06-26T14:08:04.000Z"
   */
  createdAt: string;
}

export interface CreateSizeDto {
  /**
   * Обозначение размера выкройки
   * @example "42"
   */
  value: string;
}

export interface UpdateSizeDto {
  /**
   * Обозначение размера выкройки
   * @example "42"
   */
  value?: string;
}

export interface ProductMinResponseDto {
  /** @example "550e8400-e29b-41d4-a716-446655440000" */
  id: string;
  /** @example "Платье "Мария"" */
  name: string;
  /** @example "platye-mariya" */
  slug: string;
  /** @example "450.00" */
  price: string;
  /**
   * Главное изображение (с наименьшим sortOrder или первое)
   * @example "/uploads/products/image1.jpg"
   */
  mainImage?: string | null;
  /** @example true */
  isActive: boolean;
  /** @example false */
  isNew: boolean;
  /** @example "550e8400-e29b-41d4-a716-446655440002" */
  categoryId: string;
  /**
   * @format date-time
   * @example "2026-06-26T14:08:04.000Z"
   */
  createdAt: string;
}

export interface ProductsMinPaginationResponseDto {
  items: ProductMinResponseDto[];
  /** Общее количество товаров по фильтру */
  total: number;
  /** Текущая страница */
  page: number;
  /** Лимит на странице */
  limit: number;
  /** Всего страниц */
  totalPages: number;
}

export interface ProductImageResponseDto {
  /** @example "550e8400-e29b-41d4-a716-446655440001" */
  id: string;
  /** @example "/uploads/products/image1.jpg" */
  url: string;
  /** @example 0 */
  sortOrder: number;
}

export interface PatternFileResponseDto {
  /** @example "550e8400-e29b-41d4-a716-446655440005" */
  id: string;
  /** @example "Принтер А4" */
  format: string;
  /** @example "mariya_42_170_a4.pdf" */
  fileName: string;
  /** @example 1048576 */
  fileSize?: number | null;
  /**
   * @format date-time
   * @example "2026-06-26T14:08:04.000Z"
   */
  createdAt: string;
}

export interface ProductVariantMinResponseDto {
  /** @example "550e8400-e29b-41d4-a716-446655440003" */
  id: string;
  /** @example "550e8400-e29b-41d4-a716-446655440001" */
  heightId: string;
  /** @example 170 */
  heightValue: number;
  /** @example "550e8400-e29b-41d4-a716-446655440002" */
  sizeId: string;
  /** @example "42" */
  sizeValue: string;
  files: PatternFileResponseDto[];
}

export interface ProductResponseDto {
  /** @example "550e8400-e29b-41d4-a716-446655440000" */
  id: string;
  /** @example "Платье "Мария"" */
  name: string;
  /** @example "platye-mariya" */
  slug: string;
  /** @example "<p>Описание товара...</p>" */
  description?: string | null;
  /** @example "Материал: лен 100%" */
  characteristics?: string | null;
  /** @example "450.00" */
  price: string;
  /** @example true */
  isActive: boolean;
  /** @example false */
  isNew: boolean;
  /** @example "550e8400-e29b-41d4-a716-446655440002" */
  categoryId: string;
  images: ProductImageResponseDto[];
  variants?: ProductVariantMinResponseDto[];
  /**
   * @format date-time
   * @example "2026-06-26T14:08:04.000Z"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2026-06-26T14:08:04.000Z"
   */
  updatedAt: string;
}

export interface ProductsPaginationResponseDto {
  items: ProductResponseDto[];
  /** Общее количество товаров по фильтру */
  total: number;
  /** Текущая страница */
  page: number;
  /** Лимит на странице */
  limit: number;
  /** Всего страниц */
  totalPages: number;
}

export interface CreateProductDto {
  /**
   * Название товара (лекала)
   * @example "Платье "Мария""
   */
  name: string;
  /**
   * Уникальный слаг (slug) для URL
   * @example "platye-mariya"
   */
  slug: string;
  /**
   * Описание товара (поддерживает rich text)
   * @example "<p>Красивое летнее платье свободного кроя...</p>"
   */
  description?: string;
  /**
   * Характеристики товара
   * @example "Материал: лен 100%, Расход ткани: 2м"
   */
  characteristics?: string;
  /**
   * Цена товара (0.00 означает бесплатную выкройку)
   * @example "450.00"
   */
  price: string;
  /**
   * Активен ли товар для отображения в каталоге
   * @default true
   * @example true
   */
  isActive?: boolean;
  /**
   * Пометка новинки
   * @default false
   * @example false
   */
  isNew?: boolean;
  /**
   * Идентификатор категории
   * @example "550e8400-e29b-41d4-a716-446655440000"
   */
  categoryId: string;
}

export interface UpdateProductDto {
  /**
   * Название товара (лекала)
   * @example "Платье "Мария""
   */
  name?: string;
  /**
   * Уникальный слаг (slug) для URL
   * @example "platye-mariya"
   */
  slug?: string;
  /**
   * Описание товара (поддерживает rich text)
   * @example "<p>Красивое летнее платье свободного кроя...</p>"
   */
  description?: string;
  /**
   * Характеристики товара
   * @example "Материал: лен 100%, Расход ткани: 2м"
   */
  characteristics?: string;
  /**
   * Цена товара (0.00 означает бесплатную выкройку)
   * @example "450.00"
   */
  price?: string;
  /**
   * Активен ли товар для отображения в каталоге
   * @default true
   * @example true
   */
  isActive?: boolean;
  /**
   * Пометка новинки
   * @default false
   * @example false
   */
  isNew?: boolean;
  /**
   * Идентификатор категории
   * @example "550e8400-e29b-41d4-a716-446655440000"
   */
  categoryId?: string;
}

export interface AddProductImageDto {
  /**
   * Путь к изображению на сервере / URL изображения
   * @example "/uploads/products/image1.jpg"
   */
  url: string;
  /**
   * Порядок сортировки
   * @default 0
   * @example 0
   */
  sortOrder?: number;
}

export interface VariantResponseDto {
  /** @example "550e8400-e29b-41d4-a716-446655440003" */
  id: string;
  /** @example "550e8400-e29b-41d4-a716-446655440000" */
  productId: string;
  /** @example "550e8400-e29b-41d4-a716-446655440001" */
  heightId: string;
  /** @example 170 */
  heightValue: number;
  /** @example "550e8400-e29b-41d4-a716-446655440002" */
  sizeId: string;
  /** @example "42" */
  sizeValue: string;
  files: PatternFileResponseDto[];
  /**
   * @format date-time
   * @example "2026-06-26T14:08:04.000Z"
   */
  createdAt: string;
}

export interface CreateVariantBulkDto {
  /**
   * Идентификатор товара
   * @format uuid
   * @example "550e8400-e29b-41d4-a716-446655440000"
   */
  productId: string;
  /**
   * Массив идентификаторов ростов
   * @example ["550e8400-e29b-41d4-a716-446655440011"]
   */
  heightIds: string[];
  /**
   * Массив идентификаторов размеров
   * @example ["550e8400-e29b-41d4-a716-446655440022"]
   */
  sizeIds: string[];
}

export interface AddPatternFileDto {
  /**
   * Формат выкройки
   * @example "Принтер А4"
   */
  format: string;
  /**
   * Оригинальное имя файла выкройки
   * @example "mariya_42_170_a4.pdf"
   */
  fileName: string;
  /**
   * Путь к сохраненному файлу на локальном диске сервера
   * @example "/uploads/patterns/mariya_42_170_a4.pdf"
   */
  filePath: string;
  /**
   * Размер файла в байтах
   * @min 0
   * @example 1048576
   */
  fileSize?: number;
}

export interface CartItemResponseDto {
  /** @example "550e8400-e29b-41d4-a716-446655440009" */
  id: string;
  /** @example "550e8400-e29b-41d4-a716-446655440000" */
  productId: string;
  /** @example "Платье "Мария"" */
  productName: string;
  /** @example "platye-mariya" */
  productSlug: string;
  /** @example "450.00" */
  price: string;
  /** @example "/uploads/products/image1.jpg" */
  mainImage?: string | null;
  /** @example "550e8400-e29b-41d4-a716-446655440003" */
  variantId: string;
  /** @example 170 */
  heightValue: number;
  /** @example "42" */
  sizeValue: string;
  /**
   * @format date-time
   * @example "2026-06-26T14:08:04.000Z"
   */
  createdAt: string;
}

export interface CartResponseDto {
  items: CartItemResponseDto[];
  /** @example "450.00" */
  totalAmount: string;
}

export interface CreateCartItemDto {
  /**
   * Идентификатор варианта товара (рост и размер)
   * @example "550e8400-e29b-41d4-a716-446655440003"
   */
  variantId: string;
}

export interface FavoriteResponseDto {
  /** @example "550e8400-e29b-41d4-a716-446655440015" */
  id: string;
  /** @example "550e8400-e29b-41d4-a716-446655440000" */
  productId: string;
  /** @example "Платье "Мария"" */
  productName: string;
  /** @example "platye-mariya" */
  productSlug: string;
  /** @example "450.00" */
  price: string;
  /** @example "/uploads/products/image1.jpg" */
  mainImage?: string | null;
  /**
   * @format date-time
   * @example "2026-06-26T14:08:04.000Z"
   */
  createdAt: string;
}

export interface CreateFavoriteDto {
  /**
   * Идентификатор товара
   * @example "550e8400-e29b-41d4-a716-446655440000"
   */
  productId: string;
}

export interface CheckPromoDto {
  /**
   * Код промокода для проверки
   * @example "MAISON2026"
   */
  code: string;
}

export interface PromoResponseDto {
  /** @example "550e8400-e29b-41d4-a716-446655440020" */
  id: string;
  /** @example "MAISON2026" */
  code: string;
  /** @example 10 */
  discountPercent: number;
  /** @example true */
  isActive: boolean;
  /**
   * @format date-time
   * @example "2026-06-29T06:00:00.000Z"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2026-06-29T06:00:00.000Z"
   */
  updatedAt: string;
}

export interface CreatePromoDto {
  /**
   * Уникальный код скидки (автоматически приводится к верхнему регистру)
   * @example "MAISON2026"
   */
  code: string;
  /**
   * Процент скидки (от 1 до 100)
   * @min 1
   * @max 100
   * @example 10
   */
  discountPercent: number;
  /**
   * Флаг активности промокода
   * @default true
   * @example true
   */
  isActive?: boolean;
}

export interface UpdatePromoDto {
  /**
   * Уникальный код скидки (автоматически приводится к верхнему регистру)
   * @example "MAISON2026"
   */
  code?: string;
  /**
   * Процент скидки (от 1 до 100)
   * @min 1
   * @max 100
   * @example 10
   */
  discountPercent?: number;
  /**
   * Флаг активности промокода
   * @default true
   * @example true
   */
  isActive?: boolean;
}

export interface CreateOrderDto {
  /**
   * Промокод для скидки (если применяется)
   * @example "MAISON2026"
   */
  promoCode?: string;
}

export interface OrderItemResponseDto {
  /** @example "550e8400-e29b-41d4-a716-446655440051" */
  id: string;
  /** @example "Платье "Мария"" */
  productName: string;
  /** @example 170 */
  heightValue: number;
  /** @example "42" */
  sizeValue: string;
  /** @example "450.00" */
  price: string;
  /** @example "550e8400-e29b-41d4-a716-446655440003" */
  variantId?: string | null;
}

export interface OrderResponseDto {
  /** @example "550e8400-e29b-41d4-a716-446655440050" */
  id: string;
  /** @example "260629-9831" */
  orderNumber: string;
  /** @example "405.00" */
  totalAmount: string;
  /** @example "45.00" */
  discount: string;
  /** @example "PENDING" */
  status: "PENDING" | "PAID" | "CANCELLED" | "REFUNDED";
  /** @example "MAISON2026" */
  promoCode?: string | null;
  /** @example "PENDING" */
  paymentStatus?: "PENDING" | "SUCCEEDED" | "CANCELLED" | null;
  /** @example "https://yoomoney.ru/checkout/payments/v2/contract?orderId=123" */
  confirmationUrl?: string | null;
  items: OrderItemResponseDto[];
  /**
   * @format date-time
   * @example "2026-06-29T06:00:00.000Z"
   */
  createdAt: string;
}

export interface OrdersPaginationResponseDto {
  orders: OrderResponseDto[];
  /**
   * Общее количество заказов
   * @example 84
   */
  total: number;
  /**
   * Текущая страница
   * @example 1
   */
  page: number;
  /**
   * Количество записей на странице
   * @example 20
   */
  limit: number;
  /**
   * Общее количество страниц
   * @example 5
   */
  totalPages: number;
}

export interface YooKassaAmountDto {
  /** @example "405.00" */
  value: string;
  /** @example "RUB" */
  currency: string;
}

export interface YooKassaMetadataDto {
  /** @example "550e8400-e29b-41d4-a716-446655440050" */
  orderId?: string;
}

export interface YooKassaObjectDto {
  /** @example "22e12f66-000f-5000-8000-18db3524d9c1" */
  id: string;
  /** @example "succeeded" */
  status: string;
  amount: YooKassaAmountDto;
  metadata?: YooKassaMetadataDto;
}

export interface YooKassaWebhookDto {
  /** @example "notification" */
  type: string;
  /** @example "payment.succeeded" */
  event: string;
  object: YooKassaObjectDto;
}

export interface UserAdminResponseDto {
  /** @example "550e8400-e29b-41d4-a716-446655440000" */
  id: string;
  /** @example "user@example.com" */
  email: string;
  /** @example "Иван Иванов" */
  name?: string | null;
  /** @example "+79991234567" */
  phone?: string | null;
  /** @example "USER" */
  role: "ADMIN" | "USER";
  /** @example false */
  isBanned: boolean;
  /** @example 4500 */
  totalSpent: number;
  /**
   * @format date-time
   * @example "2026-06-25T05:50:17.000Z"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2026-06-25T05:50:17.000Z"
   */
  updatedAt: string;
}

export interface UsersPaginationResponseDto {
  users: UserAdminResponseDto[];
  /**
   * Общее количество пользователей
   * @example 123
   */
  total: number;
  /**
   * Текущая страница
   * @example 1
   */
  page: number;
  /**
   * Количество записей на странице
   * @example 20
   */
  limit: number;
  /**
   * Общее количество страниц
   * @example 10
   */
  totalPages: number;
}

export interface UpdateUserAdminDto {
  /**
   * Имя пользователя
   * @example "Александр"
   */
  name?: string;
  /**
   * Телефон пользователя
   * @example "+79991234567"
   */
  phone?: string;
  /**
   * Роль пользователя
   * @example "USER"
   */
  role?: "ADMIN" | "USER";
  /**
   * Статус блокировки пользователя
   * @example false
   */
  isBanned?: boolean;
}

export interface StatisticResponseDto {
  /**
   * Общее количество заказов
   * @example 340
   */
  totalOrders: number;
  /**
   * Заказов оформлено сегодня
   * @example 12
   */
  ordersToday: number;
  /**
   * Заказов в статусе PENDING
   * @example 8
   */
  ordersPending: number;
  /**
   * Заказов в статусе PAID
   * @example 280
   */
  ordersPaid: number;
  /**
   * Общая выручка (по оплаченным заказам)
   * @example "1254780.00"
   */
  revenueTotal: string;
  /**
   * Выручка за сегодня
   * @example "24500.00"
   */
  revenueToday: string;
  /**
   * Общее количество пользователей
   * @example 1248
   */
  totalUsers: number;
  /**
   * Новых пользователей за последние 7 дней
   * @example 45
   */
  newUsersWeek: number;
  /**
   * Количество заблокированных пользователей
   * @example 2
   */
  bannedUsers: number;
  /**
   * Всего товаров в каталоге
   * @example 142
   */
  totalProducts: number;
  /**
   * Всего категорий
   * @example 8
   */
  totalCategories: number;
  /**
   * Активных промокодов
   * @example 6
   */
  activePromoCodes: number;
}
