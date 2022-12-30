import clientPromise from "../../../../lib/mongodb";

export default async function authenticateUser(req, res) {
    if(req.method === 'POST') {
        const client = await clientPromise
        const db = client.db('SLDR')
        const { username: userName, password} = req.body
        const matchUser = await db.collection('users').find({userName: userName, password: password}).toArray()
        if(matchUser.length) {
            console.log(matchUser);
            res.json({...matchUser[0]})
        } else{
            res.json({})
        }
    } 
}