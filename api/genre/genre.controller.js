const genreService = require('./genre.service')

async function getGenres(req, res){
    try { 
        const genresToReturn = await genreService.query()
        res.send(genresToReturn)
    } catch (err) {
        res.status(500).send({ err: 'cannot get genres' })
    }
}
module.exports = {
    getGenres
}