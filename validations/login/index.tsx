import * as z from 'zod'

export const LoginValidation = z.object({
  phone: z.string().min(10).max(14),
  password: z.string().min(8).max(25),
})
export type LoginValidationType = z.infer<typeof LoginValidation>
