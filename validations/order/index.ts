import * as z from 'zod'

const REQUIREMENT = [
  'cobrança',
  'coleta',
  'entrega',
  'manutenção',
  'serviço',
  'suporte',
] as const

export const OrderLocationValidation = z.object({
  order: z.string(),
  latitude: z.coerce.number(),
  longitude: z.coerce.number(),
})
export type OrderLocationValidationType = z.infer<
  typeof OrderLocationValidation
>

export const OrderCreateValidation = z.object({
  code: z.string().optional(),
  requirement: z.enum(REQUIREMENT).default('serviço').optional(),
  subject: z.string().optional(),
  price: z.coerce.number().optional(),
  observation: z.string().optional(),
  member: z.string().min(10).max(12).optional(),
  organization: z.string().length(14),
  originZipCode: z.string().length(8).optional(),
  originComplement: z.string().optional(),
  originLatitude: z.coerce.number().optional(),
  originLongitude: z.coerce.number().optional(),
  customer: z.string().min(11).max(14),
  destinationZipCode: z.string().length(8).optional(),
  destinationComplement: z.string().optional(),
  destinationLatitude: z.coerce.number().optional(),
  destinationLongitude: z.coerce.number().optional(),
  latitude: z.coerce.number().optional(),
  longitude: z.coerce.number().optional(),
  deadline: z.coerce.date().optional(),
})
export type OrderCreateValidationType = z.infer<typeof OrderCreateValidation>

export const OrderUpdateValidation = z.object({
  requirement: z.enum(REQUIREMENT).optional(),
  subject: z.string().optional(),
  price: z.coerce.number().optional(),
  observation: z.string().optional(),
  organization: z.string().length(14).optional(),
  customer: z.string().min(11).max(14).optional(),
  member: z.string().min(10).max(12).optional(),
  originZipCode: z.string().length(8).optional(),
  originComplement: z.string().optional(),
  originLatitude: z.coerce.number().optional(),
  originLongitude: z.coerce.number().optional(),
  destinationZipCode: z.string().length(8).optional(),
  destinationComplement: z.string().optional(),
  destinationLatitude: z.coerce.number().optional(),
  destinationLongitude: z.coerce.number().optional(),
  latitude: z.coerce.number().optional(),
  longitude: z.coerce.number().optional(),
  directions: z.string().optional(),
  deadline: z.coerce.date().optional(),
  started: z.boolean().optional(),
  startDate: z.coerce.date().optional(),
  startNote: z.string().optional(),
  completed: z.boolean().optional(),
  completionDate: z.coerce.date().optional(),
  completionNote: z.string().optional(),
  canceled: z.boolean().optional(),
  cancellationDate: z.coerce.date().optional(),
  cancellationNote: z.string().optional(),
})
export type OrderUpdateValidationType = z.infer<typeof OrderUpdateValidation>
