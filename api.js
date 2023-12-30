const express = require('express')
const url = require('url');
const dbConnect = require('./mongodb')
const { ObjectId } = require('mongodb');
const { log } = require('console');

const app = express();
app.use(express.json())

app.get('/', async (req, resp) => {
    let db = await dbConnect();
    let data = await db.find().toArray();
    resp.send(data);
})

app.post('/', async (req, resp) => {
    let db = await dbConnect();
    let result = await db.findOne({ $and: [ { email: req.body.email }, { phone: req.body.phone } ] })
    if(!result){
        let data = await db.insertOne(req.body)
        if(data.acknowledged){
            resp.send('User added!!!')
        }
    }else{
        resp.send('User already exists!!!')
    } 
})


app.put('/:id',async (req, resp) => {
    let db = await dbConnect();
    let data = await db.updateOne({'_id': new ObjectId(req.params.id)}, {$set: {'name': req.body.name, 'email': req.body.email, 'phone': req.body.phone}}).then((res) => {
        console.log(res);
    })
    resp.send("Updation Done!!")
})


app.delete('/:id', async (req, resp) => {
    let db = await dbConnect();
    let data = await db.findOne(new ObjectId(req.params.id))
    if(data){
        await db.deleteOne({'_id': new ObjectId(req.params.id)}).then((result) => {
            resp.send('Deletion Successful!!!')
        })
        
    }else{
        resp.send('No data found!!')
    }
    
})

app.listen(5000)