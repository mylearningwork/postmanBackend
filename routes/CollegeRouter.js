const express = require('express')
const router = express.Router()
const CollegeCtrl = require('../controllers/CollegeCtrl')

module.exports = router

router.get('/selectAll', (req, res, next) => {
    CollegeCtrl.selectAllColleges(req, res, next)
        .then(Books => {
            res.status(200).json(Books)
        })
        .catch(err => {
            res.status(404).json(err)
        })
})


router.get('/selectOne',(req,res,next) => {
    CollegeCtrl.selectOne(req,res,next).then(users =>{
        res.status(200).json(users)
    }).catch(err =>{
        res.status(404).json(err)
    })

})

router.get("/findById",(req,res,next)=>{
    CollegeCtrl.selectById(req,res,next).then(users =>{
        res.status(200).json(users)
    }).catch(err =>{
        res.status(404).json(err)
    })
})

router.post('/insert', (req, res, next) => {
    console.log("accessing college insert")
    CollegeCtrl.insert(req, res, next)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            res.status(505).json(err)
        })
})

router.post('/deleteAll', (req, res, next) => {
    console.log("accessing college delete")
    CollegeCtrl.delete(req, res, next)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(505).json(err)
        })
})


