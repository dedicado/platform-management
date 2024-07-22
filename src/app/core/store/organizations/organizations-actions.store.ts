import { createAction, props } from '@ngrx/store'
import {
  CreateOrganization,
  Organization,
  UpdateOrganization,
} from '../../interfaces/organization.interface'
import { RemoveData } from '../../interfaces/core.interface'

const create = createAction(
  '[ORGANIZATION] Create',
  props<{ createOrganization: CreateOrganization }>(),
)
const createSucceeded = createAction(
  '[ORGANIZATION] Create Succeeded',
  props<{ message: string }>(),
)

const createForUser = createAction(
  '[ORGANIZATION] Create For User',
  props<{ phone: string; createOrganization: CreateOrganization }>(),
)
const createForUserSucceeded = createAction(
  '[ORGANIZATION] Create For User Succeeded',
  props<{ message: string }>(),
)

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

const remove = createAction(
  '[ORGANIZATION] Remove',
  props<{ id: string; removeData: RemoveData }>(),
)
const removeSucceeded = createAction(
  '[ORGANIZATION] Remove Succeeded',
  props<{ message: string }>(),
)

const update = createAction(
  '[ORGANIZATION] Update',
  props<{ id: string; updateOrganization: UpdateOrganization }>(),
)
const updateSucceeded = createAction(
  '[ORGANIZATION] Update Succeeded',
  props<{ message: string }>(),
)

export const organizationsActions = {
  create,
  createSucceeded,
  createForUser,
  createForUserSucceeded,
  findByDocument,
  findByDocumentSucceeded,
  findMany,
  findManySucceeded,
  findOne,
  findOneSucceeded,
  update,
  updateSucceeded,
  remove,
  removeSucceeded,
}
