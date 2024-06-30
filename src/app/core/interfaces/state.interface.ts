import { Article } from './article.interface'
import { Member } from './member.interface'
import { Organization } from './organization.interface'
import { User } from './user.interface'

export interface ArticleState {
  articles: Article[]
}

export interface MemberState {
  members: Member[]
}

export interface OrganizationState {
  organizations: Organization[]
}

export interface UserState {
  users: User[]
}
