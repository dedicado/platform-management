'use client'

import PageDisplay from '@/components/PageDisplay'
import { memo } from 'react'
import MemberView from './views/MemberView'
import { useOrganization } from '../context'
import NotFoundPage from '@/app/not-found'
import OrganizationMenu from '../views/OrganizationMenu'

const MemberPage = async () => {
  const { organization }: any = useOrganization()

  return !organization.status ? (
    <PageDisplay
      title={`membros da organização ${organization?.name || ''}`}
      subtitle={'a melhor plataforma de serviços'}
    >
      <OrganizationMenu />
      <MemberView />
    </PageDisplay>
  ) : (
    <NotFoundPage />
  )
}
export default memo(MemberPage)
