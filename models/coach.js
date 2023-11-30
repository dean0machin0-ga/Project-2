const mongoose = require("mongoose")
const Schema = mongoose.Schema

const coachSchema = new Schema({
    name: { type: String, required: true },
    experience: Number,
    employed: { type: Boolean, required: true},
    currentTeam: { type: String, required: true }
    }, {
    timestamps: true
    })

const Coach = mongoose.model("Coach", coachSchema)
module.exports = Coach 