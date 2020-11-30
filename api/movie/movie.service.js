const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId


async function query(){
    const collection = await dbService.getCollection('movie')
    try {
        const movies = await collection.find().toArray()
        return movies
    } catch (err) {
        console.log('error fetching movies:', err);
        throw err
    }
}

async function getMovieByIdService(id){

    const collection = await dbService.getCollection('movie')
    try {
        const movieToReturn = await collection.findOne({ "_id": ObjectId(id) })
        return movieToReturn
    } catch (err) {
        console.log('error fetching movie', err)
        throw err
    }
}

async function save(movie){

    const collection = await dbService.getCollection('movie')

    if(movie._id){
        movie._id = ObjectId(movie._id)
        try {
            await collection.replaceOne({ "_id": movie._id}, movie)
            return movie
        } catch (err) {
            console.log('error saving movie', err)
            throw err
        }
    } else {
        try {
            await collection.insertOne(movie)
            return movie
        } catch (err) {
            console.log('error adding movie',err)
            throw err
        }
    }
}

async function updateCollection(movies) {

    const collection = await dbService.getCollection('movie')
    
    try {
        movies.forEach(movie => movie._id = ObjectId(movie._id))
        await collection.deleteMany({})
        await collection.insertMany(movies)
        return movies
    } catch (err) {
        console.log('error updating movies')
        throw err
    }

}

module.exports = {
    query,
    getMovieByIdService,
    updateCollection,
    save
}