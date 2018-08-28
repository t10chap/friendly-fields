// Set Up Express

const express = require("express")
const app = express();
app.use(express.json());

// Set Up Body Parser

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// CORS

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS', )
    next();
});

// Allow Express To User Public Files

let db = require("./models");
let controllers = require("./controllers");

// API Endpoints

// --------- USERS ---------
app.get("/api/users", controllers.user.getAll);
app.get("/api/user/find", controllers.user.getUser);
app.post("/api/user/create", controllers.user.createUser);



// SERVER

let port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})