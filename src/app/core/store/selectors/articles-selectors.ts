import { createFeatureSelector, createSelector } from '@ngrx/store'
import { ArticleState } from '../../interfaces/state.interface'

const featureSelector = createFeatureSelector<ArticleState>('articles')

const findAll = createSelector(featureSelector, (state) => {
  return state.articles
})

export const articlesSelectors = { findAll }
