import { RoutesByCoordinationsType } from './types'

export const getRoutesByCoordinations = async ({
  destination,
  origin,
}: RoutesByCoordinationsType): Promise<[] | any> => {
  const url = ``
  try {
    if (!destination || !origin) return null

    const data = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}
