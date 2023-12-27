const dbConnect = require('./mongodb')

const insertFunc = async () => {
    const db = await dbConnect();
    const result = await db.insertOne({
        name: 'Deskworx Studio',
        email: 'deskworxstudio@gmail.com',
        phone: '+911234567890'
    })
    console.warn(result)
}

insertFunc()