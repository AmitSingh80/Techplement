const Quote = require("../models/quote.model");


const createQuote = async (req, res) => {
    try {
        const { quote, author } = req.body;

        if (!quote || !author) {
            return res.status(400).json({
                success: false,
                message: "Please provide valid data"
            })
        }

        const data = await Quote.create({
            quote,
            author
        });

        if (data) {
            res.status(201).json({
                success: true,
                message: "qoute created successfully"
            })
        }


    } catch (error) {
        console.log(`Something went wrong ${error}`);
    }
}

// read all Quotes
const getAllQuotes = async (req, res) => {
    try {
        const quotes = await Quote.find({});
        if (quotes) {
            res.status(200).json({
                success: true,
                message: "All quotes fetched successfully",
                data: quotes
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Something went wrong ${error}`
        });
    }

}

//update Quote

const updateQuote = async (req, res) => {

    try {
        const _id = req.params._id
        if (!_id) {
            return res.status(500).json({
                success: false,
                message: "Something went wrong or invalid ID"
            })
        }

        const quoteInfo = req.body;

        const data = await Quote.findByIdAndUpdate(_id, quoteInfo, {
            new: true
        })

        if (data) {
            res.status(202).json({
                success: true,
                message: "Quote updated successfuly",
                data: data
            })
        }

    } catch (error) {
        res, json(`Not Update ${error}`);
    }
}

//delete Quote

const deleteQuote = async (req, res) => {
    try {
        const { _id } = req.params;
        if (!_id) {
            return res.status(500).json({
                success: false,
                message: "Something went wrong or invalid ID"
            })
        }

        const data = await Quote.findByIdAndDelete({ _id })
        if (data) {
            res.status(200).json({
                staus: true,
                message: "Quote deleted successfully"
            })
        }

    } catch (error) {
        res.json(`delete unsuccessful ${error}`)

    }
}

// search by author name

const searchByNameQuote = async (req, res) => {
    try {
        const { author } = req.query;
        console.log(req.query);
        if (!author) {
            return res.status(500).json({
                success: false,
                message: "Please provide author name"
            })
        }

        const quotes = await Quote.find({ author })

        if (quotes) {
            res.status(200).json({
                success: true,
                message: "quotes fetched successfully",
                data: quotes
            })
        }
    } catch (error) {
        console.log(`Something went wrong ${error}`);
        throw error
    }
}


module.exports = {
    createQuote, deleteQuote,
    getAllQuotes, updateQuote,
    searchByNameQuote
}


