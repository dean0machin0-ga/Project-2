const Coach = require('../models/coach')

module.exports = {
    new: newCoach,
    create,
    index,
    show
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

async function index(req, res) {
    const coaches = await Coach.find({})
    console.log(coaches)
    res.render('coaches/index', { title: "Add Coach", coaches })
}

async function show(req, res) {
    try {
        const coach = await Coach.findById(req.params.id)
        console.log(coach)
        res.render('coaches/show', { title: 'Coach Stats', coach })
    }   catch(err) {
        console.log(err)
        res.redirect('/coaches')
    }
}