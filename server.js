const express = require('express');

var app = express();
var PORT = process.env.PORT || 3001

// Requiring our models for syncing
var db = require("./models");


// require('dotenv').config();


//=================================OLD===============================================
//const connection = require('./config/connection');

// connection.connect(function(err) {
//     if (err) {
//       console.error("error connecting: " + err.stack);
//       return;
//     }
//     console.log("connected as id " + connection.threadId);
//   });
//==================================================================================

app.use(express.static("public"));

//parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//routes
require("./routes/routes.js")(app);

//=================================OLD===============================================
// var router = require("./controllers/controller.js");
// const { response } = require('express');
// app.use(router);
//==================================================================================




//listener
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

//=================================OLD===============================================
// app.listen(PORT, function() {
//     console.log("Server listening on: http://localhost:" + PORT);
//   });
//==================================================================================



