import { createReducer, on } from '@ngrx/store'
import { UsersState } from '../../interfaces/user.interface'
import { usersActions } from './users-actions.store'

const initialState: UsersState = {
  success: false,
}

export const usersReducers = createReducer(
  initialState,
  on(usersActions.findMany, (state, action) => {
    return {
      ...state,
    }
  }),
  on(usersActions.findManySucceeded, (state, action) => {
    return {
      ...state,
      count: action.payload.length,
      many: action.payload,
      success: true,
    }
  }),

  on(usersActions.findMe, (state, action) => {
    return {
      ...state,
    }
  }),
  on(usersActions.findMeSucceeded, (state, action) => {
    return {
      ...state,
      one: action.payload,
      success: true,
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
      one: action.payload,
      success: true,
    }
  }),
)
