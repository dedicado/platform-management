'use server'

import { nextAuthOptions } from '@/libraries/next-auth'
import { organizationRepositoryCreateForUser } from '@/repositories/organization/POST'
import { OrganizationType } from '@/types/organization'
import { CreateOrganizationValidationType } from '@/validations/organization'
import { getServerSession } from 'next-auth'
import { revalidatePath } from 'next/cache'

export const createOrganizationForUser = async (
  inputs: CreateOrganizationValidationType,
): Promise<OrganizationType | any> => {
  const session = await getServerSession(nextAuthOptions)
  const userPhone = session?.user?.phone ?? ''

  return await organizationRepositoryCreateForUser(userPhone, inputs).then(() =>
    revalidatePath('/'),
  )
}
