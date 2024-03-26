'use server'

import { nextAuthOptions } from '@/libraries/next-auth'
import { getServerSession } from 'next-auth'
import { ORDER_REPOSITORY } from '..'
import { OrderType } from '@/types/order'

export const orderRepositoryFindMany = async (): Promise<OrderType[] | any> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''
  const authorizationKey = session?.user?.authorizationKey ?? ''

  try {
    const data = await fetch(`${ORDER_REPOSITORY}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorizationKey: authorizationKey,
      },
      next: {
        tags: ['orders'],
        revalidate: 120,
      },
    })
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || error
  }
}

export const orderRepositoryFindByCode = async (
  code: string,
): Promise<OrderType | any> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''
  const authorizationKey = session?.user?.authorizationKey ?? ''

  try {
    const data = await fetch(`${ORDER_REPOSITORY}/code/${code}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorizationKey: authorizationKey,
      },
      next: {
        tags: ['order', 'orderCode'],
        revalidate: 120,
      },
    })
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || error
  }
}

export const orderRepositoryFindByCustomer = async (
  customer: string,
): Promise<OrderType[] | any> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''
  const authorizationKey = session?.user?.authorizationKey ?? ''

  try {
    const data = await fetch(`${ORDER_REPOSITORY}/customer/${customer}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorizationKey: authorizationKey,
      },
      next: {
        tags: ['order', 'orderCustomer'],
        revalidate: 120,
      },
    })
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || error
  }
}

export const orderRepositoryFindByMember = async (
  member: string,
): Promise<OrderType[] | any> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''
  const authorizationKey = session?.user?.authorizationKey ?? ''

  try {
    const data = await fetch(`${ORDER_REPOSITORY}/member/${member}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorizationKey: authorizationKey,
      },
      next: {
        tags: ['order', 'orderMember'],
        revalidate: 120,
      },
    })
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || error
  }
}

export const orderRepositoryFindByOrganization = async (
  organization: string,
): Promise<OrderType[] | any> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''
  const authorizationKey = session?.user?.authorizationKey ?? ''

  try {
    const data = await fetch(
      `${ORDER_REPOSITORY}/organization/${organization}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorizationKey: authorizationKey,
        },
        next: {
          tags: ['order', 'orderOrganization'],
          revalidate: 120,
        },
      },
    )
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || error
  }
}

export const orderRepositoryFindById = async (
  id: string,
): Promise<OrderType | any> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''
  const authorizationKey = session?.user?.authorizationKey ?? ''

  try {
    const data = await fetch(`${ORDER_REPOSITORY}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorizationKey: authorizationKey,
      },
      next: {
        tags: ['order', 'orderId'],
        revalidate: 120,
      },
    })
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || error
  }
}
