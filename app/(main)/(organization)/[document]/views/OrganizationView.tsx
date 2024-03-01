'use client'

import { withAuthenticator } from '@aws-amplify/ui-react'

export const OrganizationView = () => {
  return (
    <div>
      <h1>página da organização</h1>
    </div>
  )
}

export default withAuthenticator(OrganizationView)
