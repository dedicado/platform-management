'use client'

import { useParams } from 'next/navigation'
import OrganizationCreditBox from '../components/OrganizationCreditBox'
import OrganizationMemberBox from '../components/OrganizationMember Box'
import OrganizationOrderBox from '../components/OrganizationOrderBox'
import { Suspense } from 'react'
import OrganizationInventoryBox from '../components/OrganizationInventoryBox'

export default function OrganizationView() {
  const params = useParams()
  const { document } = params

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full space-y-4">
        <div className="relative flex flex-col sm:flex-row gap-4">
          <div className="w-full space-y-2">
            <ul className="flex flex-col lg:flex-row gap-2">
              <li className="w-full">
                <a
                  href={`/${document}/pedidos`}
                  className="block hover:opacity-80"
                >
                  <Suspense>
                    <OrganizationOrderBox />
                  </Suspense>
                </a>
              </li>
              <li className="w-full">
                <a href={`#`} className="block hover:opacity-80">
                  <Suspense>
                    <OrganizationInventoryBox />
                  </Suspense>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-1">
            <ul className="flex flex-col md:flex-row gap-2">
              <li className="w-full sm:max-w-xs">
                <a href={`#`} className="block hover:opacity-80">
                  <Suspense>
                    <OrganizationCreditBox />
                  </Suspense>
                </a>
              </li>
              <li className="w-full sm:max-w-xs">
                <a
                  href={`/${document}/membros`}
                  className="block hover:opacity-80"
                >
                  <Suspense>
                    <OrganizationMemberBox />
                  </Suspense>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full space-y-4"></div>
    </div>
  )
}
