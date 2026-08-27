/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
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
   * @example "Уважаемые пользователи, сайт будет временно недоступен."
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
   * @example "Уважаемые пользователи, сайт будет временно недоступен."
   */
  bannerText?: string;
  /**
   * Ссылка на баннере
   * @example "https://example.com/maintenance"
   */
  bannerLink?: string;
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

export interface UpdateProfileDto {
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
   * Новый пароль
   * @minLength 8
   * @example "newStrongPassword123"
   */
  password?: string;
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

export interface UploadImageResponseDto {
  /** @example "photo.jpg" */
  fileName?: string;
  /** @example "/uploads/public/uuid.jpg" */
  filePath?: string;
}

export interface UploadPatternResponseDto {
  /** @example "pattern_42_170.pdf" */
  fileName?: string;
  /** @example "/uploads/private/uuid.pdf" */
  filePath?: string;
}
