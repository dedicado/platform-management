'use client'

import PageDisplay from '@/components/PageDisplay'
import { Suspense } from 'react'
import OrganizationMenu from '../components/OrganizationMenu'
import MemberListView from './views/MemberListView'
import { RoleProvider } from '@/contexts/RoleContext'
import { useOrganization } from '@/contexts/OrganizationContext'

const MemberPage = () => {
  const { organization, members }: any = useOrganization()

  return (
    <PageDisplay
      title={`membros da organização ${organization?.name ?? ''}`}
      subtitle={'a melhor plataforma de serviços'}
    >
      {members ? (
        <Suspense>
          <OrganizationMenu />
          <RoleProvider
            document={organization?.document}
            roles={['owner', 'administrator']}
          >
            <MemberListView />
          </RoleProvider>
        </Suspense>
      ) : null}
    </PageDisplay>
  )
}
export default MemberPage
