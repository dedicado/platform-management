import { createReducer, on } from '@ngrx/store'
import { UsersState } from '../../interfaces/user.interface'
import { usersActions } from './users-actions.store'

const initialState: UsersState = {
  success: false,
}

export const usersReducers = createReducer(
  initialState,

  //create
  on(usersActions.create, (state, action) => {
    return {
      ...state,
    }
  }),
  on(usersActions.createSucceeded, (state, action) => {
    return {
      ...state,
      message: action.message,
      success: true,
    }
  }),

  //findMany
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

  //findMe
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

  //findOne
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

  //remove
  on(usersActions.remove, (state, action) => {
    return {
      ...state,
    }
  }),
  on(usersActions.removeSucceeded, (state, action) => {
    return {
      ...state,
      message: action.message,
      success: true,
    }
  }),

  //update
  on(usersActions.update, (state, action) => {
    return {
      ...state,
    }
  }),
  on(usersActions.updateSucceeded, (state, action) => {
    return {
      ...state,
      message: action.message,
      success: true,
    }
  }),
)
