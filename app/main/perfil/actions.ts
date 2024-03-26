'use server'

import { nextAuthOptions } from '@/libraries/next-auth'
import { userRepositoryFindById } from '@/repositories/user/GET'
import { userRepositoryUpdate } from '@/repositories/user/PATCH'
import { UserType } from '@/types/user'
import {
  ProfileLocationUpdateValidationType,
  ProfilePasswordUpdateValidationType,
  ProfileUpdateValidationType,
} from '@/validations/profile'
import { getServerSession } from 'next-auth'
import { revalidatePath, revalidateTag } from 'next/cache'

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

  if (!session) return null

  return await userRepositoryUpdate(userId, inputs).then(() => {
    revalidateTag('user')
    revalidatePath('/perfil')
  })
}

export const updateProfilePassword = async (
  inputs: ProfilePasswordUpdateValidationType,
): Promise<any> => {
  const session = await getServerSession(nextAuthOptions)
  const userId = session?.user?.id ?? ''

  if (!session) return null

  const { newPassword } = inputs
  return await userRepositoryUpdate(userId, { password: newPassword })
}

export const updateProfileAvailable = async (
  available: boolean,
): Promise<any> => {
  const session = await getServerSession(nextAuthOptions)
  const userId = session?.user?.id ?? ''

  if (!session) return null

  return await userRepositoryUpdate(userId, { available: available }).then(
    () => {
      revalidateTag('user')
      revalidatePath('/', 'layout')
    },
  )
}

export const updateProfileLocation = async (
  inputs: ProfileLocationUpdateValidationType,
): Promise<any> => {
  const session = await getServerSession(nextAuthOptions)
  const userId = session?.user?.id ?? ''

  if (!session) return null

  return await userRepositoryUpdate(userId, inputs).then(() => {
    revalidateTag('user')
    revalidatePath('/', 'layout')
  })
}
