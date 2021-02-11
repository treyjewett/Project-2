const express = require('express');

const connection = require('./config/connection');

var PORT = process.env.PORT || 3001

var app = express();

// require('dotenv').config();

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  

app.use(express.static("public"));

//parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//routes
var router = require("./controllers/controller.js");
const { response } = require('express');
app.use(router);

//listener
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });



  
