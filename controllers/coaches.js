const Coach = require('../models/coach')

module.exports = {
    new: newCoach,
}

function newCoach(req, res) {
    res.render("coaches/new", { title: "Add Coach", errorMsg:"" })
}