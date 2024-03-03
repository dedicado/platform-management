'use client'

import { ReactNode } from 'react'
import '@aws-amplify/ui-react/styles.css'
import { Authenticator } from '@aws-amplify/ui-react'
import { Amplify } from 'aws-amplify'
import awsExports from '@/aws-exports'
import { I18n } from 'aws-amplify/utils'
import { translations } from '@aws-amplify/ui-react'
import { Toaster } from 'react-hot-toast'

I18n.putVocabularies(translations)
I18n.setLanguage('pt')

Amplify.configure(awsExports, { ssr: true })

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Authenticator.Provider>
      <div className="min-h-screen w-full">
        {children}
        <Toaster
          position={'top-center'}
          toastOptions={{ className: 'react-hot-toast' }}
        />
      </div>
    </Authenticator.Provider>
  )
}
