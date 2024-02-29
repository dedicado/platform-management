import { Metadata } from 'next'
import RegisterView from './views/RegisterView'
import PageDisplay from '@/components/PageDisplay'

export const metadata: Metadata = {
  title: {
    default: 'registrar-se na plataforma',
    template: `%s | dedicado`,
  },
  description:
    'soluções personalizadas de sistemas de alta performance que aumentam a produtividade de pessoas e organizações',
}

export default async function RegisterPage() {
  return (
    <PageDisplay
      title="registrar-se"
      subtitle="sua melhor plataforma de serviços"
    >
      <RegisterView />
    </PageDisplay>
  )
}
