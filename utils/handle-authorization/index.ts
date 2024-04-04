'use server'

import { getMemberByUserPhone } from '@/app/main/(organization)/[document]/membros/actions'
import { nextAuthOptions } from '@/libraries/next-auth'
import { MemberType, OrganizationType } from '@/types/organization'
import { getServerSession } from 'next-auth'

export const memberAuthorized = async (
  organizationDocument: string,
  role?: string,
): Promise<{ authorized: boolean; role?: string } | any> => {
  const session = await getServerSession(nextAuthOptions)
  const userPhone: string = session?.user?.phone!

  try {
    const member = await getMemberByUserPhone(userPhone)
    const organizations: OrganizationType[] = member?.map(
      (member: MemberType) =>
        role
          ? member?.active && member?.role == role && member.organization
          : member?.active && member.organization,
    )

    const organization = organizations.map(
      (organization: OrganizationType) =>
        organizationDocument == organization?.document,
    )

    return organization
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}
