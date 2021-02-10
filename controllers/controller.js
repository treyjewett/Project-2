// List dependencies here.
var express = require('express');
var router = express.Router();
var tripper = require('../models/tripper.js');

// Create the routes for the app and set up the logic within the routes required.
router.get('/', function(req, res) {
    tripper.selectAll(function(data) {
        var hbsObject = { trip: data };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

//get route to connect addtrip page
router.get('/addTrip', function(req, res) {
    res.render("addTrip", {});
})


// Post route to add a new trip to the table.
router.post('/api/trips', function(req, res) {
    tripper.insertOne(function(result) {
        res.json({ id: result.insertId });
    });
});

module.exports = router;