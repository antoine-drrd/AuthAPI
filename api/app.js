const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// Import User Model
const UserModel = require("./model/user");

// Register
app.post("/register", async (req, res) => {
    try {

        // User input
        const { firstName, lastName, email, password } = req.body;

        if(!(firstName && lastname && email && password)){
            return res.status(400).json({"message": "all input fields are required"});
        }

        // Checking if user already exists
        const oldUser = await UserModel.findOne({ email });

        if(oldUser){
            return res.status(409).json({"message": "email already exists"});
        }

        salt = await bcrypt.genSaltSync();
        hashedPass = await bcrypt.hash(password, salt);


    } catch(err){
        console.log(err);
    }
});

// Login
app.post("/login", (req, res) => {

});

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Authentication api</h1>");
})

module.exports = app;