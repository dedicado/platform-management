'use client'

import MemberOrderListView from '../(organization)/[document]/pedidos/views/MemberOrderListView'
import OrganizationListView from '../(organization)/[document]/views/OrganizationListView'

const MainView = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex flex-col w-full space-2">
        <MemberOrderListView />
      </div>
      <div className="flex flex-col w-full space-2">
        <OrganizationListView />
      </div>
    </div>
  )
}

export default MainView
