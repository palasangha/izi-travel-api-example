/*api call*/
var izi = require('izi-travel-api');
require("dotenv").config();

var clientObject = {};

/* Objects are rendered here */
function iziCallback(iziObject) {
  console.log("CLIENT CODE: " + iziObject.iziTitle[0]);
  clientObject = iziObject;
}

function callApi() {
  console.log("hello, world");
}

// console.log("this is api: ", process.env.IZI_API);
izi.iziCall("Amsterdam", "ded2b49e-e1f0-4917-a0c9-aeea61529c75", iziCallback);
/*end api call*/