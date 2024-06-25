import { createAction, props } from '@ngrx/store'
import { Account } from '../../interfaces/account.interface'

const create = createAction('[ACCOUNT] Create Account', props<{ data: Account }>())
const createSucceeded = createAction('[ACCOUNT] Create Account Succeeded')

const findAll = createAction('[ACCOUNTS] Find All Accounts')
const findAllSucceeded = createAction(
  '[ACCOUNTS] Find All Accounts Succeeded',
  props<{ data: Account[] }>(),
)

const findOne = createAction(
  '[ACCOUNT] Find One Account',
  props<{ id: string }>(),
)
const findOneSucceeded = createAction(
  '[ACCOUNT] Find One Account Succeeded',
  props<{ data: Account }>(),
)

const update = createAction('[ACCOUNT] Update Account')
const updateSucceeded = createAction(
  '[ACCOUNT] Update Account Succeeded',
  props<{ data: Account }>(),
)

const remove = createAction('[ACCOUNT] Remove Account')
const removeSucceeded = createAction(
  '[ACCOUNT] Remove Account Succeeded',
  props<{ data: Account }>(),
)

export const accountsActions = {
  create,
  createSucceeded,
  findAll,
  findAllSucceeded,
  findOne,
  findOneSucceeded,
  update,
  updateSucceeded,
  remove,
  removeSucceeded,
}
