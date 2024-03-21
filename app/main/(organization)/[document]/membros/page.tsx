'use client'

import PageDisplay from '@/components/PageDisplay'
import { memo, Suspense } from 'react'
import MemberView from './views/MemberView'
import { useOrganization } from '../context'
import OrganizationMenu from '../views/OrganizationMenu'

const MemberPage = async () => {
  const { organization, members }: any = useOrganization()

  return (
    <PageDisplay
      title={`membros da organização ${organization?.name ?? ''}`}
      subtitle={'a melhor plataforma de serviços'}
    >
      {members ? (
        <Suspense>
          <OrganizationMenu />
          <MemberView />
        </Suspense>
      ) : null}
    </PageDisplay>
  )
}
export default memo(MemberPage)
