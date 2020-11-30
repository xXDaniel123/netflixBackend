const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

async function query() {
    const collection = await dbService.getCollection('genre')
    
    try {
        const genres = await collection.find().toArray()
        return genres
    } catch (err) {
        console.log('error fetching genres:', err);
        throw err
    }
}

module.exports = {
    query
}