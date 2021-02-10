// List dependencies here.
var express = require('express');
var router = express.Router();
var tripper = require('../models/tripper.js');
const request = require('request');
var axios = require("axios").default;

// Create the routes for the app and set up the logic within the routes required.
router.get('/', function(req, res) {
    tripper.selectAll(function(data) {
        var hbsObject = { trip: data };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

//get route to connect addtrip page
router.get('/trip', function(req,res) {
    res.redirect("addTrip")
})


// Post route to add a new trip to the table.
router.post('/api/trips', function(req, res) {
    tripper.insertOne(function(result) {
        res.json({ id: result.insertId });
    });
});

//pexels api
router.get('/api/pexels/:query', function(req, res) {
    const destName = req.params.query
    console.log(destName);
    var options = {
        method: 'GET',
        url: 'https://pexelsdimasv1.p.rapidapi.com/v1/search',
        params: {query: destName, locale: 'en-US', per_page: '15', page: '1'},
        headers: {
          authorization: '563492ad6f917000010000014579ed4b2e1848cda35ef6b2313392d5',
          'x-rapidapi-key': '1eaefda46fmsh7f49637a27e8f45p19f2d6jsn2ebdbc6ee733',
          'x-rapidapi-host': 'PexelsdimasV1.p.rapidapi.com'
        }
      };
      
  axios.request(options).then(function (response) {
    res.json(response.data)
	  //console.log(response.data);
  }).catch(function (error) {
	  console.error(error);
  });
})



module.exports = router;



