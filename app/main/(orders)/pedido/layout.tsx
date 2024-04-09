import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: {
    default: 'você está na melhor plataforma de serviços',
    template: `%s | dedicado`,
  },
  description:
    'Soluções personalizadas de sistemas de alta performance que aumentam a produtividade de pessoas e organizações',
}

export default async function OneOrderLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <div>{children}</div>
}
