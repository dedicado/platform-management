import { MainInterface } from './core.interface'
import { Organization } from './organization.interface'

export interface Subscription extends MainInterface {
  credit: number
  code?: string
  readonly organization: Organization
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
  one?: Subscription | undefined
  success: boolean
}
