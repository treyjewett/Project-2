const express = require('express');

var app = express();

var PORT = process.env.PORT || 3001

// Requiring our models for syncing
var db = require("./models");

// require('dotenv').config();

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

//listener
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});


