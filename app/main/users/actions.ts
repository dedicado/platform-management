'use server'

import {
  userRepositoryFindByDocument,
  userRepositoryFindById,
  userRepositoryFindByPhone,
} from '@/repositories/user/GET'
import { UserType } from '@/types/user'

export const getUserByDocument = async (
  document: string,
): Promise<UserType | any> => {
  return await userRepositoryFindByDocument(document)
}

export const getUserById = async (id: string): Promise<UserType | any> => {
  return await userRepositoryFindById(id)
}

export const getUserByPhone = async (
  phone: string,
): Promise<UserType | any> => {
  return await userRepositoryFindByPhone(phone)
}
