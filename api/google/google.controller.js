const userService = require('../user/user.service')
const CLIENT_ID = '168447752977-topi06sp3n60pk37e8j5dg91lnjophvi.apps.googleusercontent.com'
const defaultImg = 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1605376196/main-avatar_xukg9p.png'

const {OAuth2Client} = require('google-auth-library');
const googleClient = new OAuth2Client({
    clientId: CLIENT_ID
});

const verifyToken = async (req, res) => {

    const tokenId = req.body.tokenId
    let user;

    try {
        user = await verifyGoogleLogin(tokenId)
        const isAlreadyUser = await userService.getUserByEmail(user.email)

        if (isAlreadyUser){
            req.session.user = isAlreadyUser
            res.json(isAlreadyUser)
        } else {
            const userToSignup = {
                fullName: user.name,
                email: user.email,
                imgUrl: defaultImg,
                password: null
            }
            const userToReturn = await userService.saveUser(userToSignup)
            delete userToReturn.password
            req.session.user = userToReturn
            res.json(userToReturn)
        }
    } catch (err) {
        res.status(500).send({ err: 'could not sign up' })
    }
}

async function verifyGoogleLogin(token) {
    const ticket = await googleClient.verifyIdToken({
        audience: CLIENT_ID,
        idToken: token
    })
    const payload = ticket.getPayload()
    if (payload) return payload
}

module.exports = {
    verifyToken
}