import clientPromise from "@/lib/mongodb"


export async function POST(request) {
    try {
        const body = await request.json()
        const client = await clientPromise
        const db = client.db("bittree")
        const collection = db.collection("links")

        const doc = await collection.findOne({ handle: body.handle })

        if (doc) {
            return Response.json({ success: false, error: true, message: 'Sorry this Bittree already exists !!', result: null })
        }

        const result = await collection.insertOne(body)
        console.log(body)
        return Response.json({ success: true, error: false, message: 'Your Bittree has been generated!', result: result })
    } catch (error) {
        console.error("API /api/add Error:", error)
        return Response.json({ success: false, error: true, message: error.message || 'Internal Server Error' }, { status: 500 })
    }
}