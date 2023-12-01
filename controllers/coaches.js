const Coach = require('../models/coach')

module.exports = {
    new: newCoach,
    create,
}

function newCoach(req, res) {
    res.render("coaches/new", { title: "Add Coach", errorMsg:"" })
}

async function create(req, res) {
    console.log(req.body)
    req.body.currentCoach = !! req.body.currentCoach

    if(req.body.employed === 'on') {
        req.body.employed = 'true'
    }   else {
        req.body.employed = 'false'
    }

    for(let key in req.body) {
        if(req.body[key] === "") 
            delete req.body[key]
    }
    
    try {
        await Coach.create(req.body)
        res.redirect('/coaches')
    }   catch (err) {
        console.log(err)
        res.render('coaches/new', { errorMsg: err.message })
    }
}