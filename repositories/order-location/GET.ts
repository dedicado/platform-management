'use server'

import { nextAuthOptions } from '@/libraries/next-auth'
import { getServerSession } from 'next-auth'
import { ORDER_LOCATION_REPOSITORY } from '..'
import { OrderLocationType } from '@/types/order'

export const orderLocationRepositoryFindMany = async (): Promise<
  OrderLocationType[] | any
> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''
  const authorizationKey = session?.user?.authorizationKey ?? ''

  try {
    const data = await fetch(`${ORDER_LOCATION_REPOSITORY}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorizationKey: authorizationKey,
      },
      next: {
        tags: ['orderLocations'],
        revalidate: 120,
      },
    })
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || error
  }
}

export const orderLocationRepositoryFindByCode = async (
  code: string,
): Promise<OrderLocationType | any> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''
  const authorizationKey = session?.user?.authorizationKey ?? ''

  try {
    const data = await fetch(`${ORDER_LOCATION_REPOSITORY}/code/${code}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorizationKey: authorizationKey,
      },
      next: {
        tags: ['orderLocation', 'orderLocationCode'],
        revalidate: 120,
      },
    })
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || error
  }
}

export const orderLocationRepositoryFindById = async (
  id: string,
): Promise<OrderLocationType | any> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''
  const authorizationKey = session?.user?.authorizationKey ?? ''

  try {
    const data = await fetch(`${ORDER_LOCATION_REPOSITORY}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorizationKey: authorizationKey,
      },
      next: {
        tags: ['orderLocation', 'orderLocationId'],
        revalidate: 120,
      },
    })
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || error
  }
}
