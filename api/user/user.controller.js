const userService = require('./user.service')

async function getUser(req, res){
    const user = await userService.getUserByid(req.params.id)
    res.send(user)
}

async function updateUser(req, res) {
    const user = req.body
    await userService.updateUser(user)
    res.send(user)
}

async function deleteUser(req, res) {
    await userService.deleteUser(req.params.id)
    res.end()
}

module.exports = {
    getUser,
    deleteUser,
    updateUser
}