const mongoose = require("mongoose")

const quoteSchema = mongoose.Schema({

    quote: {
        type: String,
        require: true,
    },
    author: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Quote", quoteSchema)