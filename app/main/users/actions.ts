'use server'

import { nextAuthOptions } from '@/libraries/next-auth'
import { UserType } from '@/types/user'
import { getServerSession } from 'next-auth'

export const getUserByPhone = async (
  phone: string,
): Promise<UserType | any> => {
  const session = await getServerSession(nextAuthOptions)
  try {
    if (!session) return null
    const data = await fetch(
      `${process.env.USER_API_URL}/users/phone/${phone}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session?.user?.authorization}`,
        },
      },
    )
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}

export const getUserByDocument = async (
  document: string,
): Promise<UserType | any> => {
  const session = await getServerSession(nextAuthOptions)
  try {
    if (!session) return null
    const data = await fetch(
      `${process.env.USER_API_URL}/users/document/${document}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session?.user?.authorization}`,
        },
      },
    )
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}
