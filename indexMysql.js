const express = require('express');
const conn = require('./mysqlConfig')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    conn.query('select * from user', (err, resp) => {
        res.send(resp)
    })
})

app.post('/add-user', (req, resp) => {
    conn.query('insert into user set ?', req.body, (err, res) => {
        resp.send(res);
    })
})


app.put('/update-user/:id', (req, resp) => {
    const data = [req.body.name, req.body.email, req.body.phone, req.params.id]
    conn.query("update user set name=?, email=?, phone=? where id=?", data ,(err, res) => {
        resp.send(res);
    })
})

app.delete('/delete-user/:id', (req, resp) => {
    conn.query("delete from user u where u.id=?", req.params.id, (err, res) => {
        resp.send(res)
    })
})

app.listen(5000)