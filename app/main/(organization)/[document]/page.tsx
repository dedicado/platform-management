'use client'

import PageDisplay from '@/components/PageDisplay'
import { Suspense } from 'react'
import OrganizationView from './views/OrganizationView'
import OrganizationMenu from './components/OrganizationMenu'
import { OrganizationType } from '@/types/organization'
import { RoleProvider } from '@/contexts/RoleContext'
import { useOrganization } from '@/contexts/OrganizationContext'

const OrganizationPage = () => {
  const { organization }: OrganizationType | any = useOrganization()

  return (
    <PageDisplay
      title={`espaço dedicado da organização ${organization?.name ?? ''}`}
      subtitle={`a melhor plataforma de serviços`}
    >
      {organization ? (
        <RoleProvider document={organization?.document}>
          <div className="w-full">
            <Suspense>
              <OrganizationMenu />
              <OrganizationView />
            </Suspense>
          </div>
        </RoleProvider>
      ) : null}
    </PageDisplay>
  )
}
export default OrganizationPage
