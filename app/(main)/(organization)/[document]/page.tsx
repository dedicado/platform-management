import PageDisplay from '@/components/PageDisplay'
import { Metadata } from 'next'
import { memo } from 'react'
import OrganizationView from './views/OrganizationView'

export async function generateMetadata({
  params,
}: {
  params: { document: string }
}): Promise<Metadata | null> {
  const { document } = params

  return {
    title: {
      default: `a melhor plataforma de serviços da ${document}`,
      template: `%s | dedicado`,
    },
    description:
      'soluções personalizadas de sistemas de alta performance que aumentam a produtividade de pessoas e organizações',
  }
}

const OrganizationPage = async ({
  params,
}: {
  params: { document: string }
}) => {
  const { document } = params
  return (
    <PageDisplay
      title={document || 'seu espaço dedicado'}
      subtitle={document || 'a melhor plataforma de serviços'}
    >
      <OrganizationView />
    </PageDisplay>
  )
}
export default memo(OrganizationPage)
