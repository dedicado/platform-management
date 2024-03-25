'use server'

import { nextAuthOptions } from '@/libraries/next-auth'
import { userRepositoryFindById } from '@/repositories/user/GET'
import { userRepositoryUpdate } from '@/repositories/user/PATCH'
import { UserType } from '@/types/user'
import {
  ProfileLocationUpdateValidation,
  ProfileLocationUpdateValidationType,
  ProfilePasswordUpdateValidation,
  ProfilePasswordUpdateValidationType,
  ProfileUpdateValidation,
  ProfileUpdateValidationType,
} from '@/validations/profile'
import { getServerSession } from 'next-auth'
import { revalidatePath } from 'next/cache'

export const getProfile = async (): Promise<UserType | any> => {
  const session = await getServerSession(nextAuthOptions)
  const userId = session?.user?.id ?? ''

  if (!session) return null
  return await userRepositoryFindById(userId)
}

export const updateProfile = async (
  inputs: ProfileUpdateValidationType,
): Promise<any> => {
  const session = await getServerSession(nextAuthOptions)
  const userId = session?.user?.id ?? ''

  try {
    if (!session) return null
    if (await ProfileUpdateValidation.parseAsync(inputs)) {
      revalidatePath('/')
      return await userRepositoryUpdate(userId, inputs)
    }
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}

export const updateProfilePassword = async (
  inputs: ProfilePasswordUpdateValidationType,
): Promise<any> => {
  const session = await getServerSession(nextAuthOptions)
  const userId = session?.user?.id ?? ''

  try {
    if (!session) return null
    if (await ProfilePasswordUpdateValidation.parseAsync(inputs)) {
      const { newPassword } = inputs
      return await userRepositoryUpdate(userId, { password: newPassword })
    }
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}

export const updateProfileAvailable = async (
  available: boolean,
): Promise<any> => {
  const session = await getServerSession(nextAuthOptions)
  const userId = session?.user?.id ?? ''

  if (!session) return null
  revalidatePath('/')
  return await userRepositoryUpdate(userId, { available: available })
}

export const updateProfileLocation = async (
  inputs: ProfileLocationUpdateValidationType,
): Promise<any> => {
  const session = await getServerSession(nextAuthOptions)
  const userId = session?.user?.id ?? ''

  try {
    if (!session) return null
    if (await ProfileLocationUpdateValidation.parseAsync(inputs)) {
      revalidatePath('/')
      return await userRepositoryUpdate(userId, inputs)
    }
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}
