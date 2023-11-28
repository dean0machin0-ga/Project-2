const mongoose = require("mongoose")
const Schema = mongoose.Schema

const gameSchema = new Schema({
    gameDate: { type: Date, required: true },
    homeTeam: { type: String, enum: [
        "Washington Huskys",
        "Boise St Broncos", 
        "Tulsa Golden Hurricanes",
        "Michigan St Spartans",
        "Cal Golden Bears",
        "Arizona Wildcats",
        "Oregon Ducks",
        "Arizona St Sun Devils",
        "Stanford Cardinal",
        "USC Trojans",
        "Utah Utes",
        "Oregon St Beavers",
        "Washington St Cougars"
    ], default: "Select team"},

    visitingTeam: { type: String, enum: [
        "Washington Huskys",
        "Boise St Broncos", 
        "Tulsa Golden Hurricanes",
        "Michigan St Spartans",
        "Cal Golden Bears",
        "Arizona Wildcats",
        "Oregon Ducks",
        "Arizona St Sun Devils",
        "Stanford Cardinal",
        "USC Trojans",
        "Utah Utes",
        "Oregon St Beavers",
        "Washington St Cougars"
    ], default: "Select Team"},

    huskysStarters: [String],
    oppenentsStarters: [String],
    win_loss: { type: Boolean, default: true },
    finalScore: { type: [Number] },
    huskysQtrScore: [Number],
    oppQtrScore: [Number]
    }, 
    {
    timestamps: true
    }
)

const Game = mongoose.model("Game", gameSchema)
module.exports = Game