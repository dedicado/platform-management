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
import { MemberType, OrganizationType } from '@/types/organization'
import {
  emailInviteMemberToOrganization,
  emailWelcomeToThePlatform,
  smsInviteMemberToOrganization,
} from '@/utils/send-messages/templates'
import {
  MemberCreateValidationType,
  MemberUpdateValidationType,
} from '@/validations/member'
import { revalidatePath, revalidateTag } from 'next/cache'
import { getOrganizationByDocument } from '../actions'
import { sendEmail, sendSms } from '@/utils/send-messages'
import { UserType } from '@/types/user'

export const createMember = async (
  inputs: MemberCreateValidationType,
): Promise<any> => {
  const randomCode = Math.random().toString(32).substr(2, 16)

  const organization: OrganizationType | any = await getOrganizationByDocument(
    inputs?.organizationDocument,
  )

  const user: UserType | any = await getUserByPhone(inputs?.phone)
  if (user?.response?.error)
    await userRepositoryCreate({
      profile: 'member',
      name: inputs?.phone,
      phone: inputs?.phone,
      email: organization?.email,
    }).then(async () => {
      const message = emailWelcomeToThePlatform({
        name: inputs?.phone,
        password: randomCode,
        phone: inputs?.phone,
      })
      await sendEmail({
        body: message,
        subject: 'boas vindas a melhor plataforma de serviços',
        to: organization?.email,
      })
      revalidateTag('users')
      revalidatePath('/')
    })

  return await memberRepositoryCreate(inputs).then(async (data: any) => {
    const message = emailInviteMemberToOrganization({
      member: user?.name,
      organization: organization?.name,
      role: inputs?.role,
    })
    await sendEmail({
      body: message,
      subject: 'você foi convidado por uma organização na dedicado',
      to: user?.email,
    })
    const content = smsInviteMemberToOrganization({
      member: user?.name,
      organization: organization?.name,
      role: inputs?.role,
    })
    sendSms({ content: content, to: inputs?.phone })
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
