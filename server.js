const express = require ("express");
const app = express();
const db = require("./db");
require('dotenv').config();




const bodyParser = require("body-parser");
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;


app.get('/', (req,res) => {

    res.send("hello sir welcome to my hotel ! how can i help you ???");
})


const personRoutes = require("./routes/personRoutes");
app.use('/person', personRoutes);



const menuRoutes = require("./routes/menuRoutes");
app.use('/menu', menuRoutes);




app.listen(PORT, () => {

    console.log("server started!!");
})