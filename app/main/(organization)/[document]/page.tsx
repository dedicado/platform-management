import PageDisplay from '@/components/PageDisplay'
import { Metadata } from 'next'

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

export default async function OrganizationsPage({
  params,
}: {
  params: { document: string }
}) {
  const { document } = params

  return (
    <PageDisplay title={document} subtitle={document}>
      {document}
    </PageDisplay>
  )
}
