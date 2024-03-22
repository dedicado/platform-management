'use client'

import Link from 'next/link'
import { Fragment, memo, useEffect, useState, useTransition } from 'react'
import AuthMenu from './AuthMenu'
import UserMenu from './UserMenu'
import UserAvailable from './UserAvailable'
import { Session } from 'next-auth'

function Topbar({ session }: { session: Session }) {
  const [isPending, startTransition] = useTransition()
  const [authenticated, setAuthenticated] = useState<boolean>(false)

  useEffect(() => {
    session && startTransition(() => setAuthenticated(true))
  }, [authenticated, session])

  return (
    <div className="fixed z-10 h-16 w-full backdrop-blur-sm bg-slate/30 dark:bg-slate-800/30 shadow-md">
      <div className="h-full flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-8">
          <div className="flex flex-row items-center justify-between">
            <div className="flex items-center justify-start space-x-2">
              <Link
                href={'/'}
                className="text-xl text-center md:text-left text-sky-600 font-semibold lowercase"
              >
                dedicado
              </Link>
            </div>
            <div className="flex flex-1 items-center justify-end space-x-2">
              {authenticated ? (
                <Fragment>
                  <UserAvailable session={session} />
                  <UserMenu session={session} />
                </Fragment>
              ) : (
                <AuthMenu />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Topbar)
