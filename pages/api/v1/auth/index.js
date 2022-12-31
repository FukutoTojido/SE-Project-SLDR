import clientPromise from "../../../../lib/mongodb";

export default async function authenticateUser(req, res) {
    if (req.method === "POST") {
        const client = await clientPromise;
        const db = client.db("SLDR");
        const { username, password } = req.body;
        const matchUser = await db.collection("auth").find({ username: username, password: password }).toArray();
        if (matchUser.length) {
            const userData = await db.collection("users").findOne({ "userInfo.userName": username }, { projection: { _id: 0 } });
            res.json(userData.userInfo);
        } else {
            res.json({});
        }
    }
}
