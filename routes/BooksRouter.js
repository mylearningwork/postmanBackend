const express = require('express')
const router = express.Router()
const BookCtrl = require('../controllers/BookCtrl')

module.exports = router

router.get('/selectAll', (req, res, next) => {
    BookCtrl.selectAllBooks(req, res, next)
        .then(Books => {
            res.status(200).json(Books)
        })
        .catch(err => {
            res.status(404).json(err)
        })
})


router.get('/selectOne',(req,res,next) => {
    BookCtrl.selectOne(req,res,next).then(users =>{
        res.status(200).json(users)
    }).catch(err =>{
        res.status(404).json(err)
    })

})

router.get("/findById",(req,res,next)=>{
    BookCtrl.selectById(req,res,next).then(users =>{
        res.status(200).json(users)
    }).catch(err =>{
        res.status(404).json(err)
    })
})

router.post('/insert', (req, res, next) => {
    console.log("accessing Book insert")
    BookCtrl.insert(req, res, next)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            res.status(505).json(err)
        })
})


