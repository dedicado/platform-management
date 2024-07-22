import { createAction, props } from '@ngrx/store'
import { Subscription } from '../../interfaces/subscription.interface'

const findMany = createAction('[SUBSCRIPTION] Find Many')
const findManySucceeded = createAction(
  '[SUBSCRIPTION] Find Many Succeeded',
  props<{ payload: Subscription[] }>(),
)

const findOne = createAction('[SUBSCRIPTION] Find One', props<{ id: string }>())
const findOneSucceeded = createAction(
  '[SUBSCRIPTION] Find One Succeeded',
  props<{ payload: Subscription }>(),
)

export const subscriptionsActions = {
  findMany,
  findManySucceeded,
  findOne,
  findOneSucceeded,
}
