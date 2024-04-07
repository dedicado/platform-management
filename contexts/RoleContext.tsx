'use client'

import Unauthorized from '@/components/Unauthorized'
import { memberAuthorized } from '@/utils/handle-authorization'
import {
  createContext,
  Fragment,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

interface Props {
  authorized: boolean
}

const RoleContext = createContext<Props | any>({})

export const RoleProvider = ({
  children,
  document,
  roles,
}: Readonly<{ children?: ReactNode; document: string; roles?: string[] }>) => {
  const [authorized, setAuthorized] = useState<boolean>(true)

  const data = useCallback(async () => {
    try {
      if (!document) return null
      const authorized = await memberAuthorized({
        organizationDocument: document,
        roles: roles,
      })
      authorized && setAuthorized(authorized[0])
    } catch (error: any) {
      return null
    }
  }, [document, roles])

  useEffect(() => {
    document && data()
  }, [data, document])

  return (
    <RoleContext.Provider value={document ? { authorized } : null}>
      {authorized ? (
        <Fragment>{children}</Fragment>
      ) : (
        <Unauthorized message='ops!' />
      )}
    </RoleContext.Provider>
  )
}

export const useRole = (): Promise<Props> => {
  return useContext(RoleContext)
}

export const RoleCustomer = RoleContext.Consumer
