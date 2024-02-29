import PageDisplay from '@/components/PageDisplay'
import { Metadata } from 'next'
import ResetPassword from '@/components/ResetPassword'

export const metadata: Metadata = {
  title: {
    default: 'redefinir minha senha de acesso a plataforma',
    template: `%s | dedicado`,
  },
  description:
    'soluções personalizadas de sistemas de alta performance que aumentam a produtividade de pessoas e organizações',
}

export default function ResetPasswordPage() {
  return (
    <PageDisplay
      title="redefinir minha senha de acesso"
      subtitle={`sua melhor plataforma de serviços`}
    >
      <div className="flex flex-col justify-items-center items-center ">
        <ResetPassword />
      </div>
    </PageDisplay>
  )
}
