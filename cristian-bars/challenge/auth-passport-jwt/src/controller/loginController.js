const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../model/userModel')

passport.use('signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async(email, passport, done)=> {
    try {
        const user = await User.create({email, password})
        return done(null, user)
    } catch(error) {
        done(error)
    }
}))

passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, async (email,password, done) => {
    try {
        const user = await User.findOne({email})
        if (!user) {
            return done(null, false, {message: 'User not found'})
        }
        
        const validate = await user.isValidPassword(password)
        
        if(!validate){
            return done(null, false, {message: 'Wrong password'})
        }
        
        return done(null, user, {message: 'Login successfully'})
    } catch (error) {
        return done(error)
    }
}))