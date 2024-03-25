'use server'

import { nextAuthOptions } from '@/libraries/next-auth'
import { organizationRepositoryCreateForUser } from '@/repositories/organization/POST'
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
  const userPhone = session?.user?.phone ?? ''

  try {
    if (await CreateOrganizationValidation.parseAsync(inputs)) {
      revalidatePath('/')
      return await organizationRepositoryCreateForUser(userPhone, inputs)
    }
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}
