const mongoose = require("mongoose")

const connectDB = async () => {
   try {
    const connectionString =  await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`);
    console.log(`Database Connected: ${connectionString.connection.host}`);
   } catch (error) {
    throw new Error(`Database connection failed: ${error}`)
   }
}

module.exports = { connectDB }


