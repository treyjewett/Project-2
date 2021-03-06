var axios = require("axios").default;
var db = require("../models");
var passport = require("../config/passport");


module.exports = function (app) {
  //home page
  app.get('/', function (req, res) {
    db.Trip.findAll({
      raw: true,
      attributes: ['author', 'name', 'summary', 'rating']
    }).then(function (data) {
      var hbsObject = { trip: data }
      return res.render('index', hbsObject)
    });
  });

  //login page
  app.get('/login', function (req, res) {
    res.render('login', {});
  });

  //login instance
  app.post('/api/login', passport.authenticate("local"), function(req, res) {
      res.json(req.user);
    });

  //signup page
  app.get('/signup', function(req, res) {
    res.render('signup', {});
  }) 

  //add new user
  app.post('/api/signup', function(req, res) {
    db.User.create({
      username: req.body.username,
      password: req.body.password
    }).then(function(dbUser) {
      res.json(dbUser);
    })
  })

  //addtrip page
  app.get('/addTrip', function (req, res) {
    res.render("addTrip", {});
  })

  //new trip
  app.post('/api/trips', function (req, res) {
    db.Trip.create({
      author: req.body.author,
      name: req.body.name,
      summary: req.body.summary,
      rating: req.body.rating
    }).then(function (dbTrip) {
      res.json(dbTrip);
    });
  });

  //delete trip
  app.delete("/api/trips/:summary", function (req, res) {
    db.Trip.destroy({
      where: {
        summary: req.params.summary
      }
    }).then(function (dbTrip) {
      res.json(dbTrip);
    });
  });

  //pexels api
  app.get('/api/pexels/:query', function (req, res) {
    const destName = req.params.query
    console.log(destName);
    var options = {
      method: 'GET',
      url: 'https://pexelsdimasv1.p.rapidapi.com/v1/search',
      params: { query: destName, locale: 'en-US', per_page: '15', page: '1' },
      headers: {
        authorization: '563492ad6f917000010000014579ed4b2e1848cda35ef6b2313392d5',
        'x-rapidapi-key': '1eaefda46fmsh7f49637a27e8f45p19f2d6jsn2ebdbc6ee733',
        'x-rapidapi-host': 'PexelsdimasV1.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      res.json(response.data)
    }).catch(function (error) {
      console.error(error);
    });
  })
}
