import { createAction, props } from '@ngrx/store'
import { User } from '../../interfaces/user.interface'

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

export const usersActions = {
  findMany,
  findManySucceeded,
  findMe,
  findMeSucceeded,
  findOne,
  findOneSucceeded,
}
