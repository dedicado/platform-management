'use server'

import { getUserByPhone } from '@/app/main/users/actions'
import {
  memberRepositoryFindById,
  memberRepositoryFindByPhone,
  memberRepositoryFindMany,
} from '@/repositories/member/GET'
import { memberRepositoryUpdate } from '@/repositories/member/PATCH'
import { memberRepositoryCreate } from '@/repositories/member/POST'
import { userRepositoryCreate } from '@/repositories/user/POST'
import { MemberType } from '@/types/organization'
import {
  MemberCreateValidationType,
  MemberUpdateValidationType,
} from '@/validations/member'
import { revalidatePath, revalidateTag } from 'next/cache'

export const createMember = async (
  inputs: MemberCreateValidationType,
): Promise<any> => {
  const user = await getUserByPhone(inputs?.phone)
  if (user?.response?.error)
    await userRepositoryCreate({
      profile: 'member',
      name: inputs?.phone,
      phone: inputs?.phone,
      email: inputs?.phone + '@dedicado.digital',
    }).then(() => revalidateTag('users'))

  return await memberRepositoryCreate(inputs).then((data: any) => {
    revalidateTag('members')
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
    revalidateTag('member')
    revalidatePath(`/${inputs?.organizationDocument}/membros`)
    return data
  })
}
