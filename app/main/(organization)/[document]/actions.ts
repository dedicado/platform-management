'use server'

import {
  organizationRepositoryFindByDocument,
  organizationRepositoryFindMany,
  organizationRepositoryVerifyByDocument,
} from '@/repositories/organization/GET'
import { OrganizationType } from '@/types/organization'

export const getOrganizationByDocument = async (
  document: string,
): Promise<OrganizationType | any> => {
  return organizationRepositoryFindByDocument(document)
}

export const getOrganizationVerifyByDocument = async (
  document: string,
): Promise<OrganizationType | any> => {
  return organizationRepositoryVerifyByDocument(document)
}

export const getOrganizations = async (): Promise<OrganizationType[] | any> => {
  return await organizationRepositoryFindMany()
}
