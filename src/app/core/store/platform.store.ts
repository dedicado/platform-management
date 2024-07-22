import { ActionReducerMap } from '@ngrx/store'
import { usersReducers } from './users/users-reducers.store'
import { usersEffects } from './users/users-effects.store'
import { organizationsEffects } from './organizations/organizations-effects.store'
import { organizationsReducers } from './organizations/organizations-reducers.store'
import { OrganizationsState } from '../interfaces/organization.interface'
import { UsersState } from '../interfaces/user.interface'
import { membershipsEffects } from './memberships/memberships-effects.store'
import { MembershipsState } from '../interfaces/membership.interface'
import { membershipsReducers } from './memberships/memberships-reducers.store'
import { subscriptionsEffects } from './subscriptions/subscriptions-effects.store'
import { subscriptionsReducers } from './subscriptions/subscriptions-reducers.store'
import { SubscriptionsState } from '../interfaces/subscription.interface'

interface PlatformState {
  memberships: MembershipsState
  organizations: OrganizationsState
  subscriptions: SubscriptionsState
  users: UsersState
}

export const platformStore: ActionReducerMap<PlatformState> = {
  memberships: membershipsReducers,
  organizations: organizationsReducers,
  subscriptions: subscriptionsReducers,
  users: usersReducers,
}

export const platformEffects = [
  membershipsEffects,
  organizationsEffects,
  subscriptionsEffects,
  usersEffects,
]
