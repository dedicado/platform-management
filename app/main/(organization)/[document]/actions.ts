'use server'

import {
  organizationRepositoryFindByDocument,
  organizationRepositoryFindMany,
} from '@/repositories/organization/GET'
import { OrganizationType } from '@/types/organization'

export const getOrganizationByDocument = async (
  document: string,
): Promise<OrganizationType | any> => {
  return organizationRepositoryFindByDocument(document)
}

export const getOrganizations = async (): Promise<OrganizationType[] | any> => {
  return await organizationRepositoryFindMany()
}
