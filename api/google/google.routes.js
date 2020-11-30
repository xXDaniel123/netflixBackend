const express = require('express')
const router = express.Router()
const { verifyToken } = require('./google.controller')

router.post('/signup', verifyToken)

module.exports = router