import { z } from 'zod'

export const loginSchema = z.object({
  email: z.email({ message: 'Некорректный email' }),
  password: z.string().min(6, { message: 'Пароль должен содержать минимум 6 символов' }),
})

export type LoginFormData = z.infer<typeof loginSchema>

export const registerSchema = z.object({
  name: z.string().min(2, { message: 'Имя слишком короткое' }).optional(),
  email: z.email({ message: 'Некорректный email' }),
  password: z.string().min(6, { message: 'Пароль должен содержать минимум 6 символов' }),
})

export type RegisterFormData = z.infer<typeof registerSchema>
