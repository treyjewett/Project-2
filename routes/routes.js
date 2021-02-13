var axios = require("axios").default;
var db = require("../models");

//home page
module.exports = function(app) {
    
app.get('/', function(req, res) {
    db.Trip.findAll({
      raw:true,
      attributes: ['author', 'name', 'summary', 'rating']
    }).then(function(data) {
      //console.log(data)
      var hbsObject = {trip: data}
      return res.render('index', hbsObject)
    })
});

//addtrip page
app.get('/addTrip', function(req, res) {
    res.render("addTrip", {});
})

//new trip
app.post('/api/trips', function(req, res) {
    db.trip.Create({
        author: req.body.author,
        name: req.body.name,
        summary: req.body.summary,
        rating: req.body.rating
    }).then(function(dbTrip) {
        res.json(dbTrip);
    });
});

//pexels api
app.get('/api/pexels/:query', function(req, res) {
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


}
