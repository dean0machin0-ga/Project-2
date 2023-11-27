const mongoose = require('mongoose')
const Schema = mongoose.Schema

const huskySchema = new Schema({
    Schedule: String,
    record: Number,
    pastRecord: Number,
}, {
    timestamps: true
})

const scoreSchema = new Schema({
    finalScore: Number,
    quarterlyScore: Number,
}, {
    timestamps: true
})

const standingsSchema = new Schema({
    pac12Standings: Number,
    apTop25: Number,
    cfpTop25: Number
}, {
    timestamps: true
})

module.exports = mongoose.model('huskys', huskySchema)
module.exports = mongoose.model('huskys', scoreSchema)
module.exports = mongoose.model('huskys', standingsSchema)