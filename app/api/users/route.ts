import { getUsers } from '@/repositories/users/GET'

export async function GET(request: Request) {
  return new Response(JSON.stringify(await getUsers()))
}
