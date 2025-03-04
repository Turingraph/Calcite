/*
This file should name as `src/app/api/route.tsx`

*/

export async function GET(request: Request){
    return new Response("hello world")
}

export async function POST(req: Request){
    const BODY_OF_YEARS = await req.json()
    console.log("BODY_OF_YEARS")//, BODY_OF_YEARS)
    return new Response('OK')
}
