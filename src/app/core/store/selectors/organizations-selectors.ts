import { createFeatureSelector, createSelector } from '@ngrx/store'
import { OrganizationState } from '../../interfaces/state.interface'

const featureSelector = createFeatureSelector<OrganizationState>('organizations')

const findAll = createSelector(featureSelector, (state) => {
  return state.organizations
})

export const organizationsSelectors = { findAll }
