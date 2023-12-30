const dbConnect = require('./mongodb')

const deleteFunc= async () => {
    let data = await dbConnect();
    let resp =  data.deleteOne({name: 'Deskworx Studio Updated'})
    if((await resp).acknowledged){
        console.warn("Record deleted!!!");
    }
}

deleteFunc()