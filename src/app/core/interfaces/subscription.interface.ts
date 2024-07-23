import { MainInterface } from './core.interface'
import { Organization } from './organization.interface'

export interface Subscription extends MainInterface {
  credit: number
  code?: string
  organization: Organization
  organizationId: string
  paymentCustomerId?: string
  paymentGateway?: string
  paymentPriceId?: string
  paymentSubscriptionId?: string
  unlimited?: boolean
}

export interface SubscriptionsState {
  count?: number
  error?: string | undefined
  many?: Subscription[] | []
  message?: string | undefined
  one?: Subscription | undefined
  success: boolean
}

export interface CreateSubscription
  extends Partial<
    Omit<
      Subscription,
      'id, updatedAt, updatedAt, deletedAt, softDeleted, active'
    >
  > {}

export interface UpdateSubscription extends Partial<CreateSubscription> {}
