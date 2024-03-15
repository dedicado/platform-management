import * as z from 'zod'

export const OrderLocationValidation = z.object({
  order: z.string(),
  latitude: z.coerce.number(),
  longitude: z.coerce.number(),
})
export type OrderLocationValidationType = z.infer<
  typeof OrderLocationValidation
>
