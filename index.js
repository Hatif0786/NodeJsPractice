const dbConnect = require('./mongodb')

dbConnect().then(async (resp)=> {
    console.log(await resp.find().toArray());
})