import * as z from 'zod'

const METHOD = ['GET', 'POST', 'PATCH', 'DELETE'] as const

export const CreateApiSpendValidation = z.object({
  key: z.string(),
  host: z.string().optional(),
  method: z.enum(METHOD).optional(),
  url: z.string().optional(),
})
export type CreateApiSpendValidationType = z.infer<
  typeof CreateApiSpendValidation
>
