const router = require('express').Router();
const {getUser, updateUser, deleteUser} = require('./user.controller')
const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')

// CRUD
// Create => it's in the auth section because it
// requires special handling

router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id',  requireAuth, requireAdmin, deleteUser)

module.exports = router
