import { createServerRunner } from '@aws-amplify/adapter-nextjs'
import config from '../../amplifyconfiguration.json'
import { getCurrentUser } from '@aws-amplify/auth/server'
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
