const Game = require('../models/game')

module.exports = {
    create,
}

async function create(req, res) {
    req.body.currentGame = !!req.body.currentGame
    for(let key in req.body) {
        if(req.body[key] === "") {
            delete req.body[key]
        }
        try {
            await Game.create(req.body)
            res.redirect("/games/")
            const newGame = await Game.create(req.body)
            console.log(newGame)
            res.redirect(`/gamess/${currentGame._id}`)
        }   catch (err) {
            console.log(err)
            res.render("gamess/new", { errorMsg: err.message })
        }
    }
}