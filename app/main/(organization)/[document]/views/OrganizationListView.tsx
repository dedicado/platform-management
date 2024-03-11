'use client'

import { usePlatform } from '@/app/context'
import { OrganizationType } from '@/types/organization'
import { cnpjMask } from 'masks-br'
import CreateOrganizationView from './CreateOrganizationView'
import UpdateOrganizationView from './UpdateOrganizationView'

export default function OrganizationListView() {
  const { organizations }: OrganizationType[] | any = usePlatform()

  return (
    <div className="relative">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-2">
          <CreateOrganizationView />
          <h6 className="text-lg font-semibold lowercase dark:text-sky-600">
            criar nova organização
          </h6>
        </div>
        <ul className="w-full">
          {organizations?.map((organization: OrganizationType) => {
            return (
              <li
                key={organization?.id}
                className="my-2 p-4 bg-slate-200 dark:bg-slate-800 dark:text-sky-600 rounded-md hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <a href={organization?.document} className="flex flex-col">
                    <h6 className="text-xl hover:opacity-50">
                      {organization?.name}
                    </h6>
                    <small className="text-xs font-thin opacity-60">
                      {cnpjMask(organization?.document)}
                    </small>
                  </a>
                  <div className="flex flex-1 justify-end space-x-2">
                    <UpdateOrganizationView data={organization} />
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
