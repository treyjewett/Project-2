const express = require('express');
var exphbs = require("express-handlebars");
const connection = require('./config/connection');

var PORT = process.env.PORT || 3001

var app = express();

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
// Serve index.handlebars to the root route.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



//listener
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });