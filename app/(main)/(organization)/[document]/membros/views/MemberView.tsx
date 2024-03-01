'use client'

import { withAuthenticator } from '@aws-amplify/ui-react'

export const MemberView = () => {
  return (
    <div>
      <h1>página de membros da organização</h1>
    </div>
  )
}

export default withAuthenticator(MemberView)
