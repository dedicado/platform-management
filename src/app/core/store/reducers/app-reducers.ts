import { ActionReducerMap } from '@ngrx/store'
import { AppState } from '../../interfaces/state.interface'
import { articlesReducers } from './articles-reducers'
import { membersReducers } from './members-reducers'
import { organizationsReducers } from './organizations-reducers'
import { usersReducers } from './users-reducers'
import { authReducers } from './auth-reducers'

export const appReducers: ActionReducerMap<AppState> = {
  articles: articlesReducers,
  auth: authReducers,
  members: membersReducers,
  organizations: organizationsReducers,
  users: usersReducers,
}
