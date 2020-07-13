const express = require('express')
const router = express.Router()
const UserAuth = require('../utils/authentication/UserAuthentication')
const mailSender = require('../playGround/sendMail')
const auth = require('../middleware/auth').auth


// @route POST userAuth/signup
// @desc signup the user
// @access public
router.post('/signup', (req, res, next) => {
    console.log('entered user signup route')
    UserAuth.signup(req, res, next)
    .then(data => {
        switch(data.type) {
            case "REGISTER_SUCCESS":
                res.status(200).json(data.userData)
                break
            case "EXIST_ERR":
                res.status(409).json(data)
                break
            case "DB_ERR":
                res.status(500).json(data)
                break
            default: 
                console.log("default case", data)
        }
    })
    .catch(err => {console.log(err)})
})

// @route POST userAuth/signin
// @desc signin the user
// @access public
router.post('/signin', (req, res, next) => {
    console.log("entered user signin route")
    UserAuth.login(req, res, next) 
    .then(data => {
        switch(data.type) {
            case "LOGIN_SUCCESS":
                res.status(200).json(data.userData)
                break
            case "NOTFOUND_ERR":
                res.status(404).json(data)
                break
            case "INCORRECT_ERR":
                res.status(401).json(data)
                break
            default: 
                console.log("signin default case", data)
        }
    })
    .catch(err => console.log(err))
})

// @route GET userAuth/getUser
// @desc get the user data
// @access auth
router.get('/getUser', auth, (req, res, next) => {
    console.log("entered get user route")
    UserAuth.getUser(req, res, next)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(err => {
        console.log("get user error", err)
        res.json(err)
    })
})

router.post('/sendToUserMail', auth, (req, res, next) => {
    let data = req.body.data
    mailSender(data.name, data.mail, data.subject, data.message)
    .then(res => {
        console.log(res)
    })
})

module.exports = router