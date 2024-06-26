const mongoose = require("mongoose");
require('dotenv').config();


 //const mongurl = process.env.MONGODB_URL_LOCAL;
const mongoURL = process.env.MONGODB_URL;

mongoose.connect(mongoURL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    ssl: true,
    serverSelectionTimeoutMS: 50000, // Increase timeout to 50 seconds
    socketTimeoutMS: 45000,  
   
})

const db = mongoose.connection;


db.on('connected', () => {

    console.log("Connected to MongoDB server");
})

db.on('error', (error) => {

    console.log("MongoDB connection error:",error);
})

db.on('disconnected', () => {

    console.log("MongoDB disconnected");
})


module.exports = db;