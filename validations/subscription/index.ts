import * as z from 'zod'

export const CreateSubscriptionValidation = z.object({
  organizationDocument: z
    .string()
    .length(14, { message: 'o documento precisa ser o número do CNPJ' })
    .optional(),
  stripeCustomerId: z.string().optional(),
  stripeSubscriptionId: z.string().optional(),
  stripePriceId: z.string().optional(),
  credit: z.coerce.number().optional(),
  unlimited: z.boolean(),
})
export type CreateSubscriptionValidationType = z.infer<
  typeof CreateSubscriptionValidation
>

export const UpdateSubscriptionValidation = z.object({
  organizationDocument: z
    .string()
    .length(14, { message: 'o documento precisa ser o número do CNPJ' })
    .optional(),
  stripeCustomerId: z.string().optional(),
  stripeSubscriptionId: z.string().optional(),
  stripePriceId: z.string().optional(),
  credit: z.coerce.number().optional(),
  unlimited: z.boolean(),
})
export type UpdateSubscriptionValidationType = z.infer<
  typeof UpdateSubscriptionValidation
>
