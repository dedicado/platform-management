import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AuthState } from '../../interfaces/state.interface'

const featureSelector = createFeatureSelector<AuthState>('auth')

const isAuthenticated = createSelector(featureSelector, (state) => {
  return state.isAuthenticated
})

export const authSelectors = { isAuthenticated }
