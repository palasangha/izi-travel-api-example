izi-travel-api
=========

A small library that makes the izi-travel-api a little easier

## Installation

  `npm install izi-travel-api`

## Usage

  var izi = require('izi-travel-api');
  
  izi.cityData('Seattle', "{api-key-goes-here}")
    .then(data => test = data[0].uuid) // JSON from `response.json()` call
  
  Output should be `a87015a4-0d8f-462e-aa9c-42a0a21f6b9c`


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.