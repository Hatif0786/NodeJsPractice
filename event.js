const EventEmitter = require('events')
const express = require('express')
const app = express()

const event = new EventEmitter()

event.on('hitEvent', () => {
    console.log("Event Hitted!!");
})

app.get('/', (req, resp) => {
    console.warn('event emitted');
    event.emit('hitEvent')
    resp.send("Go to logs!!")
})

app.listen(5000)