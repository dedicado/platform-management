import { createAction, props } from '@ngrx/store'
import { Article } from '../../interfaces/article.interface'

const create = createAction('[ARTICLE] Create', props<{ inputs: Article }>())
const createSucceeded = createAction(
  '[ARTICLE] Create Succeeded',
  props<{ payload: Article }>(),
)

const findAll = createAction('[ARTICLE] Find All')
const findAllSucceeded = createAction(
  '[ARTICLE] Find All Succeeded',
  props<{ payload: Article[] }>(),
)

const findOne = createAction('[ARTICLE] Find One', props<{ id: string }>())
const findOneSucceeded = createAction(
  '[ARTICLE] Find One Succeeded',
  props<{ payload: Article }>(),
)

const update = createAction(
  '[ARTICLE] Update',
  props<{ id: string; data: Article }>(),
)
const updateSucceeded = createAction(
  '[ARTICLE] Update Succeeded',
  props<{ payload: Article }>(),
)

export const articlesActions = {
  create,
  createSucceeded,
  findAll,
  findAllSucceeded,
  findOne,
  findOneSucceeded,
  update,
  updateSucceeded,
}
