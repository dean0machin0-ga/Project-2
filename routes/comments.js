const express = require('express')
const router = express.Router()
const commentsCtrl = require('../controllers/comments')

router.post('/games/:id/comments', commentsCtrl.create)

router.delete('/games/:id/comments/:commentid', commentsCtrl.delete)

// router.put('/games/:id', async (req, res) => {
//     const gameId = req.params.id
//     const updateData = req.body

//     try {
//         const updatedGame = await Game.updateResourceInDatabase(gameId, updateData, {
//         new: true,
//     }).populate('comments')

//     if (!updatedGame) {
//         return res.status(404).json({ error: 'Game not found' });
//     }

//     res.json(updatedGame)
//     } catch (err) {
//     console.log(err)
//     res.status(500).json({ error: 'Internal Server Error' });
//     }
// })

module.exports = router