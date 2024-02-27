import Footer from '@/components/Footer'
import { Metadata } from 'next'
import { ReactNode, Fragment } from 'react'

export const metadata: Metadata = {
  title: {
    default: 'sua melhor plataforma de serviços',
    template: `%s | dedicado`,
  },
  description:
    'soluções personalizadas de sistemas de alta performance que aumentam a produtividade de pessoas e organizações',
}

export default async function MainLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <Fragment>
      <main>{children}</main>
      <Footer />
    </Fragment>
  )
}
