import { createFeatureSelector, createSelector } from '@ngrx/store'
import { UsersState } from '../../interfaces/user.interface'

const featureSelector = createFeatureSelector<UsersState>('users')

const count = createSelector(featureSelector, (state) => {
  return state.count
})

const findMany = createSelector(featureSelector, (state) => {
  return state.many
})

const findOne = createSelector(featureSelector, (state) => {
  return state.one
})

export const usersSelectors = { count, findMany, findOne }
