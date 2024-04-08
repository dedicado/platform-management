'use server'

import { nextAuthOptions } from '@/libraries/next-auth'
import {
  UserCreateValidation,
  UserCreateValidationType,
} from '@/validations/user'
import { getServerSession } from 'next-auth'
import { USER_REPOSITORY } from '..'

export const userRepositoryCreate = async (
  inputs: UserCreateValidationType,
): Promise<any> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''

  try {
    if (await UserCreateValidation.parseAsync(inputs)) {
      const data = await fetch(`${USER_REPOSITORY}`, {
        method: 'POST',
        body: JSON.stringify(inputs),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authorization}`,
        },
      })
      return data && (await data.json())
    }
  } catch (error: any) {
    return error?.message || error
  }
}
