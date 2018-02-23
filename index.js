//express stuff
require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var ejsLayouts = require("express-ejs-layouts");
var app = express();
var izi = require('izi-travel-api');


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false}));
app.use(ejsLayouts);
app.use(express.static(__dirname + "/public/"));

app.get("/", function(req, res) {
  res.render("home");
});

/*api call*/
var clientObject = {};

/* Objects are rendered here */
function iziCallback(iziObject) {
  console.log("FINISHED!!!! CLIENT CODE(first title): " + iziObject.iziTitle[0]); 
  clientObject = {};
  clientObject = iziObject;
  app.get("/city", function(req, res) {
    res.render("city", {city: clientObject});
  });
}

app.post('/city', function(req, res) {
  var city = req.body.city.replace(" ", "%20");
  izi.iziCall(city, process.env.IZI_API, iziCallback);
  setTimeout(function() {res.redirect("/city");}, 90000);
});

/*end api call*/

app.listen(3000);