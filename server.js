const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3003;

app.use(cors());
app.use(express.json());

//connecta till databasen via mongoose
mongoose.connect("mongodb://127.0.0.1:27017/cv").then(() => {
    console.log("connected to MongoDB");
}).catch((error) => {
    console.log("error connecting to the database: " + error);
})

