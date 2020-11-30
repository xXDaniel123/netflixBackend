const authService = require('./auth.service')
const mainAvatarUrl = 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1605376196/main-avatar_xukg9p.png'

async function login(req, res) {

    const { email, password } = req.body
    try {
        const user = await authService.login(email, password)
        req.session.user = user
        res.json(user)
    } catch (err) {
        res.status(401).send({ error: err })
    }
}

async function signup(req, res) {

    try{ 
        const { email, password, fullName, imgUrl = mainAvatarUrl } = req.body
        await authService.signUp(email, password, fullName, imgUrl)
        const user = await authService.login(email, password)
        req.session.user = user
        res.json(user)
    } catch (err) {
        res.status(500).send({ error: 'could not sign up' })
    }
}

async function logout(req, res){
    try {
        req.session.destroy()
        res.send({ message: 'logged out successfully' })
    } catch (err) {
        res.status(500).send({ error: err })
    }
}

module.exports = {
    login,
    signup,
    logout
}