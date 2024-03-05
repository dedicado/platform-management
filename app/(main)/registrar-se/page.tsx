import PageDisplay from '@/components/PageDisplay'
import { Metadata } from 'next'
import { memo } from 'react'
import RegisterView from './views/RegisterView'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { nextAuthOptions } from '@/libraries/next-auth'

export const metadata: Metadata = {
  title: {
    default: 'registrar-se na plataforma',
    template: `%s | dedicado`,
  },
  description:
    'soluções personalizadas de sistemas de alta performance que aumentam a produtividade de pessoas e organizações',
}

const RegisterPage = async () => {
  const session = await getServerSession(nextAuthOptions)

  return !session ? (
    <PageDisplay
      title="registrar-se"
      subtitle="sua melhor plataforma de serviços"
    >
      <RegisterView />
    </PageDisplay>
  ) : (
    redirect('/')
  )
}
export default memo(RegisterPage)
