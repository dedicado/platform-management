'use server'

import { nextAuthOptions } from '@/libraries/next-auth'
import { getServerSession } from 'next-auth'
import { MEMBER_REPOSITORY } from '..'
import { MemberType } from '@/types/organization'

export const memberRepositoryFindMany = async (): Promise<
  MemberType[] | any
> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''
  const authorizationKey = session?.user?.authorizationKey ?? ''

  try {
    const data = await fetch(`${MEMBER_REPOSITORY}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorizationKey: authorizationKey,
      },
      next: {
        tags: ['members'],
        revalidate: 3600,
      },
    })
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || error
  }
}

export const memberRepositoryFindByPhone = async (
  phone: string,
): Promise<MemberType[] | any> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''
  const authorizationKey = session?.user?.authorizationKey ?? ''

  try {
    const data = await fetch(`${MEMBER_REPOSITORY}/phone/${phone}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorizationKey: authorizationKey,
      },
      next: {
        tags: ['member'],
        revalidate: 120,
      },
    })
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || error
  }
}

export const memberRepositoryFindById = async (
  id: string,
): Promise<MemberType | any> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''
  const authorizationKey = session?.user?.authorizationKey ?? ''

  try {
    const data = await fetch(`${MEMBER_REPOSITORY}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorizationKey: authorizationKey,
      },
      next: {
        tags: ['member'],
        revalidate: 120,
      },
    })
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || error
  }
}
