import * as z from 'zod'

export const RegisterValidation = z.object({
  name: z.string().min(5),
  email: z.string().email(),
  phone: z.string().min(10).max(12),
  password: z.string().min(8).max(25).optional(),
})
export type RegisterValidationType = z.infer<typeof RegisterValidation>
