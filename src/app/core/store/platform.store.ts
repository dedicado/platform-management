import { ActionReducerMap } from '@ngrx/store'
import { usersReducers } from './users/users-reducers.store'
import { organizationsReducers } from './organizations/organizations-reducers.store'
import { OrganizationsState } from '../interfaces/organization.interface'
import { UsersState } from '../interfaces/user.interface'
import { MembershipsState } from '../interfaces/membership.interface'
import { membershipsReducers } from './memberships/memberships-reducers.store'
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
