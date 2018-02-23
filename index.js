var izi = require('izi-travel-api');

var clientObject = {};

/* Objects are rendered here */
function iziCallback(iziObject) {
  console.log("CLIENT CODE: " + iziObject.iziTitle[0]);
  clientObject = iziObject;
}

izi.iziCall("Amsterdam", "ded2b49e-e1f0-4917-a0c9-aeea61529c75", iziCallback);