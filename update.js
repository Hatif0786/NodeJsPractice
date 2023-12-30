const dbConnect = require('./mongodb')

const updateFunc= async () => {
    let data = await dbConnect();
    data.updateOne({name: 'Deskworx Studio'}, {
        $set : {name: "Deskworx Studio Updated"}
    }).then((resp) => {
        console.log(resp);
    })
    
}

updateFunc()