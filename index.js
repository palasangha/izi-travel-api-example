var izi = require('izi-travel-api');

var clientObject = {};

/* Objects are rendered here */
function iziCallback(iziObject) {
  console.log("CLIENT CODE: " + iziObject.iziTitle[0]);
  clientObject = iziObject;
}

izi.iziCall("Amsterdam", process.env.SESSION_SECRET, iziCallback);