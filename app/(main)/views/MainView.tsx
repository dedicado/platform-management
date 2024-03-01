'use client'

import { withAuthenticator } from '@aws-amplify/ui-react'

const MainView = () => {
  return (
    <div>
      <h1>página principal</h1>
    </div>
  )
}

export default withAuthenticator(MainView)
