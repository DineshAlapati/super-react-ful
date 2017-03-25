/**
 * Created by dines on 2017-03-22.
 */
var axios = require('axios');
var GiphyUtils = require('./GiphyUtils');
var sinon = require('sinon');
var Promise = require('promise');

describe.only('Giphy utils test', function () {
  var getMock;
  var mockData = {
    data: {
      data: [
        {
          images: {fixed_height: "mock_url1"}
        },
        {
          images: {fixed_height: "mock_url2"}
        }
      ]
    }
  };

  beforeEach(function () {
    getMock = sinon.stub(axios, 'get');
  });
  afterEach(function () {
    getMock.restore();
  });

  test('should return data', function () {
    var resArray = ["mock_url1", "mock_url2"];
    getMock.returns(Promise.resolve(mockData));

    GiphyUtils.getData('doesnt matter').then(function (data) {
      expect(data).toEqual(resArray);
    })
  });
});