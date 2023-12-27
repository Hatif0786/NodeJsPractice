const express = require('express')
const path = require('path')
const publicPath = path.join(__dirname, 'public')
const app = express()


app.set('view engine', 'ejs')

app.get("", (req, resp)=>{
    resp.sendFile(`${publicPath}/index.html`, (err)=> {})
})

app.get("/profile", reqFilter, (req, resp)=>{
    const data = {
        name: "Hatif E Khuld",
        email: "hatifkhuld14@gmail.com",
        phone: "+911234567890",
        skills: ['C', 'C++', 'Java', 'Python', 'NodeJs']
    }
    resp.render(`profile`, {data})
})

app.get("/about", (req, resp)=>{
    resp.sendFile(`${publicPath}/about.html`, (err)=> {})
})
app.get("*", (req, resp)=>{
    resp.sendFile(`${publicPath}/404.html`, (err)=> {})
})

app.listen(5000)