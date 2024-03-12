'use client'

import { MdAccountBox } from 'react-icons/md'
import ProfileAvatar from './ProfileAvatar'
import ProfileInformations from './ProfileInformations'
import ProfilePassword from './ProfilePassword'
import AddressForm from '@/components/AddressForm'
import { AddressType } from '@/types/address'
import { usePlatform } from '@/app/context'

export const ProfileView = () => {
  const { userProfile }: any = usePlatform()
  const address: AddressType = {
    zipCode: userProfile?.zipCode,
    street: userProfile?.street,
    complement: userProfile?.complement,
    latitude: userProfile?.latitude,
    longitude: userProfile?.longitude,
  }

  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <div className="flex flex-wrap justify-center items-center w-full sm:max-w-xs p-2">
        <div className="flex flex-col justify-center items-center gap-4">
          <ProfileAvatar image={userProfile?.image} />
          <div className="p-2 flex items-center space-x-1 w-full mx-auto bg-sky-600 rounded-md shadow-md">
            <MdAccountBox size={24} />
            <p className="text-base font-semibold text-slate-200">
              {userProfile?.profile}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 w-full min-w-md p-4 bg-slate-200 dark:bg-slate-400 rounded-md">
        <div className="relative w-full space-y-4">
          <ProfileInformations />
          <hr className="m-8 border-1 border-slate-400 dark:border-slate-600" />
          <AddressForm
            address={address}
            entity={'users'}
            id={userProfile?.id}
          />
          <hr className="m-8 border-1 border-slate-400 dark:border-slate-600" />
          <ProfilePassword />
        </div>
      </div>
    </div>
  )
}

export default ProfileView