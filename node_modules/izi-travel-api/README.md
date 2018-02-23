izi-travel-api
=========

A small library that makes the izi-travel-api a little easier
Examples: https://github.com/JustinPMitchell/izi-travel-api-example

## Installation

  `npm install izi-travel-api`

## Usage

  var izi = require('izi-travel-api');

  var clientObject = {};

  /* Objects are rendered and manipulated here */
  function iziCallback(iziObject) {
    /* the iziObject stores information that was difficult to find in the api */
    console.log("CLIENT CODE: " + iziObject.iziTitle[0]);
    clientObject = iziObject;
  }

  /* This call will store one Amsterdam tour object in iziObject */
  izi.iziCall("Amsterdam", apiKey, iziCallback);
  
## Object

    iziObject = {
      iziOriginal: [],
      iziTitle: [],
      iziType: [],
      iziLatitude: [],
      iziLongitude: [],
      iziCountry: [],
      iziDescription: [],
      imageFile: [],
    }

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.