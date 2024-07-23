import { createAction, props } from '@ngrx/store'
import {
  Subscription,
  UpdateSubscription,
} from '../../interfaces/subscription.interface'
import { RemoveData } from '../../interfaces/core.interface'

const findByCode = createAction(
  '[SUBSCRIPTION] Find By Code',
  props<{ code: string }>(),
)
const findByCodeSucceeded = createAction(
  '[SUBSCRIPTION] Find By Code Succeeded',
  props<{ payload: Subscription }>(),
)

const findByOrganization = createAction(
  '[SUBSCRIPTION] Find By Organization',
  props<{ document: string }>(),
)
const findByOrganizationSucceeded = createAction(
  '[SUBSCRIPTION] Find By Organization Succeeded',
  props<{ payload: Subscription }>(),
)

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

const remove = createAction(
  '[SUBSCRIPTION] Remove',
  props<{ id: string; removeData: RemoveData }>(),
)
const removeSucceeded = createAction(
  '[SUBSCRIPTION] Remove Succeeded',
  props<{ message: string }>(),
)

const update = createAction(
  '[SUBSCRIPTION] Update',
  props<{ id: string; updateSubscription: UpdateSubscription }>(),
)
const updateSucceeded = createAction(
  '[SUBSCRIPTION] Update Succeeded',
  props<{ message: string }>(),
)

export const subscriptionsActions = {
  findByCode,
  findByCodeSucceeded,
  findByOrganization,
  findByOrganizationSucceeded,
  findMany,
  findManySucceeded,
  findOne,
  findOneSucceeded,
  remove,
  removeSucceeded,
  update,
  updateSucceeded,
}
