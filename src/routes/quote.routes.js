const express = require("express")
const { createQuote, deleteQuote,
    getAllQuotes, updateQuote,
    searchByNameQuote } = require("../controllers/qoute.controllers");


const router = express.Router()



// creating the routers

router.post("/create-quotes", createQuote)


//get all the Quote
router.get("/get-all-quotes", getAllQuotes)


// //update Quote
router.patch("/update-quote/:_id", updateQuote)

// search by author name
router.get("/search-quote", searchByNameQuote)

//delete QUOTE
router.delete("/delete-quote/:_id", deleteQuote)


module.exports = router;