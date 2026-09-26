import clientPromise from "@/lib/mongodb";

export async function GET() {
    try {
        const client = await clientPromise
        const db = client.db("bittree")
        const collection = db.collection("links")

        const items = await collection.find({}).toArray()
        return Response.json(items);
    } catch (error) {
        console.error("API /api/links Error:", error)
        return Response.json({ success: false, error: true, message: error.message || 'Internal Server Error' }, { status: 500 })
    }
}