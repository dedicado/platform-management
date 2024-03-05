'use server'

import { nextAuthOptions } from '@/libraries/next-auth'
import { UserType } from '@/types/user'
import {
  ProfilePasswordUpdateValidation,
  ProfilePasswordUpdateValidationType,
  ProfileUpdateValidation,
  ProfileUpdateValidationType,
} from '@/validations/profile'
import { getServerSession } from 'next-auth'
import { hashSync } from 'bcryptjs'
import { revalidatePath } from 'next/cache'

export const getProfile = async (): Promise<UserType | any> => {
  const session = await getServerSession(nextAuthOptions)
  try {
    if (!session) return null
    const data = await fetch(
      `${process.env.USER_API_URL}/users/${session?.user?.id}`,
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

export const updateProfile = async (
  inputs: ProfileUpdateValidationType,
): Promise<any> => {
  const session = await getServerSession(nextAuthOptions)
  try {
    if (!session) return null
    if (await ProfileUpdateValidation.parseAsync(inputs)) {
      const data = await fetch(
        `${process.env.USER_API_URL}/users/${session?.user?.id}`,
        {
          method: 'PATCH',
          body: JSON.stringify(inputs),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session?.user?.authorization}`,
          },
        },
      )
      revalidatePath('/perfil')
      return data && (await data.json())
    }
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}

export const updateProfilePassword = async (
  inputs: ProfilePasswordUpdateValidationType,
): Promise<any> => {
  const session = await getServerSession(nextAuthOptions)
  try {
    if (!session) return null
    if (await ProfilePasswordUpdateValidation.parseAsync(inputs)) {
      const { newPassword } = inputs
      const password = hashSync(newPassword, 10)
      const data = await fetch(
        `${process.env.USER_API_URL}/users/${session?.user?.id}`,
        {
          method: 'PATCH',
          body: JSON.stringify({ password }),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session?.user?.authorization}`,
          },
        },
      )
      return data && (await data.json())
    }
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}
