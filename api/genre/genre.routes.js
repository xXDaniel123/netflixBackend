const router = require('express').Router();
const { getGenres } = require('./genre.controller')

router.get('/', getGenres)
// router.post('/', addGenre)

module.exports = router
