'use server'

import { nextAuthOptions } from '@/libraries/next-auth'
import {
  memberRepositoryFindById,
  memberRepositoryFindByPhone,
  memberRepositoryFindMany,
} from '@/repositories/member/GET'
import { MemberType } from '@/types/organization'
import { getServerSession } from 'next-auth'

export const getMemberById = async (id: string): Promise<MemberType | any> => {
  return await memberRepositoryFindById(id)
}

export const getMemberByUserPhone = async (
  phone: string,
): Promise<MemberType[] | any> => {
  return await memberRepositoryFindByPhone(phone)
}

export const getMembers = async (): Promise<MemberType[] | any> => {
  const session = await getServerSession(nextAuthOptions)

  return await memberRepositoryFindMany()
}
