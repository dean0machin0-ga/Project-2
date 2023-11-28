const Game = require('../models/game')

module.exports = {
    new: newGame,
    create,
}

function newGame(req, res) {
    res.render("games/new", { title: "Add Game", errorMsg:"" })
}

async function create(req, res) {
    req.body.currentGame = !!req.body.currentGame
    req.body.starters = req.body.starters.trim()
    if (req.body.starters) req.body.starters = req.body.starters.split(/\s*,\s*/)

    for(let key in req.body) {
        if(req.body[key] === "") 
            delete req.body[key]
        }

        try {
            await Game.create(req.body)
            res.redirect("/games/")
        }   catch (err) {
            console.log(err)
            res.render("games/new", { errorMsg: err.message })
        }
    }