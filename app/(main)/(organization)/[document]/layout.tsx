import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'
import { currentUser } from '@/utils/amplify-utils'

export const metadata: Metadata = {
  title: {
    default: 'sua melhor plataforma de serviços',
    template: `%s | dedicado`,
  },
  description:
    'soluções personalizadas de sistemas de alta performance que aumentam a produtividade de pessoas e organizações',
}

export default async function OrganizationLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode
  params: { document: string }
}>) {
  const user = await currentUser()
  const { document } = params

  return user ? <div>{children}</div> : redirect('/')
}
