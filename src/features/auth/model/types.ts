import { z } from 'zod'

export const loginSchema = z.object({
  email: z.email({ message: 'Некорректный email' }),
  password: z.string().min(8, { message: 'Пароль должен содержать минимум 8 символов' }),
})

export const forgotPasswordSchema = z.object({
  email: z.email({ message: 'Некорректный email' }),
})

export const registerSchema = z.object({
  name: z.string().min(2, { message: 'Имя слишком короткое' }).optional(),
  email: z.email({ message: 'Некорректный email' }),
  password: z.string().min(8, { message: 'Пароль должен содержать минимум 8 символов' }),
})

export const resetPasswordSchema = z
  .object({
    password: z.string().min(8, { message: 'Пароль должен содержать минимум 8 символов' }),
    confirmPassword: z.string().min(1, { message: 'Подтвердите пароль' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  })

export type LoginFormData = z.infer<typeof loginSchema>
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>
export type RegisterFormData = z.infer<typeof registerSchema>
