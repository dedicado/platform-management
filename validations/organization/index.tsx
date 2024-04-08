import * as z from 'zod'

export const CreateOrganizationValidation = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().min(10).max(14),
  document: z.string().length(14),
  zipCode: z.string().length(8).optional(),
  street: z.string().optional(),
  complement: z.string().optional(),
  latitude: z.coerce.number().optional(),
  longitude: z.coerce.number().optional(),
})
export type CreateOrganizationValidationType = z.infer<
  typeof CreateOrganizationValidation
>

export const UpdateOrganizationValidation = z.object({
  active: z.boolean().optional(),
  name: z.string().optional(),
  image: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().min(10).max(14).optional(),
  document: z.string().length(14).optional(),
  zipCode: z.string().length(8).optional(),
  street: z.string().optional(),
  complement: z.string().optional(),
  latitude: z.coerce.number().optional(),
  longitude: z.coerce.number().optional(),
})
export type UpdateOrganizationValidationType = z.infer<
  typeof UpdateOrganizationValidation
>
