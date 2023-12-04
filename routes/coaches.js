const express = require('express')
const router = express.Router()
const coachesCtrl = require('../controllers/coaches')

router.get('/new', coachesCtrl.new)

router.get('/:id', coachesCtrl.show)

router.get('/', coachesCtrl.index)

router.post('/', coachesCtrl.create)

router.post('/games/:id/coaches', coachesCtrl.addToGame)

module.exports = router