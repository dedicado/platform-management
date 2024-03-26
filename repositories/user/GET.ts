'use server'

import { nextAuthOptions } from '@/libraries/next-auth'
import { getServerSession } from 'next-auth'
import { UserType } from '@/types/user'
import { USER_REPOSITORY } from '..'

export const userRepositoryFindMany = async (): Promise<UserType[] | any> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''
  const authorizationKey = session?.user?.authorizationKey ?? ''

  try {
    const data = await fetch(`${USER_REPOSITORY}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authorization}`,
      },
      next: { tags: ['users'], revalidate: 3600 },
    })
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || error
  }
}

export const userRepositoryFindByDocument = async (
  document: string,
): Promise<UserType | any> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''
  const authorizationKey = session?.user?.authorizationKey ?? ''

  try {
    const data = await fetch(`${USER_REPOSITORY}/document/${document}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authorization}`,
      },
      next: { tags: ['user', 'userDocument'], revalidate: 3600 },
    })
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || error
  }
}

export const userRepositoryFindByEmail = async (
  email: string,
): Promise<UserType | any> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''
  const authorizationKey = session?.user?.authorizationKey ?? ''

  try {
    const data = await fetch(`${USER_REPOSITORY}/email/${email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authorization}`,
      },
      next: { tags: ['user', 'userEmail'], revalidate: 3600 },
    })
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || error
  }
}

export const userRepositoryFindById = async (
  id: string,
): Promise<UserType | any> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''
  const authorizationKey = session?.user?.authorizationKey ?? ''

  try {
    const data = await fetch(`${USER_REPOSITORY}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authorization}`,
      },
      next: { tags: ['user', 'userId'], revalidate: 3600 },
    })
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || error
  }
}

export const userRepositoryFindByPhone = async (
  phone: string,
): Promise<UserType | any> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''
  const authorizationKey = session?.user?.authorizationKey ?? ''

  try {
    const data = await fetch(`${USER_REPOSITORY}/phone/${phone}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authorization}`,
      },
      next: { tags: ['user', 'userPhone'], revalidate: 3600 },
    })
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || error
  }
}
