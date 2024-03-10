'use client'

import PageDisplay from '@/components/PageDisplay'
import { memo } from 'react'
import OrganizationView from './views/OrganizationView'
import { useOrganization } from './context'
import NotFoundPage from '@/app/not-found'

const OrganizationPage = async () => {
  const { organization }: any = useOrganization()

  return !organization.status ? (
    <PageDisplay
      title={`espaço dedicado da organização ${organization?.name}`}
      subtitle={`a melhor plataforma de serviços`}
    >
      <OrganizationView />
    </PageDisplay>
  ) : (
    <NotFoundPage />
  )
}
export default memo(OrganizationPage)
