const router = require('express').Router();
const {requireAdmin} = require('../../middlewares/requireAuth.middleware')
const { getMovies, getMoviebyId, updateMovie, addMovie, updateMovies } = require('./movie.controller')

router.put('/:id', requireAdmin, updateMovie) 
router.get('/:id', getMoviebyId)
router.post('/update', requireAdmin, updateMovies) 
router.get('/', getMovies)
router.post('/', requireAdmin, addMovie) 

// adding routes to delete, reorder of the array, and add
// all these routes need to be protected and authorized

module.exports = router
