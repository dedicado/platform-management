import { createServerRunner } from '@aws-amplify/adapter-nextjs'
import config from '../../amplifyconfiguration.json'
import { fetchUserAttributes, getCurrentUser } from '@aws-amplify/auth/server'
import { cookies } from 'next/headers'

export const { runWithAmplifyServerContext } = createServerRunner({
  config,
})

export const isAuthenticated = async () =>
  await runWithAmplifyServerContext({
    nextServerContext: { cookies },
    async operation(contextSpec) {
      try {
        const user = await getCurrentUser(contextSpec)
        return !!user
      } catch (error) {
        return false
      }
    },
  })

export const currentUser = async () =>
  await runWithAmplifyServerContext({
    nextServerContext: { cookies },
    async operation(contextSpec) {
      try {
        return await fetchUserAttributes(contextSpec)
      } catch (error) {
        return false
      }
    },
  })
