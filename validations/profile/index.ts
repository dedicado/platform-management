import * as z from 'zod'

export const ProfileUpdateValidation = z.object({
  available: z.boolean().optional(),
  name: z.string(),
  document: z.string().min(11).max(14),
  email: z.string().email(),
  phone: z.string().min(10).max(12),
})
export type ProfileUpdateValidationType = z.infer<
  typeof ProfileUpdateValidation
>

export const ProfileAvaiableValidation = z.object({
  available: z.boolean(),
})
export type ProfileAvaiableValidationType = z.infer<
  typeof ProfileAvaiableValidation
>

export const ProfileLocationUpdateValidation = z.object({
  latitude: z.coerce.number(),
  longitude: z.coerce.number(),
})
export type ProfileLocationUpdateValidationType = z.infer<
  typeof ProfileLocationUpdateValidation
>

export const ProfilePasswordUpdateValidation = z
  .object({
    newPassword: z.string().min(8).max(25),
    confirmNewPassword: z.string().min(8).max(25),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: 'é diferente da nova senha',
    path: ['confirmNewPassword'],
  })
export type ProfilePasswordUpdateValidationType = z.infer<
  typeof ProfilePasswordUpdateValidation
>
