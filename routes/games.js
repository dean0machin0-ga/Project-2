const express = require('express');
const router = express.Router();
const gamesCtrl = require('../controllers/games')

router.get('/new', gamesCtrl.new)

router.get('/:id', gamesCtrl.show)

router.get('/', gamesCtrl.index)

router.post('/', gamesCtrl.create)

module.exports = router
