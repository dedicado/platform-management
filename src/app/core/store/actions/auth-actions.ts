import { createAction, props } from '@ngrx/store'
import { AuthCode, AuthLogin, AuthPayload } from '../../interfaces/auth.interface'

const validation = createAction('[AUTH] Validation', props<{ inputs: AuthCode }>())
const validationSucceeded = createAction(
  '[AUTH] Validation Succeeded',
  props<{ payload: AuthCode }>(),
)

const authentication = createAction(
  '[AUTH] Authentication',
  props<{ inputs: AuthLogin }>(),
)
const authenticationSucceeded = createAction(
  '[AUTH] Authentication Succeeded',
  props<{ payload: AuthPayload }>(),
)

export const authActions = {
  validation,
  validationSucceeded,
  authentication,
  authenticationSucceeded,
}
