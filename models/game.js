const mongoose = require("mongoose")
const Schema = mongoose.Schema

const gameSchema = new Schema({
    gameDate: { type: Date, required: true },
    homeTeam: {
        type: String, 
        enum: [
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
    ], 
        default: "Washington Huskys",
},
    visitingTeam: {
        type: String,
        enum: [
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
        ], 
        default: "Oregon Ducks",
},

    huskysStarters: [String],
    oppenentsStarters: [String],
    huskysWin: Boolean,
    finalScore: [String],
    huskysQtrlyScore: [String],
    oppenentsQtrlyScore: [String]
    }, 
    {
    timestamps: true
    }
)

const Game = mongoose.model("Game", gameSchema)
module.exports = Game