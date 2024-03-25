'use server'

import { nextAuthOptions } from '@/libraries/next-auth'
import { getServerSession } from 'next-auth'
import { ORGANIZATION_REPOSITORY } from '..'
import {
  UpdateOrganizationValidation,
  UpdateOrganizationValidationType,
} from '@/validations/organization'

export const organizationRepositoryUpdate = async (
  id: string,
  inputs: UpdateOrganizationValidationType,
): Promise<any> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''
  const authorizationKey = session?.user?.authorizationKey ?? ''

  try {
    if (await UpdateOrganizationValidation.parseAsync(inputs)) {
      const data = await fetch(`${ORGANIZATION_REPOSITORY}/${id}`, {
        method: 'PATCH',
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
