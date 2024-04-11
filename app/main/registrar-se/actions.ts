'use server'

import { userRepositoryCreate } from '@/repositories/user/POST'
import { RegisterValidationType } from '@/validations/register'
import { revalidatePath, revalidateTag } from 'next/cache'

export const registerUser = async (
  inputs: RegisterValidationType,
): Promise<any> => {
  const phone: string = inputs?.phoneCountry + inputs?.phone
  return await userRepositoryCreate({
    name: inputs?.name,
    email: inputs?.email,
    phone: phone,
    password: inputs?.password,
    profile: 'guest',
  }).then(async () => {
    revalidateTag('users')
    revalidatePath('/')
  })
}
