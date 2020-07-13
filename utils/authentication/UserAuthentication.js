const User = require('../../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UserCtrl = require('../../controllers/UserCtrl')

const JwtSecretKey = "PIJA13OJZx??A"

exports.signup = (req, res, next) => {
    return new Promise((resolve, reject) => {
        const email = req.body.email
        User.findOne({email : email})
        .then(user => {
            if(user) resolve({msg: "User already exists", type: "EXIST_ERR"})
            else {
                bcrypt.hash(req.body.password, 11)
                .then(hashedPass => {
                    req.body.password = hashedPass
                    UserCtrl.insert(req, res, next)
                    .then(user => {
                        console.log("registered user", user)
                        if(!user) {
                            resolve({msg: "Registration error", type: "DB_ERR"})
                        }
                        else {
                            jwt.sign(
                                {id: user.id, email: user.email, type: user.type},
                                JwtSecretKey,
                                {expiresIn: '1h'},
                                (err, token) => {
                                    if(err) throw err
                                    resolve(
                                        {
                                            userData: {
                                                token,
                                                user: user
                                            },
                                            type: 'REGISTER_SUCCESS'
                                        }
                                    )
                                }
                            )
                        }
                    })
                })
                .catch(err => {console.log(err)})
            }
        })
        .catch(err => {console.log(err)})
    })
}

exports.login = (req, res, next) => {
    return new Promise((resolve, reject) => {
        const email = req.body.email
        const password = req.body.password
        User.findOne({email: email})
        .then(user => {
            if(!user) resolve({msg: "No user with this email", type: "NOTFOUND_ERR"})
            else {
                bcrypt.compare(password, user.password)
                .then(doMatch => {
                    if(!doMatch) resolve({msg: "Email or password are incorrect", type: "INCORRECT_ERR"})
                    else {

                        // const sign = (userData, secretKey, expObject, callback) {
                        //     //taking the userData and the secretKey and we are creating a token with these two
                        //     const err, token = createToken(userData, secretKey, expObject)
                        //     //calling callback function and giving it err, token
                        //     callback(err, token)
                        // }

                        jwt.sign(
                            {id: user.id, email: user.email, type: user.type},
                            JwtSecretKey,
                            {expiresIn: '1h'},
                            //callback
                            (err, token) => {
                                if(err) throw err
                                resolve({
                                    userData: {
                                        token,
                                        user: user,
                                    },
                                    type: "LOGIN_SUCCESS"
                                })
                            },
                        )
                    }
                })
                .catch(err => console.log(err))
            }
        })
        .catch(err => console.log(err))
    })
}

exports.getUser = (req, res, next) => {
    return new Promise((resolve, reject) => {
        User.findById(req.user.id)
        .select('-password')
        .then(user => resolve(user))
        .catch(err => reject(err))
    })
}

