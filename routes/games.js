const express = require('express');
const router = express.Router();
const gamesCtrl = require('../controllers/games')

/* GET games listing. */
// router.get('/', function(req, res, next) {
  // res.send('respond with a comment')
// });

router.get('/', gamesCtrl.create)

module.exports = router
