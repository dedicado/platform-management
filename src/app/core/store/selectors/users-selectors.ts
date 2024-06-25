import { createFeatureSelector, createSelector } from '@ngrx/store'
import { UserState } from '../../interfaces/state.interface'

const featureSelector = createFeatureSelector<UserState>('users')

const findAll = createSelector(featureSelector, (state) => {
  return state.users
})

export const usersSelectors = { findAll }
