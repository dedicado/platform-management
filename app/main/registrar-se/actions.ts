'use server'

import { userRepositoryCreate } from '@/repositories/user/POST'
import {
  RegisterValidation,
  RegisterValidationType,
} from '@/validations/register'
import { revalidateTag } from 'next/cache'

export const registerUser = async (
  inputs: RegisterValidationType,
): Promise<any> => {
  try {
    if (await RegisterValidation.parseAsync(inputs)) {
      return await userRepositoryCreate({ ...inputs, profile: 'guest' }).then(
        () => revalidateTag('users'),
      )
    }
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}
