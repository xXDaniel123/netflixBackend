const bcrypt = require('bcrypt')
const userService = require('../user/user.service')
const saltRounds = 10

async function login(email, password) {

    if(!email || !password) return Promise.reject('email or password missing')
    const user = await userService.getUserByEmail(email)
    if(!user) return Promise.reject('no such user found')
    const match = await bcrypt.compare(password, user.password)
    if(!match) return Promise.reject('incorrect password')

    // if succeded in login in
    console.log('login successful USER:', user)
    delete user.password
    return user
}

async function signUp(email, password, fullName, imgUrl){

    if(!email || !password || !fullName) return Promise.reject('details are missing')
    const hash = await bcrypt.hash(password, saltRounds)
    const savedUser = await userService.saveUser({ email, password: hash, fullName, imgUrl })
    return savedUser
}

async function googleLogin(email){
    
}

module.exports = {
    login,
    signUp,
    googleLogin
}