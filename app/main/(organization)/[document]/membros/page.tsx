import PageDisplay from '@/components/PageDisplay'
import { memo } from 'react'
import { Metadata } from 'next'
import MemberView from './views/MemberView'

export const metadata: Metadata = {
  title: {
    default: 'membros da minha organização',
    template: `%s | dedicado`,
  },
  description:
    'soluções personalizadas de sistemas de alta performance que aumentam a produtividade de pessoas e organizações',
}

const MemberPage = async ({ params }: { params: { document: string } }) => {
  const { document } = params
  return (
    <PageDisplay
      title={document || 'membros da organização'}
      subtitle={document || 'a melhor plataforma de serviços'}
    >
      <MemberView />
    </PageDisplay>
  )
}
export default memo(MemberPage)
