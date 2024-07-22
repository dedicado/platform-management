import { createFeatureSelector, createSelector } from '@ngrx/store'
import { OrganizationsState } from '../../interfaces/organization.interface'

const featureSelector =
  createFeatureSelector<OrganizationsState>('organizations')

const count = createSelector(featureSelector, (state) => {
  return state.count
})

const findMany = createSelector(featureSelector, (state) => {
  return state.many
})

const findOne = createSelector(featureSelector, (state) => {
  return state.one
})

const message = createSelector(featureSelector, (state) => {
  return state.message
})

export const organizationsSelectors = { count, findMany, findOne, message }
