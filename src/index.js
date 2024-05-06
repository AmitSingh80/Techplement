const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDB } = require("./db/index")

const quoteRouter = require("./routes/quote.routes")


dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json())


app.get('/ping', (req, res) => {
  res.send('pong')
})

app.use("/quote-v1", quoteRouter)



connectDB();
app.listen(PORT, () => {
  console.log(`Server running at: ${PORT}`);
})

