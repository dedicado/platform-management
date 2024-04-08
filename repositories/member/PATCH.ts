'use server'

import { nextAuthOptions } from '@/libraries/next-auth'
import { getServerSession } from 'next-auth'
import { MEMBER_REPOSITORY } from '..'
import {
  MemberUpdateValidation,
  MemberUpdateValidationType,
} from '@/validations/member'

export const memberRepositoryUpdate = async (
  id: string,
  inputs: MemberUpdateValidationType,
): Promise<any> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''

  try {
    if (await MemberUpdateValidation.parseAsync(inputs)) {
      const data = await fetch(`${MEMBER_REPOSITORY}/${id}`, {
        method: 'PATCH',
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
