import { createReducer, on } from '@ngrx/store'
import { UserState } from '../../interfaces/state.interface'
import { usersActions } from '../actions/users-actions'

const initialState: UserState = {
  users: [],
}

export const usersReducers = createReducer(
  initialState,
  on(usersActions.findAll, (state, action) => {
    return {
      ...state,
    }
  }),
  on(usersActions.findAllSucceeded, (state, action) => {
    return {
      ...state,
      users: action.payload,
    }
  }),
  on(usersActions.create, (state, action) => {
    return {
      ...state,
    }
  }),
  on(usersActions.createSucceeded, (state, action) => {
    return {
      ...state,
    }
  }),
  on(usersActions.findOne, (state, action) => {
    return {
      ...state,
    }
  }),
  on(usersActions.findOneSucceeded, (state, action) => {
    return {
      ...state,
    }
  }),
  on(usersActions.update, (state, action) => {
    return {
      ...state,
    }
  }),
  on(usersActions.updateSucceeded, (state, action) => {
    return {
      ...state,
      user: action.payload,
    }
  }),
)
