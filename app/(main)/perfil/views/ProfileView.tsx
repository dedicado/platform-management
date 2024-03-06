'use client'

import { MdAccountBox } from 'react-icons/md'
import ProfileAvatar from './ProfileAvatar'
import ProfileInformations from './ProfileInformations'
import { UserType } from '@/types/user'
import ProfilePassword from './ProfilePassword'
import AddressForm from '@/components/AddressForm'
import { AddressType } from '@/types/address'

interface Props {
  data: UserType | any
}

export const ProfileView = (props: Props) => {
  const { data } = props
  const address: AddressType = {
    zipCode: data?.zipCode,
    street: data?.street,
    complement: data?.complement,
    latitude: data?.latitude,
    longitude: data?.longitude,
  }

  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <div className="flex flex-wrap justify-center items-center w-full sm:max-w-xs p-2">
        <div className="flex flex-col justify-center items-center gap-4">
          <ProfileAvatar image={data?.image} />
          <div className="p-2 flex items-center space-x-1 w-full mx-auto bg-sky-600 rounded-md shadow-md">
            <MdAccountBox size={24} />
            <p className="text-base font-semibold text-slate-200">
              {data?.profile}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 w-full min-w-md p-4 bg-slate-200 dark:bg-slate-400 rounded-md">
        <div className="relative w-full space-y-4">
          <ProfileInformations data={data} />
          <hr className="m-8 border-1 border-slate-400 dark:border-slate-600" />
          <AddressForm address={address} entity={'users'} id={data?.id} />
          <hr className="m-8 border-1 border-slate-400 dark:border-slate-600" />
          <ProfilePassword />
        </div>
      </div>
    </div>
  )
}

export default ProfileView
