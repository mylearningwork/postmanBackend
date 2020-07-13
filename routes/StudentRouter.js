const express = require('express')
const router = express.Router()
const StudentCtrl = require('../controllers/StudentCtrl')

module.exports = router

router.get('/getStudents', (req, res, next) => {
    StudentCtrl.selectAllStudents(req, res, next)
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        res.status(404).json(err)
    })
})


router.get('/selectOne',(req,res,next) => {
    StudentCtrl.selectOne(req,res,next).then(users =>{
        res.status(200).json(users)
    }).catch(err =>{
        res.status(404).json(err)
    })

})



