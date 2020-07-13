const User = require('../models/User')


// SELECT, UPDATE, INSERT, DELETE, selectByName


exports.selectAll = (req, res, next) => {
    return new Promise((resolve, reject) => {
        User.find()
            .then(users => {
                console.log(users)
                resolve(users)
            })
            .catch(err => {
                reject(err)
            })
    })
}



exports.insert = (req, res, next) => {
    return new Promise((resolve, reject) => {
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            type: req.body.type
        })
        user.save()
            .then(user => {
                resolve(user)
            })
            .catch(err => {
                reject(err)
            })
    })
}

exports.update = (req, res, next) => {
    return new Promise((resolve, reject) => {
        let id = req.body.id
        let firstName = req.body.firstName
        let lastName = req.body.lastName
        let email = req.body.email
        let password = req.body.password
        let type = req.body.type
        User.findById(id)
            .then(user => {
                user.firstName = firstName
                user.lastName = lastName
                user.email = email
                user.password = password
                user.type = type
                user.save()
                    .then(() => {
                        resolve("user updated")
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
            .catch()
    })
}