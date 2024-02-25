import { Metadata } from 'next'
import { ReactNode } from 'react'

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
  const { document } = params

  return <div>{children}</div>
}
