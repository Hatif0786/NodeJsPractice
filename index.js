const mongoose = require('mongoose')
const { ObjectId } = require('mongodb');

mongoose.connect('mongodb://localhost:27017/NodeJsPracticeDB')
const UsersSchema = new mongoose.Schema({
        name: String,
        email: String,
        phone: String
})

const saveInDb = async () => {
    const UsersModel = mongoose.model('users', UsersSchema)
    let data = new UsersModel({'name': "Arjit Singh", 'email': "arjit.singh@hotmail.com", 'phone':'+01969798862'})
    let result = await data.save()
    console.log(result);
    
}

const updateInDb = async () => {
    try {
        const User = mongoose.model('user', UsersSchema);
        const filter = { '_id': "658e72510c82e9ce25b69469" };
        const update = { $set: { "name": "Ramesh Kr." } };
        const result = await User.updateOne(filter, update, { maxTimeMS: 30000 });
        console.log(result);
    } catch (error) {
        console.error('Error updating document:', error);
    }
};


const deleteInDb = async () => {
    const User = mongoose.model('user', UsersSchema)
    await User.deleteOne({'_id': '658e72510c82e9ce25b69469'}).then((res) => {
        console.log(res)
    })
}

const findAllInDb = async () => {
    const User = mongoose.model('users', UsersSchema)
    User.find().then((res)=> {
        console.log(res);
    })
}

const findInDb = async () => {
    const User = mongoose.model('users', UsersSchema)
    User.findOne({'_id': '658f252785bc1b5874791352'}).then((res)=> {
        console.log(res);
    })
}



findInDb()