import { createReducer, on } from '@ngrx/store'
import { OrganizationsState } from '../../interfaces/organization.interface'
import { organizationsActions } from './organizations-actions.store'

const initialState: OrganizationsState = {
  success: false,
}

export const organizationsReducers = createReducer(
  initialState,

  //create
  on(organizationsActions.create, (state, action) => {
    return {
      ...state,
    }
  }),
  on(organizationsActions.createSucceeded, (state, action) => {
    return {
      ...state,
      message: action.message,
      success: true,
    }
  }),

  //createForUser
  on(organizationsActions.createForUser, (state, action) => {
    return {
      ...state,
    }
  }),
  on(organizationsActions.createForUserSucceeded, (state, action) => {
    return {
      ...state,
      message: action.message,
      success: true,
    }
  }),

  //findByDocument
  on(organizationsActions.findByDocument, (state, action) => {
    return {
      ...state,
    }
  }),
  on(organizationsActions.findByDocumentSucceeded, (state, action) => {
    return {
      ...state,
      one: action.payload,
      success: true,
    }
  }),

  //findMany
  on(organizationsActions.findMany, (state, action) => {
    return {
      ...state,
    }
  }),
  on(organizationsActions.findManySucceeded, (state, action) => {
    return {
      ...state,
      count: action.payload.length,
      many: action.payload,
      success: true,
    }
  }),

  //findOne
  on(organizationsActions.findOne, (state, action) => {
    return {
      ...state,
    }
  }),
  on(organizationsActions.findOneSucceeded, (state, action) => {
    return {
      ...state,
      one: action.payload,
      success: true,
    }
  }),

  //remove
  on(organizationsActions.remove, (state, action) => {
    return {
      ...state,
    }
  }),
  on(organizationsActions.removeSucceeded, (state, action) => {
    return {
      ...state,
      message: action.message,
      success: true,
    }
  }),

  //update
  on(organizationsActions.update, (state, action) => {
    return {
      ...state,
    }
  }),
  on(organizationsActions.updateSucceeded, (state, action) => {
    return {
      ...state,
      message: action.message,
      success: true,
    }
  }),
)
