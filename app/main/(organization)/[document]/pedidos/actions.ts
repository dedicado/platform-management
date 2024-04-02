'use server'

import { orderLocationRepositoryCreate } from '@/repositories/order-location/POST'
import {
  orderRepositoryFindByCode,
  orderRepositoryFindByCustomer,
  orderRepositoryFindById,
  orderRepositoryFindByMember,
  orderRepositoryFindByOrganization,
  orderRepositoryFindMany,
} from '@/repositories/order/GET'
import { orderRepositoryUpdate } from '@/repositories/order/PATCH'
import { orderRepositoryCreate } from '@/repositories/order/POST'
import { organizationRepositoryFindByDocument } from '@/repositories/organization/GET'
import { userRepositoryFindByDocument } from '@/repositories/user/GET'
import { OrderType } from '@/types/order'
import { OrganizationType } from '@/types/organization'
import { UserType } from '@/types/user'
import { getAddressByZipCode } from '@/utils/handle-address'
import { AddressTypeByZipCode } from '@/utils/handle-address/types'
import {
  OrderCreateValidation,
  OrderCreateValidationType,
  OrderLocationValidationType,
  OrderUpdateValidationType,
} from '@/validations/order'
import { revalidatePath, revalidateTag } from 'next/cache'

export const createOrder = async (
  inputs: OrderCreateValidationType,
): Promise<any> => {
  try {
    if (await OrderCreateValidation.parseAsync(inputs)) {
      const organization: OrganizationType | any =
        await organizationRepositoryFindByDocument(inputs?.organization)
      if (organization?.response?.error) return organization

      const organizationAddress: AddressTypeByZipCode | any =
        await getAddressByZipCode(organization?.zipCode)

      const customer: UserType | any = await userRepositoryFindByDocument(
        inputs?.customer,
      )
      if (customer?.response?.error) return customer

      const customerAddress: AddressTypeByZipCode | any =
        await getAddressByZipCode(customer?.zipCode)

      return await orderRepositoryCreate({
        ...inputs,
        originZipCode:
          organization?.zipCode || organizationAddress?.cep || null,
        originLatitude: organization?.latitude || customerAddress?.lat || null,
        originLongitude:
          organization?.longitude || organizationAddress?.lng || null,
        originComplement:
          organization?.complement || organizationAddress?.district || null,
        destinationZipCode: customer?.zipCode || customerAddress?.cep || null,
        destinationLatitude: customer?.latitude || customerAddress?.lat || null,
        destinationLongitude:
          customer?.longitude || customerAddress?.lng || null,
        destinationComplement:
          customer?.complement || customerAddress?.district || null,
      }).then((data: any) => {
        revalidateTag('orders')
        revalidatePath(`/${inputs?.organization}/pedidos`)
        return data
      })
    }
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}

export const getOrderByCode = async (
  code: string,
): Promise<OrderType | any> => {
  return await orderRepositoryFindByCode(code)
}

export const getOrderById = async (id: string): Promise<OrderType | any> => {
  return await orderRepositoryFindById(id)
}

export const getOrders = async (): Promise<OrderType[] | any> => {
  return await orderRepositoryFindMany()
}

export const getOrdersByCustomer = async (
  customer: string,
): Promise<OrderType[] | any> => {
  return await orderRepositoryFindByCustomer(customer)
}

export const getOrdersByOrganization = async (
  document: string,
): Promise<OrderType[] | any> => {
  return await orderRepositoryFindByOrganization(document)
}

export const getOrdersByMember = async (
  phone: string,
): Promise<OrderType[] | any> => {
  return await orderRepositoryFindByMember(phone)
}

export const registerOrderLocation = async (
  inputs: OrderLocationValidationType,
): Promise<any> => {
  return await orderLocationRepositoryCreate(inputs).then((data: any) => {
    revalidateTag('order')
    
    return data
  })
}

export const updateOrder = async (
  id: string,
  inputs: OrderUpdateValidationType,
): Promise<any> => {
  return await orderRepositoryUpdate(id, inputs).then((data: any) => {
    revalidateTag('order')
    revalidatePath('/')

    return data
  })
}
