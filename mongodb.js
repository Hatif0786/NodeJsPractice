const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)



async function dbConnect(){
    let result = await client.connect();
    let db = result.db('NodeJsPracticeDB')
    return collection = db.collection('dummy')
    // console.log(await collection.find({
    //     name:"Hatif E Khuld"}).toArray());
}

module.exports=dbConnect;