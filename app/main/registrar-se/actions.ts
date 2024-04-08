'use server'

import { userRepositoryCreate } from '@/repositories/user/POST'
import {
  RegisterValidation,
  RegisterValidationType,
} from '@/validations/register'
import { revalidatePath, revalidateTag } from 'next/cache'

export const registerUser = async (
  inputs: RegisterValidationType,
): Promise<any> => {
  try {
    if (await RegisterValidation.parseAsync(inputs)) {
      return await userRepositoryCreate({ ...inputs, profile: 'guest' }).then(
        async () => {
          revalidateTag('users')
          revalidatePath('/')
        },
      )
    }
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}
