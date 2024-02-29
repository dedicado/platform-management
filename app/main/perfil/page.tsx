import PageDisplay from '@/components/PageDisplay'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'meu perfil na plataforma',
    template: `%s | dedicado`,
  },
  description:
    'soluções personalizadas de sistemas de alta performance que aumentam a produtividade de pessoas e organizações',
}

export default async function ProfilePage() {
  const profile: any = null

  return (
    <PageDisplay
      title="meu perfil na plataforma"
      subtitle={`olá ${profile?.name.split(' ')[0]}`}
    >
      <div className="flex flex-col items-center md:flex-row">
        <div className="w-full">{profile}</div>
      </div>
    </PageDisplay>
  )
}
