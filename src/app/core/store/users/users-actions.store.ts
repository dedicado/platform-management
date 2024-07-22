import { createAction, props } from '@ngrx/store'
import { CreateUser, UpdateUser, User } from '../../interfaces/user.interface'
import { RemoveData } from '../../interfaces/core.interface'

const create = createAction(
  '[USER] Create',
  props<{ createUser: CreateUser }>(),
)
const createSucceeded = createAction(
  '[USER] Create Succeeded',
  props<{ message: string }>(),
)

const findMany = createAction('[USER] Find Many')
const findManySucceeded = createAction(
  '[USER] Find Many Succeeded',
  props<{ payload: User[] }>(),
)

const findMe = createAction('[USER] Find Me')
const findMeSucceeded = createAction(
  '[USER] Find Me Succeeded',
  props<{ payload: User }>(),
)

const findOne = createAction('[USER] Find One', props<{ id: string }>())
const findOneSucceeded = createAction(
  '[USER] Find One Succeeded',
  props<{ payload: User }>(),
)

const remove = createAction(
  '[USER] Remove',
  props<{ id: string; removeData: RemoveData }>(),
)
const removeSucceeded = createAction(
  '[USER] Remove Succeeded',
  props<{ message: string }>(),
)

const update = createAction(
  '[USER] Update',
  props<{ id: string; updateUser: UpdateUser }>(),
)
const updateSucceeded = createAction(
  '[USER] Update Succeeded',
  props<{ message: string }>(),
)

export const usersActions = {
  create,
  createSucceeded,
  findMany,
  findManySucceeded,
  findMe,
  findMeSucceeded,
  findOne,
  findOneSucceeded,
  remove,
  removeSucceeded,
  update,
  updateSucceeded,
}
