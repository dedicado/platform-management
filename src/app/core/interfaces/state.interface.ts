import { Article } from './article.interface'
import { AuthPayload } from './auth.interface'
import { Member } from './member.interface'
import { Organization } from './organization.interface'
import { User } from './user.interface'

export interface AppState {
  articles: ArticleState
  auth: AuthState,
  members: MemberState
  organizations: OrganizationState
  users: UserState
}

export interface ArticleState {
  articles: Article[]
}

export interface AuthState {
  isAuthenticated: boolean
  isValidated: boolean
  payload: AuthPayload | null
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
