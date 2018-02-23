'use strict';

var expect = require('chai').expect;
var iziApi = require('../index');

describe('#numFormatter', function() {
    /* Does not work, because it needs to be installed in mocha: https://stackoverflow.com/questions/38485826/getting-referenceerror-fetch-is-not-defined-when-running-react-native-tests-in */
    it('should store correct uuid', function() {
        /* Removed api-key for security */
        iziApi.cityData('Seattle', "")
          .then(data => result = data[0].uuid)
          .catch(error => error)
        setTimeout(function(){expect(result).to.equal('a87015a4-0d8f-462e-aa9c-42a0a21f6b9c');}, 5000);
    });

});