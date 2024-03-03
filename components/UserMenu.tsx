'use client'

import Image from 'next/image'
import { Fragment, useCallback } from 'react'
import { Menu, Transition } from '@headlessui/react'

import { MdAccountBox, MdLogout } from 'react-icons/md'
import { useRouter } from 'next/navigation'
import { signOut } from 'aws-amplify/auth'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function UserMenu() {
  const avatar = '/avatar.svg'

  const route = useRouter()
  const handleSignOut = useCallback(async () => {
    await signOut()
    route.refresh()
  }, [route])

  return (
    <Fragment>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="flex rounded-full mx-auto p-1 cursor-pointer hover:opacity-50 hover:shadow-md">
            <Image
              className="w-[32px] h-[32px] mx-auto rounded-full"
              src={avatar}
              alt={'dedicado'}
              width={32}
              height={32}
              priority
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-2">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/perfil"
                    className={classNames(
                      active ? 'bg-slate-200' : 'font-normal',
                      'flex items-center px-4 py-2 gap-2',
                    )}
                  >
                    <MdAccountBox size={18} />
                    perfil
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={handleSignOut}
                    className={classNames(
                      active ? 'bg-slate-200' : 'font-normal',
                      'flex items-center px-4 py-2 gap-2 cursor-pointer',
                    )}
                  >
                    <MdLogout size={18} />
                    sair
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </Fragment>
  )
}