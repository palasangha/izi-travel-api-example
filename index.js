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

// app.use(require("./api/izi-api.js"));

app.get("/", function(req, res) {
  res.render("home");
});

/*api call*/
var clientObject = {};

/* Objects are rendered here */
function iziCallback(iziObject) {
  console.log("FINISHED!!!! CLIENT CODE(first title): " + iziObject.iziTitle[0]); 
  clientObject = iziObject;
  app.get("/city", function(req, res) {
    res.render("city", {city: clientObject});
  });
}

function callApi() {
  console.log("hello, world");
}

izi.iziCall("Amsterdam", process.env.IZI_API, iziCallback);
/*end api call*/

app.listen(3000);