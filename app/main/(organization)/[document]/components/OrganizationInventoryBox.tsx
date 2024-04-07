'use client'

import { useEffect, useState } from 'react'
import { MdInventory } from 'react-icons/md'

interface Props {}

export default function OrganizationInventoryBox(props: Props) {
  const {} = props

  let itemCount: number = 0
  const [count, setCount] = useState<number>(itemCount)

  useEffect(() => {
    setCount(itemCount)
  }, [itemCount])

  return (
    <div
      className={`relative w-full max-w-sm p-4 rounded-md shadow-md bg-gradient-to-r from-sky-600/80 to-sky-800/60 ${
        count == 0 ? 'opacity-20 hover:opacity-80' : 'opacity-100'
      }`}
    >
      <div className="h-auto flex flex-col sm:flex-row justify-around items-center">
        <div className="mx-auto p-2">
          <MdInventory className="text-white" size={48} />
        </div>
        <div className="mx-auto p-2">
          <h4 className="text-4xl sm:text-2xl text-center font-bold text-sky-400 dark:text-sky-200 shrink-0">
            controle de estoque
          </h4>
        </div>
        <div className="mx-auto p-2">
          <span className="text-xl sm:text-lg font-thin text-slate-200/80">
            {`${count} ${count == 1 ? ' item' : ' itens'}`}
          </span>
        </div>
      </div>
    </div>
  )
}
