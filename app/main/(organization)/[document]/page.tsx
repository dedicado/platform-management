'use client'

import PageDisplay from '@/components/PageDisplay'
import { memo, Suspense } from 'react'
import OrganizationView from './views/OrganizationView'
import { useOrganization } from './context'
import OrganizationMenu from './views/OrganizationMenu'

const OrganizationPage = async () => {
  const { organization }: any = useOrganization()

  return (
    <PageDisplay
      title={`espaço dedicado da organização ${organization?.name ?? ''}`}
      subtitle={`a melhor plataforma de serviços`}
    >
      {organization ? (
        <Suspense>
          <OrganizationMenu />
          <OrganizationView />
        </Suspense>
      ) : null}
    </PageDisplay>
  )
}
export default memo(OrganizationPage)
