import { createAction, props } from '@ngrx/store'
import { Member } from '../../interfaces/member.interface'

const create = createAction('[MEMBER] Create', props<{ inputs: Member }>())
const createSucceeded = createAction(
  '[MEMBER] Create Succeeded',
  props<{ payload: Member }>(),
)

const findAll = createAction('[MEMBER] Find All')
const findAllSucceeded = createAction(
  '[MEMBER] Find All Succeeded',
  props<{ payload: Member[] }>(),
)

const findOne = createAction('[MEMBER] Find One', props<{ id: string }>())
const findOneSucceeded = createAction(
  '[MEMBER] Find One Succeeded',
  props<{ payload: Member }>(),
)

const update = createAction(
  '[MEMBER] Update',
  props<{ id: string; data: Member }>(),
)
const updateSucceeded = createAction(
  '[MEMBER] Update Succeeded',
  props<{ payload: Member }>(),
)

export const membersActions = {
  create,
  createSucceeded,
  findAll,
  findAllSucceeded,
  findOne,
  findOneSucceeded,
  update,
  updateSucceeded,
}
