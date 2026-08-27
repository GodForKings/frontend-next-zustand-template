# Frontend Next.js + Zustand + TanStack Query Template (2026)

Современный, масштабируемый и готовый к продакшену шаблон фронтенд-приложения на **Next.js 16 (App Router, Turbopack, React Compiler)** и **React 19**, построенный по методологии **Feature-Sliced Design (FSD)** с **Entity-First** подходом.

---

## 🛠 Технологический стек

- **Core**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, Standalone Output, React Compiler, React Server Components)
- **UI & Framework**: [React 19](https://react.dev/), [Tailwind CSS v4](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/) (Radix UI, Lucide Icons, `cva`)
- **State Management**: [Zustand 5](https://zustand-demo.pmnd.rs/) (чистые селекторы, типизированные сторы, разделение State и Actions)
- **Server State & Data Fetching**: [TanStack React Query 5](https://tanstack.com/query/latest) (централизованные `query-keys.ts`, гидратация SSR, глобальные перехватчики ошибок)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod 4](https://zod.dev/)
- **Network & API**: Axios (с очередью обновления токенов 401, перехватом 503 Maintenance и таймаутами) + `swagger-typescript-api`
- **Utilities**: [usehooks-ts](https://usehooks-ts.com/) (включая `useCountdown`)
- **Architecture**: Entity-First Feature-Sliced Design (FSD v2)
- **Quality & Formatting**: ESLint 9 + Prettier + `eslint-plugin-boundaries` + `eslint-plugin-react-compiler`
- **Containerization**: Оптимизированный многоэтапный `Dockerfile` (`node:22-alpine`, standalone-сборка)

---

## 📁 Архитектура (Entity-First FSD)

Исходный код организован в директории `src/`:

```text
src/
├── app/                      # Слои приложения Next.js
│   ├── (public)/             # Публичные маршруты
│   │   ├── (auth)/           # Маршруты авторизации (/login, /registration, /reset-password)
│   │   └── (main)/           # Главная страница
│   ├── (protected)/          # Защищенные маршруты (/profile и др.)
│   ├── _assets/              # Глобальные стили (globals.css, палитра 2026, токены)
│   ├── _providers/           # Провайдеры (ReactQuery, SessionInitializer, MaintenanceGuard)
│   ├── layout.tsx            # Корневой Layout (SEO, Viewport, JsonLd, Inter)
│   ├── loading.tsx           # Люксовый экран загрузки (Eclipse Ring Spinner)
│   ├── robots.ts             # Динамический robots.txt
│   └── sitemap.ts            # Динамический sitemap.xml
├── entities/                 # Бизнес-сущности приложения
│   ├── session/              # Сессия пользователя (useSessionStore, SessionInitializer)
│   └── system-setting/       # Режим тех. работ и баннер (useSystemSettingsQuery, MaintenanceGuard)
├── features/                 # Интерактивные пользовательские сценарии
│   └── auth/                 # Авторизация (LoginForm, RegisterForm, ResetPasswordView, ForgotPasswordForm)
├── shared/                   # Переиспользуемый фундамент
│   ├── api/                  # Axios-инстанс, интерцепторы 401/503, сгенерированный API-клиент
│   ├── components/           # Общие компоненты (JsonLd, ThemeSwitcher, Модалки)
│   ├── config/               # Конфигурации (pages.ts, query-keys.ts, seo-config.ts)
│   ├── hooks/                # Кастомные хуки (useCountdown, useMounted, useInfiniteScroll)
│   ├── ui/                   # Дизайн-система (shadcn UI: Button, Input, Card, Badge, Select и др.)
│   └── utils/                # Утилиты (cn, showToast, dateFormatters)
└── proxy.ts                  # Edge Middleware (проверка сессии, защита маршрутов, редиректы)
```

---

## 💎 Особенности и готовые модули

### 1. Полноценный модуль авторизации (`features/auth`)
- **Вход и регистрация**: формы с валидацией Zod, показом/скрытием пароля и автоматической установкой сессии.
- **Восстановление пароля (`reset-password`)**:
  - `ForgotPasswordForm`: запрос ссылки на email.
  - `ForgotPasswordSent`: экран подтверждения с таймером повторной отправки (60 секунд через `usehooks-ts`).
  - `ResetPasswordForm`: проверка валидности токена (`useValidateResetTokenQuery`) и установка нового пароля.
  - `PasswordResetFailed`: экран для недействительных или просроченных ссылок.

### 2. Защита маршрутов и сессия (`proxy.ts` & `entities/session`)
- **Edge Middleware**: проверяет `accessToken` и `refreshToken` в cookies, перенаправляет неавторизованных пользователей с защищенных страниц на `/login?redirect=...` и запрещает доступ авторизованным к страницам входа/регистрации.
- **Очередь 401 в Axios**: автоматический прозрачный refresh токенов с блокировкой параллельных запросов.

### 3. Режим технического обслуживания (`entities/system-setting`)
- `MaintenanceGuard` и перехватчик `503 Service Unavailable` в Axios: при активации тех. работ интерфейс блокируется полноэкранным экраном `MaintenanceScreen`.
- `SystemBanner`: плавающий информационный баннер для уведомления пользователей.

### 4. Дизайн-система Minimal Luxe (2026)
- **UI-кит shadcn**: чистые и минималистичные компоненты (`Button`, `Card`, `Input` с вариантом `main`, `Badge`, `Checkbox`, `Switch`, `DropdownMenu`, `Select`).
- **Фоновые эффекты**: деликатные световые сферы (`Ambient Orbs`) и стеклянные карточки (`backdrop-blur-xl`).
- **Eclipse Spinner**: премиальный лоадер загрузки.

### 5. Tier-S SEO & Микроразметка Schema.org
- Автоматическая генерация структурированных данных JSON-LD (`Organization`, `WebSite`, `BreadcrumbList`).
- Оптимизированные `sitemap.ts` (с `revalidate = 3600`) и `robots.ts`.
- Адаптивный `Viewport.themeColor` для мобильных браузеров.

---

## 🚀 Быстрый старт

### 1. Установка зависимостей
```bash
npm install
```

### 2. Переменные окружения
Создайте `.env` файл на основе `.env.example`:
```env
NEXT_PUBLIC_API_URL='http://localhost:5000'
NEXT_PUBLIC_SITE_URL='http://localhost:3044'
```

### 3. Запуск сервера разработки
```bash
npm run dev
```
Приложение откроется по адресу: [http://localhost:3044](http://localhost:3044)

### 4. Генерация API-клиента из Swagger
```bash
npm run api:generate
```

### 5. Проверка кода линтером
```bash
npm run lint:fix
```

### 6. Сборка для продакшена
```bash
npm run build
npm run start
```

---

## 🐳 Docker

Сборка легковесного production-образа:
```bash
docker build -t frontend-template:latest .
docker run -p 3000:3000 frontend-template:latest
```

---

## 👨‍💻 Автор

- **Author**: GodForKings ([itdextra@ya.ru](mailto:itdextra@ya.ru))
