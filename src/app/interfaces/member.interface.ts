import { MemberRole } from '../enum/role.enum'
import { Account } from './account.interface'
import { Company } from './company.interface'

export interface Member {
  readonly id?: string
  readonly createdAt?: Date
  updatedAt?: Date
  role: MemberRole
  active: boolean
  accountId: string
  account: Account
  companyId: string
  company: Company
}
