import { createReducer, on } from '@ngrx/store'
import { ArticleState } from '../../interfaces/state.interface'
import { articlesActions } from '../actions/articles-actions'

const initialState: ArticleState = {
  articles: [],
}

export const articlesReducers = createReducer(
  initialState,
  on(articlesActions.findAll, (state, action) => {
    return {
      ...state,
    }
  }),
  on(articlesActions.findAllSucceeded, (state, action) => {
    return {
      ...state,
      users: action.payload,
    }
  }),
  on(articlesActions.create, (state, action) => {
    return {
      ...state,
    }
  }),
  on(articlesActions.createSucceeded, (state, action) => {
    return {
      ...state,
    }
  }),
  on(articlesActions.findOne, (state, action) => {
    return {
      ...state,
    }
  }),
  on(articlesActions.findOneSucceeded, (state, action) => {
    return {
      ...state,
    }
  }),
  on(articlesActions.update, (state, action) => {
    return {
      ...state,
    }
  }),
  on(articlesActions.updateSucceeded, (state, action) => {
    return {
      ...state,
      user: action.payload,
    }
  }),
)
