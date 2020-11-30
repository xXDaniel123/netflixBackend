const movieService = require('./movie.service')


// CRUD

// query (get all movies)

async function getMovies(req, res){
    // get movies from db through service
    try{
        const movies = await movieService.query()
        res.send(movies)
    } catch (err) {
        res.status(500).send({
            err: 'cannot get movies'
        })
    }
}

// get movie by id

async function getMoviebyId(req, res) {
    // get movie by id from db through service
    const id = req.params.id
    
    try {
        const movieToReturn = await movieService.getMovieByIdService(id)
        res.send(movieToReturn)
    } catch (err) {
        res.status(500).send({ err: 'cannot get movie' })
    }
}

async function updateMovie(req, res) {
    const movie = req.body

    try {
        const movieToReturn = await movieService.save(movie)
        res.send(movieToReturn)
    } catch (err) {
        res.status(500).send({ err: 'cannot save movie' })
    }
}

// create movie

async function addMovie(req, res) {
    const movie = req.body
    try {
        const movieToReturn = await movieService.save(movie)
        res.send(movieToReturn)
    } catch (err) {
        res.status(500).send({ err: 'cannot save movie' })
    }
}

async function updateMovies(req, res) {
    const movies = req.body

    try {
        const moviesToReturn = await movieService.updateCollection(movies)
        res.send(moviesToReturn)
    } catch (err) {
        res.status(500).send({ err: 'cannot update movies' })
    }
}

// delete movie

async function removeMovie(req, res) {
    // delete the movie from the collection through service
}


module.exports = {
    getMovies,
    getMoviebyId,
    updateMovie,
    updateMovies,
    addMovie
}