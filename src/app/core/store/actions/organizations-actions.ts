import { createAction, props } from '@ngrx/store'
import { Organization } from '../../interfaces/organization.interface'

const create = createAction(
  '[ORGANIZATION] Create',
  props<{ inputs: Organization }>(),
)
const createSucceeded = createAction(
  '[ORGANIZATION] Create Succeeded',
  props<{ payload: Organization }>(),
)

const findAll = createAction('[ORGANIZATION] Find All')
const findAllSucceeded = createAction(
  '[ORGANIZATION] Find All Succeeded',
  props<{ payload: Organization[] }>(),
)

const findOne = createAction('[USER] Find One', props<{ id: string }>())
const findOneSucceeded = createAction(
  '[ORGANIZATION] Find One Succeeded',
  props<{ payload: Organization }>(),
)

const update = createAction(
  '[ORGANIZATION] Update',
  props<{ id: string; data: Organization }>(),
)
const updateSucceeded = createAction(
  '[ORGANIZATION] Update Succeeded',
  props<{ payload: Organization }>(),
)

export const organizationsActions = {
  create,
  createSucceeded,
  findAll,
  findAllSucceeded,
  findOne,
  findOneSucceeded,
  update,
  updateSucceeded,
}
