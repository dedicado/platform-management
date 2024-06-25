import { createAction, props } from '@ngrx/store'
import { User } from '../../interfaces/user.interface'

const create = createAction('[USERS] Create', props<{ inputs: User }>())
const createSucceeded = createAction(
  '[USER] Create Succeeded',
  props<{ payload: User }>(),
)

const findAll = createAction('[USERS] Find All')
const findAllSucceeded = createAction(
  '[USER] Find All Succeeded',
  props<{ payload: User[] }>(),
)

const findOne = createAction('[USER] Find One', props<{ id: string }>())
const findOneSucceeded = createAction(
  '[USER] Find One Succeeded',
  props<{ payload: User }>(),
)

const update = createAction(
  '[USER] Update',
  props<{ id: string; data: User }>(),
)
const updateSucceeded = createAction(
  '[USER] Update Succeeded',
  props<{ payload: User }>(),
)

export const usersActions = {
  create,
  createSucceeded,
  findAll,
  findAllSucceeded,
  findOne,
  findOneSucceeded,
  update,
  updateSucceeded,
}
