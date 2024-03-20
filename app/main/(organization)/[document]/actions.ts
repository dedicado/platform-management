'use server'

import { nextAuthOptions } from '@/libraries/next-auth'
import { OrganizationType } from '@/types/organization'
import { getServerSession } from 'next-auth'

export const getOrganizationByDocument = async (
  document: string,
): Promise<OrganizationType | any> => {
  const session = await getServerSession(nextAuthOptions)
  try {
    const data = await fetch(
      `${process.env.ORGANIZATION_API_URL}/organizations/document/${document}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorizationKey: session?.user?.authorizationKey!,
        },
      },
    )
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}

export const getOrganizations = async (): Promise<OrganizationType | any> => {
  const session = await getServerSession(nextAuthOptions)
  try {
    const data = await fetch(
      `${process.env.ORGANIZATION_API_URL}/organizations`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorizationKey: session?.user?.authorizationKey!,
        },
      },
    )
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}
