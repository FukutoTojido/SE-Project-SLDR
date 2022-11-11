import clientPromise from "../../../../lib/mongodb";
export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("SLDR");
    switch (req.method) {
        case "GET":
            const chartInfo = await db
                .collection("charts")
                .find({ mapId: parseInt(req.query.id) })
                .toArray();

            res.json(chartInfo);
            break;
    }
}
