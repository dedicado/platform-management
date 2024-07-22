import { createAction, props } from '@ngrx/store'
import { Organization } from '../../interfaces/organization.interface'

const findByDocument = createAction(
  '[ORGANIZATION] Find By Document',
  props<{ document: string }>(),
)
const findByDocumentSucceeded = createAction(
  '[ORGANIZATION] Find By Document Succeeded',
  props<{ payload: Organization }>(),
)

const findMany = createAction('[ORGANIZATION] Find Many')
const findManySucceeded = createAction(
  '[ORGANIZATION] Find Many Succeeded',
  props<{ payload: Organization[] }>(),
)

const findOne = createAction('[ORGANIZATION] Find One', props<{ id: string }>())
const findOneSucceeded = createAction(
  '[ORGANIZATION] Find One Succeeded',
  props<{ payload: Organization }>(),
)

export const organizationsActions = {
  findByDocument,
  findByDocumentSucceeded,
  findMany,
  findManySucceeded,
  findOne,
  findOneSucceeded,
}
