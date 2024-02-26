import * as z from 'zod'

const schema = z.object({
  MANAGEMENT_API_URL: z.string().url().optional(),
  ORDERS_API_URL: z.string().url().optional(),
  ZIPCODE_API_URL: z.string().optional(),
})

export const env = schema.parse(process.env)
