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

//workexperience schema

const ExperienceSchema = new mongoose.Schema({
    companyname: {
        type: String,
        required: [true, "Du måste ange företagsnamnet"],
    },
    jobtitle: {
        type: String,
        required: [true, "Du måste ange jobbtitel"],
    },
    location: {
        type: String,
        required: [true, "Du måste ange ort"],
    },
    startdate: {
        type: Date,
        required: [true, "Du måste ange startdatum"],
    },
    enddate: {
        type: Date,
        required: [true, "Du måste ange slutdatum"],
    },
    description: {
        type: String,
        required: [true, "Du måste ange beskrivning"],
    }
})

//inkludera schemat till databasen
const Experience = mongoose.model("Workexperience", ExperienceSchema);

//routing
app.get('/api', async (req, res) => {
    res.json({message: "welcome to this API"});
});

//inhämta data
app.get("/workexperience", async (req, res) => {
    try {
        let result = await Experience.find({});
        return res.json(result);
    }catch(error) {
        return res.status(500).json(error);
    }
});

//lägga till data
app.post("/workexperience", async(req, res) => {
    try {
        let result = await Experience.create(req.body);
        return res.json(result);
    }catch(error) {
        return res.status(400).json(error);
    }
});

//radera data
app.delete("/workexperience:id", async (req, res) => {
    try {
        let result = await Experience.deleteOne({ _id: req.params.id});
        if (result.deletedCount === 1) {
            return res.json({message: "Posten har raderats"});
        } else {
            return res.json(404).json({message: "Kunde inte hitta posten"});
        }
    } catch (error) {
        return res.status(500).json(error);
    }
});

app.listen(port, () => {
    console.log("Server startad på port: " + port);
});