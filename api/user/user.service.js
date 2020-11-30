const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

// getUser, updateUser

async function getUserByEmail(email){
    const collection = await dbService.getCollection('user')
    try {
        const user = collection.findOne({ "email": email })
        delete user.password
        return user
    } catch (err) {
        console.log('error fetching user:', id);
        throw err
    }
}

// async function updateUser(user) {

//     const collection = await dbService.getCollection('user')
//     user._id = ObjectId(user._id)

//     try {
//         await collection.replaceOne({ "_id": user._id }, { $set: user })
//         return user
//     } catch (err) {
//         console.log('error updating user')
//         throw err
//     }
// }

async function saveUser(user) {

    const collection = await dbService.getCollection('user')

    if(user._id){
        try {
            user._id = ObjectId(user._id)
            await collection.replaceOne({ "_id": user._id }, { $set: user })
            return user
        } catch (err) {
            console.log('error updating user')
            throw err
        }
    } else {
        try{
            await collection.insertOne(user)
            return user
        }catch(err){
           console.log('error adding new user')
           throw err
        }
    }
}

async function deleteUser(id){
    const collection = await dbService.getCollection('user')
    try {
        await collection.deleteOne({ "_id": ObjectId(id) })
    } catch (err) {
        console.log('cannot remove user')
        throw err
    }
}

// async function saveUser(user){

//     const collection = await dbService.getCollection('user')
//     if(user._id){

//     }

// }

module.exports = {
    getUserByEmail,
    deleteUser,
    // updateUser,
    saveUser
}