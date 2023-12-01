const Game = require('../models/game')

module.exports = {
    create,
    delete: deleteComment
}

async function create(req, res) {
    const game = await Game.findById(req.params.id)
    game.comments.push(req.body)
    console.log(req.body)

    try {
        await game.save()
        console.log(game)
    } catch(err) {
        console.log(err)
    }
    res.redirect(`/games/${game._id}`)
}

async function deleteComment(req, res) {
    const game = await Game.findById(req.params.id)
    if (!game) return res.redirect('/games')
    game.comments.remove({_id:req.params.commentid})
    await game.save()
    res.redirect(`/games/${game._id}`)
}