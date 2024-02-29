'use client'

import { ReactNode } from 'react'
import '@aws-amplify/ui-react/styles.css'
import { Authenticator } from '@aws-amplify/ui-react'
import { Amplify } from 'aws-amplify'
import awsExports from '@/aws-exports'

Amplify.configure(awsExports, { ssr: true })

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Authenticator.Provider>
      <div className="min-h-screen w-full">{children}</div>
    </Authenticator.Provider>
  )
}
