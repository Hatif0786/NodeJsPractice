const { ObjectId } = require('mongodb')
const User = require('./User')
require('./config')
const express = require('express')

const app = express()
app.use(express.json())


app.post('/create-user', async (req, resp) => {
    let data = new User(req.body)
    await data.save().then((res) => {
        resp.send(res)
    })
})

app.get('/', async (req, resp) => {
    await User.find().then((res) => {
        resp.send(res)
    })
})

app.put('/update-user/:id', async (req, resp) => {
    await User.updateOne({'_id': new ObjectId(req.params.id)}, { $set: req.body}).then((res) => {
        resp.send(res)
    })
})

app.delete('/delete-user/:id', async (req, resp) => {
    await User.deleteOne({'_id': new ObjectId(req.params.id)}).then((res) => {
        resp.send(res);
    })
})


app.listen(5000)