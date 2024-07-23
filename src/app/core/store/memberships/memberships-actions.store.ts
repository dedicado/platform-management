import { createAction, props } from '@ngrx/store'
import {
  CreateMembership,
  Membership,
  UpdateMembership,
} from '../../interfaces/membership.interface'
import { RemoveData } from '../../interfaces/core.interface'

const create = createAction(
  '[MEMBERSHIP] Create',
  props<{ createMembership: CreateMembership }>(),
)
const createSucceeded = createAction(
  '[MEMBERSHIP] Create Succeeded',
  props<{ message: string }>(),
)

const findByUser = createAction(
  '[MEMBERSHIP] Find By User',
  props<{ userId: string }>(),
)
const findByUserSucceeded = createAction(
  '[MEMBERSHIP] Find ByUser Succeeded',
  props<{ payload: Membership[] }>(),
)

const findMany = createAction('[MEMBERSHIP] Find Many')
const findManySucceeded = createAction(
  '[MEMBERSHIP] Find Many Succeeded',
  props<{ payload: Membership[] }>(),
)

const findOne = createAction('[MEMBERSHIP] Find One', props<{ id: string }>())
const findOneSucceeded = createAction(
  '[MEMBERSHIP] Find One Succeeded',
  props<{ payload: Membership }>(),
)

const remove = createAction(
  '[MEMBERSHIP] Remove',
  props<{ id: string; removeData: RemoveData }>(),
)
const removeSucceeded = createAction(
  '[MEMBERSHIP] Remove Succeeded',
  props<{ message: string }>(),
)

const update = createAction(
  '[MEMBERSHIP] Update',
  props<{ id: string; updateMembership: UpdateMembership }>(),
)
const updateSucceeded = createAction(
  '[MEMBERSHIP] Update Succeeded',
  props<{ message: string }>(),
)

export const membershipsActions = {
  create,
  createSucceeded,
  findByUser,
  findByUserSucceeded,
  findMany,
  findManySucceeded,
  findOne,
  findOneSucceeded,
  remove,
  removeSucceeded,
  update,
  updateSucceeded,
}
