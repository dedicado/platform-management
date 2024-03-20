'use server'

import { nextAuthOptions } from '@/libraries/next-auth'
import { OrganizationType } from '@/types/organization'
import {
  CreateOrganizationValidationType,
  CreateOrganizationValidation,
} from '@/validations/organization'
import { getServerSession } from 'next-auth'
import { revalidatePath } from 'next/cache'

export const createOrganizationForUser = async (
  inputs: CreateOrganizationValidationType,
): Promise<OrganizationType | any> => {
  const session = await getServerSession(nextAuthOptions)
  try {
    if (await CreateOrganizationValidation.parseAsync(inputs)) {
      const data = await fetch(
        `${process.env.ORGANIZATION_API_URL}/organizations/phone/${session?.user
          ?.phone!}`,
        {
          method: 'POST',
          body: JSON.stringify(inputs),
          headers: {
            'Content-Type': 'application/json',
            authorizationKey: session?.user?.authorizationKey!,
          },
        },
      )
      revalidatePath('/')
      return data && (await data.json())
    }
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}
