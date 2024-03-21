import useSWR from 'swr'

export default function useFetch<Data = any, Error = any>(url: string, authorization?: string) {
  const { data, error, mutate } = useSWR<Data, Error>(
    url,
    async (url: string, authorization?: string) => {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authorization!}`,
          authorizationKey: authorization!,
        },
      })
      return response.json()
    },
  )

  return { data, error, mutate }
}
