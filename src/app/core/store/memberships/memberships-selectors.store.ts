import { createFeatureSelector, createSelector } from '@ngrx/store'
import { MembershipsState } from '../../interfaces/membership.interface'

const featureSelector = createFeatureSelector<MembershipsState>('memberships')

const count = createSelector(featureSelector, (state) => {
  return state.count
})

const findMany = createSelector(featureSelector, (state) => {
  return state.many
})

const findOne = createSelector(featureSelector, (state) => {
  return state.one
})

export const membershipsSelectors = { count, findMany, findOne }
