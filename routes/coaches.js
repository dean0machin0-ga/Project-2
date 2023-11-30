const express = require('express')
const router = express.Router()
const coachesCtrl = require('../controllers/coaches')

router.get('/new', coachesCtrl.new)

module.exports = router