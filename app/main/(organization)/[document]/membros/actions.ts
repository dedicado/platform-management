'use server'

import {
  memberRepositoryFindById,
  memberRepositoryFindByPhone,
  memberRepositoryFindMany,
} from '@/repositories/member/GET'
import { memberRepositoryUpdate } from '@/repositories/member/PATCH'
import { memberRepositoryCreate } from '@/repositories/member/POST'
import { MemberType } from '@/types/organization'
import {
  MemberCreateValidationType,
  MemberUpdateValidationType,
} from '@/validations/member'
import { revalidatePath, revalidateTag } from 'next/cache'

export const createMember = async (
  inputs: MemberCreateValidationType,
): Promise<any> => {
  return await memberRepositoryCreate(inputs).then((data: any) => {
    revalidateTag('user')
    revalidateTag('member')
    revalidateTag('organization')
    revalidatePath(`/${inputs?.organizationDocument}/membros`)
    return data
  })
}

export const getMemberById = async (id: string): Promise<MemberType | any> => {
  return await memberRepositoryFindById(id)
}

export const getMemberByUserPhone = async (
  phone: string,
): Promise<MemberType[] | any> => {
  return await memberRepositoryFindByPhone(phone)
}

export const getMembers = async (): Promise<MemberType[] | any> => {
  return await memberRepositoryFindMany()
}

export const updateMember = async (
  id: string,
  inputs: MemberUpdateValidationType,
): Promise<any> => {
  return await memberRepositoryUpdate(id, inputs).then((data: any) => {
    revalidateTag('user')
    revalidateTag('member')
    revalidateTag('organization')
    revalidatePath(`/${inputs?.organizationDocument}/membros`)
    return data
  })
}
