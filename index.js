const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;

mongoose.connect('mongodb://localhost/links')

app.get("/" , (req , res) => res.send("Hello World"));

app.listen(PORT , () => {
    console.log("Server is running on port" , PORT);
})