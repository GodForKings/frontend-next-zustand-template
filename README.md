# Frontend Next.js + Zustand + TanStack Query Template

Современный, масштабируемый и высокопроизводительный шаблон фронтенд-приложения на **Next.js 16 (App Router)** и **React 19**, построенный по методологии **Feature-Sliced Design (FSD)**.

---

## 🛠 Технологический стек

- **Core Framework**: [Next.js 16](https://nextjs.org/) (App Router, Standalone Mode, React Compiler)
- **UI & Styling**: [React 19](https://react.dev/), [Tailwind CSS v4](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/) (Radix UI, Lucide Icons, `cva`)
- **State Management**: [Zustand 5](https://zustand-demo.pmnd.rs/) (разделение `State` и `Actions`, типы в `types.ts`)
- **Server State & Data Fetching**: [TanStack React Query 5](https://tanstack.com/query/latest) (глобальная обработка ошибок мутаций, кэширование)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod 4](https://zod.dev/)
- **API Interceptor & Generation**: Axios + `swagger-typescript-api` (генерация TypeScript DTO и клиента из OpenAPI/Swagger)
- **Architecture**: Feature-Sliced Design (FSD v2)
- **Linting & Code Quality**: ESLint 9 + Prettier + `eslint-plugin-boundaries` + `eslint-plugin-simple-import-sort`

---

## 📁 Архитектура (Feature-Sliced Design)

Проект строго следует принципам **Feature-Sliced Design**. Вся исходная логика находится в директории `src/`:

```text
src/
├── app/              # Слои приложения: глобальные провайдеры, роуты Next.js, стили
├── widgets/          # Составные блоки страниц (хэдеры, сайдбары, списки)
├── features/         # Интерактивные пользовательские сценарии (авторизация, поиск)
├── entities/         # Бизнес-сущности (сессия пользователя, профиль)
└── shared/           # Переиспользуемый код (UI-кит shadcn, API-клиент, хелперы, конфиги)
```

### Правила код-стайла:
1. **Разделение бизнес-логики и типов**: Для каждой фичи или стора типы/схемы выносятся в `model/types.ts`. Сторы содержат только исполняемую логику.
2. **Селекторы Zustand**: Обращение к сторам в компонентах происходит через точечные селекторы:
   ```tsx
   const setUser = useSessionStore((state) => state.setUser)
   ```
3. **Глобальные ошибки API**: Все ошибки мутаций автоматизированы через `ReactQueryProvider`.
4. **Стилизация**: Классы в `cn(...)` логически группируются и переносятся на отдельные строки.

---

## 🚀 Быстрый старт

### 1. Установка зависимостей
```bash
npm install
```

### 2. Запуск сервера разработки
```bash
npm run dev
```
Приложение откроется по адресу: [http://localhost:3001](http://localhost:3001)

### 3. Генерация API-клиента из Swagger
Для обновления автосгенерированного API-клиента из NestJS бэкенда:
```bash
npm run api:generate
```

### 4. Проверка кода линтером
```bash
npm run lint
# или исправление ошибок:
npm run lint:fix
```

### 5. Сборка проекта
```bash
npm run build
npm run start
```

---

## 🔐 Авторизация и Middleware

Проект поставляется с готовой системой сессий на базе `accessToken` и `refreshToken` (HTTP-Only Cookies):
- Маршрутизация и защита роутов осуществляются на уровне Edge через Next.js `middleware.ts`.
- Асинхронный выход (`logout`) интегрирован с API бэкенда и очисткой клиентского стора `useSessionStore`.

---

## 👨‍💻 Автор

- **Author**: GodForKings ([itdextra@ya.ru](mailto:itdextra@ya.ru))
