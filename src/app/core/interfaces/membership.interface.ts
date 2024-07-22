import { MembershipRole } from '../enum/role.enum'
import { MainInterface } from './core.interface'
import { Organization } from './organization.interface'
import { User } from './user.interface'

export interface Membership extends MainInterface {
  organization: Organization
  readonly organizationId: string
  role: MembershipRole
  user: User
  readonly userId: string
}

export interface MembershipsState {
  count?: number
  error?: string | undefined
  many?: Membership[] | []
  message?: string | undefined
  one?: Membership | undefined
  success: boolean
}
