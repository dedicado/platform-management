'use server'

import { nextAuthOptions } from '@/libraries/next-auth'
import { getServerSession } from 'next-auth'
import { MEMBER_REPOSITORY } from '..'
import {
  MemberCreateValidation,
  MemberCreateValidationType,
} from '@/validations/member'

export const memberRepositoryCreate = async (
  inputs: MemberCreateValidationType,
): Promise<any> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''
  const authorizationKey = session?.user?.authorizationKey ?? ''

  try {
    if (await MemberCreateValidation.parseAsync(inputs)) {
      const data = await fetch(`${MEMBER_REPOSITORY}`, {
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
