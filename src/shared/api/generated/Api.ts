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

import {
  AddPatternFileDto,
  AddProductImageDto,
  BroadcastResponseDto,
  CartResponseDto,
  CategoryResponseDto,
  CheckPromoDto,
  CreateCartItemDto,
  CreateCategoryDto,
  CreateFavoriteDto,
  CreateHeightDto,
  CreateOrderDto,
  CreateProductDto,
  CreatePromoDto,
  CreateSizeDto,
  CreateVariantBulkDto,
  FavoriteResponseDto,
  ForgotPasswordDto,
  ForgotPasswordResponseDto,
  HeightResponseDto,
  LoginDto,
  LoginResponseDto,
  LogoutResponseDto,
  MailResponseDto,
  OrderResponseDto,
  OrdersPaginationResponseDto,
  ProductResponseDto,
  ProductsMinPaginationResponseDto,
  ProductsPaginationResponseDto,
  PromoResponseDto,
  RefreshResponseDto,
  RegisterDto,
  ResetPasswordDto,
  ResetPasswordResponseDto,
  SendMailDto,
  SizeResponseDto,
  StatisticResponseDto,
  SystemSettingResponseDto,
  UpdateCategoryDto,
  UpdateHeightDto,
  UpdateProductDto,
  UpdatePromoDto,
  UpdateSizeDto,
  UpdateSystemSettingDto,
  UpdateUserAdminDto,
  UserAdminResponseDto,
  UserResponseDto,
  UsersPaginationResponseDto,
  ValidateResetTokenResponseDto,
  VariantResponseDto,
  YooKassaWebhookDto,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Api<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Upload
   * @name UploadControllerUploadImage
   * @summary Загрузить изображение товара в публичное облако/диск (Доступ: ADMIN)
   * @request POST:/api/upload/image
   * @secure
   */
  uploadControllerUploadImage = (
    data: {
      /** @format binary */
      file?: File;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /** @example "photo.jpg" */
        fileName?: string;
        /** @example "/uploads/public/uuid.jpg" */
        filePath?: string;
      },
      any
    >({
      path: `/api/upload/image`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Upload
   * @name UploadControllerUploadPattern
   * @summary Загрузить приватный файл выкройки PDF/ZIP (Доступ: ADMIN)
   * @request POST:/api/upload/pattern
   * @secure
   */
  uploadControllerUploadPattern = (
    data: {
      /** @format binary */
      file?: File;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /** @example "pattern_42_170.pdf" */
        fileName?: string;
        /** @example "/uploads/private/uuid.pdf" */
        filePath?: string;
      },
      any
    >({
      path: `/api/upload/pattern`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Upload
   * @name UploadControllerDeleteFile
   * @summary Удалить загруженный файл с диска (Доступ: ADMIN)
   * @request DELETE:/api/upload/file
   * @secure
   */
  uploadControllerDeleteFile = (
    query: {
      /**
       * Относительный путь или абсолютный URL файла для удаления
       * @example "/uploads/public/file.jpg"
       */
      filePath: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/api/upload/file`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags System Settings
   * @name SystemSettingControllerGetMaintenanceStatus
   * @summary Получить настройки режима тех. работ и информационного баннера
   * @request GET:/api/system-settings/maintenance
   */
  systemSettingControllerGetMaintenanceStatus = (params: RequestParams = {}) =>
    this.request<SystemSettingResponseDto, any>({
      path: `/api/system-settings/maintenance`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags System Settings
   * @name SystemSettingControllerUpdateMaintenanceStatus
   * @summary Изменить настройки тех. работ и баннера (Доступ: ADMIN)
   * @request PATCH:/api/system-settings/maintenance
   * @secure
   */
  systemSettingControllerUpdateMaintenanceStatus = (
    data: UpdateSystemSettingDto,
    params: RequestParams = {},
  ) =>
    this.request<SystemSettingResponseDto, any>({
      path: `/api/system-settings/maintenance`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Categories
   * @name CategoryControllerFindAll
   * @summary Получить список всех корневых категорий
   * @request GET:/api/categories
   */
  categoryControllerFindAll = (params: RequestParams = {}) =>
    this.request<CategoryResponseDto[], any>({
      path: `/api/categories`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Categories
   * @name CategoryControllerCreate
   * @summary Создать новую категорию (Доступ: ADMIN)
   * @request POST:/api/categories
   * @secure
   */
  categoryControllerCreate = (
    data: CreateCategoryDto,
    params: RequestParams = {},
  ) =>
    this.request<CategoryResponseDto, void>({
      path: `/api/categories`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Categories
   * @name CategoryControllerFindAllAdmin
   * @summary Получить все категории без фильтрации (Доступ: ADMIN)
   * @request GET:/api/categories/admin/all
   * @secure
   */
  categoryControllerFindAllAdmin = (params: RequestParams = {}) =>
    this.request<CategoryResponseDto[], void>({
      path: `/api/categories/admin/all`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Categories
   * @name CategoryControllerFindOne
   * @summary Получить категорию по её ID
   * @request GET:/api/categories/{id}
   */
  categoryControllerFindOne = (id: string, params: RequestParams = {}) =>
    this.request<CategoryResponseDto, void>({
      path: `/api/categories/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Categories
   * @name CategoryControllerUpdate
   * @summary Обновить категорию по ID (Доступ: ADMIN)
   * @request PATCH:/api/categories/{id}
   * @secure
   */
  categoryControllerUpdate = (
    id: string,
    data: UpdateCategoryDto,
    params: RequestParams = {},
  ) =>
    this.request<CategoryResponseDto, void>({
      path: `/api/categories/${id}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Categories
   * @name CategoryControllerRemove
   * @summary Удалить категорию по ID (Доступ: ADMIN)
   * @request DELETE:/api/categories/{id}
   * @secure
   */
  categoryControllerRemove = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/categories/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name AuthControllerRegister
   * @summary Регистрация нового пользователя
   * @request POST:/api/auth/register
   */
  authControllerRegister = (data: RegisterDto, params: RequestParams = {}) =>
    this.request<UserResponseDto, void>({
      path: `/api/auth/register`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name AuthControllerRegisterAdmin
   * @summary Регистрация первого администратора
   * @request POST:/api/auth/admin/register
   */
  authControllerRegisterAdmin = (
    data: RegisterDto,
    params: RequestParams = {},
  ) =>
    this.request<UserResponseDto, void>({
      path: `/api/auth/admin/register`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name AuthControllerLogin
   * @summary Авторизация пользователя
   * @request POST:/api/auth/login
   */
  authControllerLogin = (data: LoginDto, params: RequestParams = {}) =>
    this.request<LoginResponseDto, void>({
      path: `/api/auth/login`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name AuthControllerLogout
   * @summary Выход из системы (очистка cookie)
   * @request POST:/api/auth/logout
   */
  authControllerLogout = (params: RequestParams = {}) =>
    this.request<LogoutResponseDto, any>({
      path: `/api/auth/logout`,
      method: "POST",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name AuthControllerRefresh
   * @summary Обновление пары токенов доступа
   * @request POST:/api/auth/refresh
   */
  authControllerRefresh = (params: RequestParams = {}) =>
    this.request<RefreshResponseDto, void>({
      path: `/api/auth/refresh`,
      method: "POST",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name AuthControllerGetMe
   * @summary Получение профиля текущего пользователя
   * @request GET:/api/auth/me
   * @secure
   */
  authControllerGetMe = (params: RequestParams = {}) =>
    this.request<UserResponseDto, void>({
      path: `/api/auth/me`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name AuthControllerForgotPassword
   * @summary Запрос ссылки для восстановления пароля
   * @request POST:/api/auth/forgot-password
   */
  authControllerForgotPassword = (
    data: ForgotPasswordDto,
    params: RequestParams = {},
  ) =>
    this.request<ForgotPasswordResponseDto, any>({
      path: `/api/auth/forgot-password`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name AuthControllerValidateResetToken
   * @summary Проверка валидности токена сброса пароля
   * @request GET:/api/auth/reset-password/validate
   */
  authControllerValidateResetToken = (
    query: {
      /** Токен из ссылки сброса пароля */
      token: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ValidateResetTokenResponseDto, any>({
      path: `/api/auth/reset-password/validate`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name AuthControllerResetPassword
   * @summary Установка нового пароля по токену сброса
   * @request POST:/api/auth/reset-password
   */
  authControllerResetPassword = (
    data: ResetPasswordDto,
    params: RequestParams = {},
  ) =>
    this.request<ResetPasswordResponseDto, void>({
      path: `/api/auth/reset-password`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Mail
   * @name MailControllerSendNewsletter
   * @summary Запуск рассылки по всем пользователям с ролью USER (Доступ: ADMIN)
   * @request POST:/api/mail/send
   * @secure
   */
  mailControllerSendNewsletter = (
    data: SendMailDto,
    params: RequestParams = {},
  ) =>
    this.request<MailResponseDto, void>({
      path: `/api/mail/send`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Mail
   * @name MailControllerFindAllBroadcasts
   * @summary Получить историю рассылок (Доступ: ADMIN)
   * @request GET:/api/mail/broadcasts
   * @secure
   */
  mailControllerFindAllBroadcasts = (params: RequestParams = {}) =>
    this.request<BroadcastResponseDto[], void>({
      path: `/api/mail/broadcasts`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Heights
   * @name HeightControllerFindAll
   * @summary Получить список всех ростов
   * @request GET:/api/heights
   */
  heightControllerFindAll = (params: RequestParams = {}) =>
    this.request<HeightResponseDto[], any>({
      path: `/api/heights`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Heights
   * @name HeightControllerCreate
   * @summary Создать новый рост (Доступ: ADMIN)
   * @request POST:/api/heights
   * @secure
   */
  heightControllerCreate = (
    data: CreateHeightDto,
    params: RequestParams = {},
  ) =>
    this.request<HeightResponseDto, void>({
      path: `/api/heights`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Heights
   * @name HeightControllerFindOne
   * @summary Получить рост по ID
   * @request GET:/api/heights/{id}
   */
  heightControllerFindOne = (id: string, params: RequestParams = {}) =>
    this.request<HeightResponseDto, void>({
      path: `/api/heights/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Heights
   * @name HeightControllerUpdate
   * @summary Обновить существующий рост (Доступ: ADMIN)
   * @request PATCH:/api/heights/{id}
   * @secure
   */
  heightControllerUpdate = (
    id: string,
    data: UpdateHeightDto,
    params: RequestParams = {},
  ) =>
    this.request<HeightResponseDto, void>({
      path: `/api/heights/${id}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Heights
   * @name HeightControllerRemove
   * @summary Удалить рост по ID (Доступ: ADMIN)
   * @request DELETE:/api/heights/{id}
   * @secure
   */
  heightControllerRemove = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/heights/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Sizes
   * @name SizeControllerFindAll
   * @summary Получить список всех размеров
   * @request GET:/api/sizes
   */
  sizeControllerFindAll = (params: RequestParams = {}) =>
    this.request<SizeResponseDto[], any>({
      path: `/api/sizes`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Sizes
   * @name SizeControllerCreate
   * @summary Создать новый размер (Доступ: ADMIN)
   * @request POST:/api/sizes
   * @secure
   */
  sizeControllerCreate = (data: CreateSizeDto, params: RequestParams = {}) =>
    this.request<SizeResponseDto, void>({
      path: `/api/sizes`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Sizes
   * @name SizeControllerFindOne
   * @summary Получить размер по ID
   * @request GET:/api/sizes/{id}
   */
  sizeControllerFindOne = (id: string, params: RequestParams = {}) =>
    this.request<SizeResponseDto, void>({
      path: `/api/sizes/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Sizes
   * @name SizeControllerUpdate
   * @summary Обновить существующий размер (Доступ: ADMIN)
   * @request PATCH:/api/sizes/{id}
   * @secure
   */
  sizeControllerUpdate = (
    id: string,
    data: UpdateSizeDto,
    params: RequestParams = {},
  ) =>
    this.request<SizeResponseDto, void>({
      path: `/api/sizes/${id}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Sizes
   * @name SizeControllerRemove
   * @summary Удалить размер по ID (Доступ: ADMIN)
   * @request DELETE:/api/sizes/{id}
   * @secure
   */
  sizeControllerRemove = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/sizes/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductControllerFindAllActive
   * @summary Получить список активных товаров с фильтрацией (Публичный)
   * @request GET:/api/products
   */
  productControllerFindAllActive = (
    query?: {
      /**
       * Номер страницы (начиная с 1)
       * @min 1
       * @default 1
       * @example 1
       */
      page?: number;
      /**
       * Количество записей на странице
       * @min 1
       * @default 20
       * @example 20
       */
      limit?: number;
      /**
       * Фильтр по ID категории
       * @example "550e8400-e29b-41d4-a716-446655440000"
       */
      categoryId?: string;
      /**
       * Фильтр новинок
       * @example true
       */
      isNew?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ProductsMinPaginationResponseDto, any>({
      path: `/api/products`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductControllerCreate
   * @summary Создать новый товар (Доступ: ADMIN)
   * @request POST:/api/products
   * @secure
   */
  productControllerCreate = (
    data: CreateProductDto,
    params: RequestParams = {},
  ) =>
    this.request<ProductResponseDto, void>({
      path: `/api/products`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductControllerFindOneActive
   * @summary Получить активный товар по ID (Публичный)
   * @request GET:/api/products/{id}
   */
  productControllerFindOneActive = (id: string, params: RequestParams = {}) =>
    this.request<ProductResponseDto, void>({
      path: `/api/products/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductControllerUpdate
   * @summary Обновить данные товара (Доступ: ADMIN)
   * @request PATCH:/api/products/{id}
   * @secure
   */
  productControllerUpdate = (
    id: string,
    data: UpdateProductDto,
    params: RequestParams = {},
  ) =>
    this.request<ProductResponseDto, void>({
      path: `/api/products/${id}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductControllerRemove
   * @summary Удалить товар по ID (Доступ: ADMIN)
   * @request DELETE:/api/products/{id}
   * @secure
   */
  productControllerRemove = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/products/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductControllerFindAllAdmin
   * @summary Получить список вообще всех товаров с фильтрацией (Доступ: ADMIN)
   * @request GET:/api/products/admin/all
   * @secure
   */
  productControllerFindAllAdmin = (
    query?: {
      /**
       * Номер страницы (начиная с 1)
       * @min 1
       * @default 1
       * @example 1
       */
      page?: number;
      /**
       * Количество записей на странице
       * @min 1
       * @default 20
       * @example 20
       */
      limit?: number;
      /**
       * Фильтр по ID категории
       * @example "550e8400-e29b-41d4-a716-446655440000"
       */
      categoryId?: string;
      /**
       * Фильтр новинок
       * @example true
       */
      isNew?: boolean;
      /**
       * Фильтр по статусу активности
       * @example true
       */
      isActive?: boolean;
      /**
       * Поисковый запрос (по названию или slug)
       * @example "платье"
       */
      search?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ProductsPaginationResponseDto, any>({
      path: `/api/products/admin/all`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductControllerFindOneAdmin
   * @summary Получить любой товар по ID (Доступ: ADMIN)
   * @request GET:/api/products/admin/{id}
   * @secure
   */
  productControllerFindOneAdmin = (id: string, params: RequestParams = {}) =>
    this.request<ProductResponseDto, void>({
      path: `/api/products/admin/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductControllerAddImage
   * @summary Добавить изображение к товару (Доступ: ADMIN)
   * @request POST:/api/products/{id}/images
   * @secure
   */
  productControllerAddImage = (
    id: string,
    data: AddProductImageDto,
    params: RequestParams = {},
  ) =>
    this.request<ProductResponseDto, void>({
      path: `/api/products/${id}/images`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductControllerRemoveImage
   * @summary Удалить изображение товара (Доступ: ADMIN)
   * @request DELETE:/api/products/{id}/images/{imageId}
   * @secure
   */
  productControllerRemoveImage = (
    id: string,
    imageId: string,
    params: RequestParams = {},
  ) =>
    this.request<ProductResponseDto, void>({
      path: `/api/products/${id}/images/${imageId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Variants
   * @name VariantControllerFindAllActive
   * @summary Получить список активных вариантов для конкретного товара (Публичный)
   * @request GET:/api/variants/product/{productId}
   */
  variantControllerFindAllActive = (
    productId: string,
    params: RequestParams = {},
  ) =>
    this.request<VariantResponseDto[], any>({
      path: `/api/variants/product/${productId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Variants
   * @name VariantControllerFindOneActive
   * @summary Получить активный вариант по ID (Публичный)
   * @request GET:/api/variants/{id}
   */
  variantControllerFindOneActive = (id: string, params: RequestParams = {}) =>
    this.request<VariantResponseDto, void>({
      path: `/api/variants/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Variants
   * @name VariantControllerRemove
   * @summary Удалить вариант товара (Доступ: ADMIN)
   * @request DELETE:/api/variants/{id}
   * @secure
   */
  variantControllerRemove = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/variants/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Variants
   * @name VariantControllerFindAllAdmin
   * @summary Получить список всех вариантов товара (Доступ: ADMIN)
   * @request GET:/api/variants/admin/product/{productId}
   * @secure
   */
  variantControllerFindAllAdmin = (
    productId: string,
    params: RequestParams = {},
  ) =>
    this.request<VariantResponseDto[], any>({
      path: `/api/variants/admin/product/${productId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Variants
   * @name VariantControllerFindOneAdmin
   * @summary Получить любой вариант по ID (Доступ: ADMIN)
   * @request GET:/api/variants/admin/{id}
   * @secure
   */
  variantControllerFindOneAdmin = (id: string, params: RequestParams = {}) =>
    this.request<VariantResponseDto, void>({
      path: `/api/variants/admin/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Variants
   * @name VariantControllerCreateBulk
   * @summary Создать несколько вариантов товара матрицы (Доступ: ADMIN)
   * @request POST:/api/variants/bulk
   * @secure
   */
  variantControllerCreateBulk = (
    data: CreateVariantBulkDto,
    params: RequestParams = {},
  ) =>
    this.request<VariantResponseDto[], void>({
      path: `/api/variants/bulk`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Variants
   * @name VariantControllerAddPatternFile
   * @summary Прикрепить файл выкройки к варианту (Доступ: ADMIN)
   * @request POST:/api/variants/{id}/files
   * @secure
   */
  variantControllerAddPatternFile = (
    id: string,
    data: AddPatternFileDto,
    params: RequestParams = {},
  ) =>
    this.request<VariantResponseDto, void>({
      path: `/api/variants/${id}/files`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Variants
   * @name VariantControllerRemovePatternFile
   * @summary Удалить файл выкройки у варианта (Доступ: ADMIN)
   * @request DELETE:/api/variants/{id}/files/{fileId}
   * @secure
   */
  variantControllerRemovePatternFile = (
    id: string,
    fileId: string,
    params: RequestParams = {},
  ) =>
    this.request<VariantResponseDto, void>({
      path: `/api/variants/${id}/files/${fileId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Cart
   * @name CartControllerGetCart
   * @summary Получить корзину текущего пользователя
   * @request GET:/api/cart
   * @secure
   */
  cartControllerGetCart = (params: RequestParams = {}) =>
    this.request<CartResponseDto, any>({
      path: `/api/cart`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Cart
   * @name CartControllerAddItem
   * @summary Добавить вариант товара в корзину
   * @request POST:/api/cart
   * @secure
   */
  cartControllerAddItem = (
    data: CreateCartItemDto,
    params: RequestParams = {},
  ) =>
    this.request<CartResponseDto, void>({
      path: `/api/cart`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Cart
   * @name CartControllerRemoveItem
   * @summary Удалить позицию из корзины по ID записи
   * @request DELETE:/api/cart/{id}
   * @secure
   */
  cartControllerRemoveItem = (id: string, params: RequestParams = {}) =>
    this.request<CartResponseDto, void>({
      path: `/api/cart/${id}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Favorites
   * @name FavoriteControllerGetFavorites
   * @summary Получить список избранных товаров пользователя
   * @request GET:/api/favorites
   * @secure
   */
  favoriteControllerGetFavorites = (params: RequestParams = {}) =>
    this.request<FavoriteResponseDto[], any>({
      path: `/api/favorites`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Favorites
   * @name FavoriteControllerToggle
   * @summary Переключить статус избранного для товара (добавить/удалить)
   * @request POST:/api/favorites/toggle
   * @secure
   */
  favoriteControllerToggle = (
    data: CreateFavoriteDto,
    params: RequestParams = {},
  ) =>
    this.request<FavoriteResponseDto[], void>({
      path: `/api/favorites/toggle`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Promo Codes
   * @name PromoControllerCheckPromo
   * @summary Проверить промокод перед применением (Публичный)
   * @request POST:/api/promo/check
   */
  promoControllerCheckPromo = (
    data: CheckPromoDto,
    params: RequestParams = {},
  ) =>
    this.request<PromoResponseDto, void>({
      path: `/api/promo/check`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Promo Codes
   * @name PromoControllerFindAll
   * @summary Получить список всех промокодов (Доступ: ADMIN)
   * @request GET:/api/promo
   * @secure
   */
  promoControllerFindAll = (params: RequestParams = {}) =>
    this.request<PromoResponseDto[], any>({
      path: `/api/promo`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Promo Codes
   * @name PromoControllerCreate
   * @summary Создать новый промокод (Доступ: ADMIN)
   * @request POST:/api/promo
   * @secure
   */
  promoControllerCreate = (data: CreatePromoDto, params: RequestParams = {}) =>
    this.request<PromoResponseDto, void>({
      path: `/api/promo`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Promo Codes
   * @name PromoControllerFindOne
   * @summary Получить промокод по ID (Доступ: ADMIN)
   * @request GET:/api/promo/{id}
   * @secure
   */
  promoControllerFindOne = (id: string, params: RequestParams = {}) =>
    this.request<PromoResponseDto, void>({
      path: `/api/promo/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Promo Codes
   * @name PromoControllerUpdate
   * @summary Обновить параметры промокода (Доступ: ADMIN)
   * @request PATCH:/api/promo/{id}
   * @secure
   */
  promoControllerUpdate = (
    id: string,
    data: UpdatePromoDto,
    params: RequestParams = {},
  ) =>
    this.request<PromoResponseDto, void>({
      path: `/api/promo/${id}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Promo Codes
   * @name PromoControllerRemove
   * @summary Удалить промокод (Доступ: ADMIN)
   * @request DELETE:/api/promo/{id}
   * @secure
   */
  promoControllerRemove = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/promo/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Orders
   * @name OrderControllerCreate
   * @summary Оформить заказ из товаров в корзине
   * @request POST:/api/orders
   * @secure
   */
  orderControllerCreate = (data: CreateOrderDto, params: RequestParams = {}) =>
    this.request<OrderResponseDto, void>({
      path: `/api/orders`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Orders
   * @name OrderControllerGetMyOrders
   * @summary Получить список заказов текущего пользователя
   * @request GET:/api/orders
   * @secure
   */
  orderControllerGetMyOrders = (
    query?: {
      /**
       * Номер страницы (начиная с 1)
       * @min 1
       * @default 1
       * @example 1
       */
      page?: number;
      /**
       * Количество записей на странице
       * @min 1
       * @default 20
       * @example 20
       */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<OrdersPaginationResponseDto, any>({
      path: `/api/orders`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Orders
   * @name OrderControllerGetMyOrderDetails
   * @summary Получить детали заказа по ID
   * @request GET:/api/orders/{id}
   * @secure
   */
  orderControllerGetMyOrderDetails = (id: string, params: RequestParams = {}) =>
    this.request<OrderResponseDto, void>({
      path: `/api/orders/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Orders
   * @name OrderControllerFindAllAdmin
   * @summary Получить список вообще всех заказов в системе (Доступ: ADMIN)
   * @request GET:/api/orders/admin/all
   * @secure
   */
  orderControllerFindAllAdmin = (
    query?: {
      /**
       * Номер страницы (начиная с 1)
       * @min 1
       * @default 1
       * @example 1
       */
      page?: number;
      /**
       * Количество записей на странице
       * @min 1
       * @default 20
       * @example 20
       */
      limit?: number;
      /**
       * Поиск по номеру заказа или email покупателя
       * @example "260629"
       */
      search?: string;
      /**
       * Фильтр по статусу заказа
       * @example "PENDING"
       */
      status?: "PENDING" | "PAID" | "CANCELLED" | "REFUNDED";
      /**
       * Фильтр по ID пользователя (доступно только админам)
       * @example "550e8400-e29b-41d4-a716-446655440000"
       */
      userId?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<OrdersPaginationResponseDto, any>({
      path: `/api/orders/admin/all`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Orders
   * @name OrderControllerFindOneAdmin
   * @summary Получить детали любого заказа по ID (Доступ: ADMIN)
   * @request GET:/api/orders/admin/{id}
   * @secure
   */
  orderControllerFindOneAdmin = (id: string, params: RequestParams = {}) =>
    this.request<OrderResponseDto, void>({
      path: `/api/orders/admin/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Orders
   * @name OrderControllerUpdateStatus
   * @summary Изменить статус заказа (Доступ: ADMIN)
   * @request PATCH:/api/orders/admin/{id}/status
   * @secure
   */
  orderControllerUpdateStatus = (
    id: string,
    data: {
      /** @example "PAID" */
      status?: "PENDING" | "PAID" | "CANCELLED" | "REFUNDED";
    },
    params: RequestParams = {},
  ) =>
    this.request<OrderResponseDto, any>({
      path: `/api/orders/admin/${id}/status`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Payments
   * @name PaymentControllerCreatePayment
   * @summary Инициализировать оплату заказа в ЮKassa и получить ссылку
   * @request POST:/api/payments/create/{orderId}
   * @secure
   */
  paymentControllerCreatePayment = (
    orderId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /** @example "550e8400-e29b-41d4-a716-446655440055" */
        paymentId?: string;
        /** @example "https://yoomoney.ru/checkout/..." */
        confirmationUrl?: string;
      },
      void
    >({
      path: `/api/payments/create/${orderId}`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Payments
   * @name PaymentControllerHandleWebhook
   * @summary Прием уведомлений (Webhook) от ЮKassa об изменении статуса оплаты (Публичный)
   * @request POST:/api/payments/webhook
   */
  paymentControllerHandleWebhook = (
    data: YooKassaWebhookDto,
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/api/payments/webhook`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Patterns
   * @name PatternDownloadControllerDownload
   * @summary Скачать защищенный файл выкройки (Доступ: Авторизованный пользователь с оплаченным заказом или для бесплатного товара)
   * @request GET:/api/patterns/download/{fileId}
   * @secure
   */
  patternDownloadControllerDownload = (
    fileId: string,
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/api/patterns/download/${fileId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Users Admin
   * @name UserControllerFindAll
   * @summary Получить список всех пользователей с пагинацией и поиском (Доступ: ADMIN)
   * @request GET:/api/users
   * @secure
   */
  userControllerFindAll = (
    query?: {
      /**
       * Номер страницы (начиная с 1)
       * @min 1
       * @default 1
       * @example 1
       */
      page?: number;
      /**
       * Количество записей на странице
       * @min 1
       * @default 20
       * @example 20
       */
      limit?: number;
      /**
       * Строка поиска по имени, email или телефону
       * @example "Иван"
       */
      search?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<UsersPaginationResponseDto, any>({
      path: `/api/users`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users Admin
   * @name UserControllerExport
   * @summary Экспорт списка всех пользователей в CSV-файл (Доступ: ADMIN)
   * @request GET:/api/users/export
   * @secure
   */
  userControllerExport = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/users/export`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Users Admin
   * @name UserControllerUpdate
   * @summary Редактировать данные пользователя (Доступ: ADMIN)
   * @request PATCH:/api/users/{id}
   * @secure
   */
  userControllerUpdate = (
    id: string,
    data: UpdateUserAdminDto,
    params: RequestParams = {},
  ) =>
    this.request<UserAdminResponseDto, void>({
      path: `/api/users/${id}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Statistics
   * @name StatisticControllerGetStatistics
   * @summary Получить сводную статистику для дашборда (Доступ: ADMIN)
   * @request GET:/api/statistics
   * @secure
   */
  statisticControllerGetStatistics = (params: RequestParams = {}) =>
    this.request<StatisticResponseDto, any>({
      path: `/api/statistics`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
