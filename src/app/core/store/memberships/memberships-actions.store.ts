import { createAction, props } from '@ngrx/store'
import { Membership } from '../../interfaces/membership.interface'

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

export const membershipsActions = {
  findMany,
  findManySucceeded,
  findOne,
  findOneSucceeded,
}
