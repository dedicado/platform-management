'use server'

import { nextAuthOptions } from '@/libraries/next-auth'
import { getServerSession } from 'next-auth'
import { API_SPEND_REPOSITORY } from '..'
import {
  CreateApiSpendValidation,
  CreateApiSpendValidationType,
} from '@/validations/api-spend'

export const apiSpendRepositoryCreate = async (
  inputs: CreateApiSpendValidationType,
): Promise<any> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''
  const authorizationKey = session?.user?.authorizationKey ?? ''

  try {
    if (await CreateApiSpendValidation.parseAsync(inputs)) {
      const data = await fetch(`${API_SPEND_REPOSITORY}`, {
        method: 'POST',
        body: JSON.stringify(inputs),
        headers: {
          'Content-Type': 'application/json',
          authorizationKey: authorizationKey,
        },
      })
      return data && (await data.json())
    }
  } catch (error: any) {
    return error?.message || error
  }
}
