import PageDisplay from '@/components/PageDisplay'
import { memo } from 'react'
import CreateOrganizationForm from './Views/CreateOrganizationForm'
import { nextAuthOptions } from '@/libraries/next-auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'criar sua organização na melhor plataforma de serviços',
    template: `%s | dedicado`,
  },
  description:
    'Soluções personalizadas de sistemas de alta performance que aumentam a produtividade de pessoas e organizações',
}

const OrganizationCreatePage = async () => {
  const session = await getServerSession(nextAuthOptions)

  return session ? (
    <PageDisplay
      title={`criar nova organização`}
      subtitle={`a melhor plataforma de serviços`}
    >
      <div className="w-full">
        <CreateOrganizationForm />
      </div>
    </PageDisplay>
  ) : (
    redirect('/')
  )
}
export default memo(OrganizationCreatePage)
