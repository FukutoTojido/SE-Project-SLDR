import clientPromise from "../../../../lib/mongodb";
export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("SLDR");
    switch (req.method) {
        case "GET":
            const userInfo = await db
                .collection("users")
                .find({ "userInfo.userId": parseInt(req.query.id) })
                .toArray();
            res.json(userInfo);
            break;
    }
}
