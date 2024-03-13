'use client'

import { useCallback, useState, useTransition } from 'react'
import { Switch } from '@headlessui/react'

export default function SwitchTheme() {
  const [dark, setDark] = useState<boolean>(false)
  const [isPending, startTransition] = useTransition()

  console.log(dark)

  const handleAvailable = useCallback(() => {
    startTransition(() => setDark(!dark))
  }, [dark])

  return (
    <div className="relative">
      <Switch
        checked={dark}
        onChange={handleAvailable}
        className={`${!dark ? 'bg-slate-600' : 'bg-sky-600'}
          relative h-[26px] w-[52px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75 flex item-center`}
      >
        <span
          aria-hidden="true"
          className={`${!dark ? 'translate-x-6' : 'translate-x-0'}
            pointer-events-none h-[24px] w-[24px] transform rounded-full p-2 flex justify-center items-center text-xs bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        >
          {!dark ? 'light' : 'dark'}
        </span>
      </Switch>
    </div>
  )
}
