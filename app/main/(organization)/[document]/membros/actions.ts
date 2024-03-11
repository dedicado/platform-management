'use server'

import { nextAuthOptions } from '@/libraries/next-auth'
import { MemberType } from '@/types/organization'
import { getServerSession } from 'next-auth'

export const getMemberByUserPhone = async (): Promise<
  MemberType[] | any
> => {
  const session = await getServerSession(nextAuthOptions)
  try {
    const data = await fetch(
      `${process.env.ORGANIZATION_API_URL}/members/phone/${session?.user
        ?.phone!}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorizationKey: session?.user?.authorizationKey!,
        },
      },
    )
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}
