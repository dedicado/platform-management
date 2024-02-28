export async function GET(request: Request) {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return new Response(JSON.stringify(await data.json()), { status: 200 })
}
