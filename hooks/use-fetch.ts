import useSWR from 'swr'

type UseFetchType = {
  url: string
  authorization?: string
  authorizationKey?: string
}

export default function useFetch<Data = any, Error = any>({
  url,
  authorization,
  authorizationKey,
}: UseFetchType) {
  const { data, error, mutate } = useSWR<Data, Error>(url, async () => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authorization ?? ''}`,
        authorizationKey: authorizationKey ?? '',
      },
    })
    return response.json()
  })

  return { data, error, mutate }
}
