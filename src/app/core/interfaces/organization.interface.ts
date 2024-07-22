import { Information } from './information.interface'
import { Address } from './location.interface'
import { Membership } from './membership.interface'

export interface Organization extends Address, Information {
  key: string
  membership: Membership[]
}

export interface OrganizationsState {
  count?: number
  error?: string | undefined
  many?: Organization[] | []
  message?: string | undefined
  one?: Organization | undefined
  success: boolean
}

export interface CreateOrganization
  extends Partial<
    Omit<
      Organization,
      'id, updatedAt, updatedAt, deletedAt, softDeleted, active'
    >
  > {}

export interface UpdateOrganization extends Partial<CreateOrganization> {}
