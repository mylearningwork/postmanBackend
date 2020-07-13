const router = require('express').Router()
const fetch = require('node-fetch')
const UserCtrl = require('../controllers/UserCtrl')

// @route GET weather/getAll
// @desc get the weather data
// @access public
router.get('/getAll', async (req, res, next) => {
    const lat = req.query.lat
    const lng = req.query.lng020
    //call our api
    let url = "https://api.darksky.net/forecast/38b0f1d57a7dbb6ebd33cfa89ebd8577/"+lat+","+lng
    let response = await fetch(url)
    let data = await response.json()
    req.data = data
    // UserCtrl.insertWeather(req, res, next)
    res.json(data)
})





module.exports = router