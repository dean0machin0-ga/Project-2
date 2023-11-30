const Coach = require('../models/coach')

module.exports = {
    new: newCoach,
    create,
}

function newCoach(req, res) {
    res.render("coaches/new", { title: "Add Coach", errorMsg:"" })
}

async function create(req, res) {
    req.body.currentCoach = !! req.body.currentCoach
}