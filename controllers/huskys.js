const Husky = require('../models/husky')

module.exports = {
    index,
}

async function index(req, res) {
    try {
        const record = await Husky.find({})
        res.render("huskys/index", { title: "Overall record", huskys: record})
    } catch (err) {
        console.log(err)
        res.redirect("/")
    }
}