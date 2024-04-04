'use client'

import PageDisplay from '@/components/PageDisplay'
import { Suspense } from 'react'
import OrganizationView from './views/OrganizationView'
import { useOrganization } from './context'
import OrganizationMenu from './components/OrganizationMenu'
import { OrganizationType } from '@/types/organization'

const OrganizationPage = () => {
  const { organization }: OrganizationType | any = useOrganization()

  return (
    <PageDisplay
      title={`espaço dedicado da organização ${organization?.name ?? ''}`}
      subtitle={`a melhor plataforma de serviços`}
    >
      {organization ? (
        <div className="w-full">
          <Suspense>
            <OrganizationMenu />
            <OrganizationView />
          </Suspense>
        </div>
      ) : null}
    </PageDisplay>
  )
}
export default OrganizationPage
