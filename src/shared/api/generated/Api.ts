/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ---------------------------------------------------------------
 */

import {
  ForgotPasswordDto,
  ForgotPasswordResponseDto,
  LoginDto,
  LoginResponseDto,
  LogoutResponseDto,
  RefreshResponseDto,
  RegisterDto,
  ResetPasswordDto,
  ResetPasswordResponseDto,
  SystemSettingResponseDto,
  UpdateProfileDto,
  UpdateSystemSettingDto,
  UploadImageResponseDto,
  UploadPatternResponseDto,
  UserResponseDto,
  ValidateResetTokenResponseDto,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Api<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @tags Upload
   * @name UploadControllerUploadImage
   * @summary Загрузить изображение в публичное облако/диск (Доступ: ADMIN)
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
    this.request<UploadImageResponseDto, any>({
      path: `/api/upload/image`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });

  /**
   * @tags Upload
   * @name UploadControllerUploadPattern
   * @summary Загрузить приватный файл PDF/ZIP (Доступ: ADMIN)
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
    this.request<UploadPatternResponseDto, any>({
      path: `/api/upload/pattern`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });

  /**
   * @tags Upload
   * @name UploadControllerDeleteFile
   * @summary Удалить загруженный файл с диска (Доступ: ADMIN)
   * @request DELETE:/api/upload/file
   * @secure
   */
  uploadControllerDeleteFile = (
    query: {
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
   * @tags Auth
   * @name AuthControllerUpdateMe
   * @summary Обновление профиля текущего пользователя
   * @request PATCH:/api/auth/me
   * @secure
   */
  authControllerUpdateMe = (
    data: UpdateProfileDto,
    params: RequestParams = {},
  ) =>
    this.request<UserResponseDto, void>({
      path: `/api/auth/me`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });

  /**
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
}
