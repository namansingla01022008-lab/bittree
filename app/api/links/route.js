import clientPromise from "@/lib/mongodb";

export async function GET() {
    const client = await clientPromise
    const db = client.db("bittree")
    const collection = db.collection("links")

    const items = await collection.find({}).toArray()
    return Response.json(items);
}