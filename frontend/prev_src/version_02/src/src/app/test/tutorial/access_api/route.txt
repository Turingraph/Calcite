export async function GET(){
    return new Response(
        JSON.stringify({
            name:"Josh",
            video:"NextJS 13 API Routes: Better Than Expected!",
            url:"https://youtu.be/vrR4MlB7nBI?si=skgomCQQzbtbWs1E"
        })
    )
}

export async function POST(req: Request) {
    const body = await req.json()
    console.log(body)
    return new Response("OK")
}
