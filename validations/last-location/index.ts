import * as z from 'zod'

export const CreateLastLocationValidation = z.object({
  userPhone: z.string().min(10).max(12),
  latitude: z.coerce.number(),
  longitude: z.coerce.number(),
})
export type CreateLastLocationValidationType = z.infer<
  typeof CreateLastLocationValidation
>
