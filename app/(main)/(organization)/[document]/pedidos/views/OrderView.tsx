'use client'

import { withAuthenticator } from '@aws-amplify/ui-react'

export const OrderView = () => {
  return (
    <div>
      <h1>página de pedidos da organização</h1>
    </div>
  )
}

export default withAuthenticator(OrderView)
