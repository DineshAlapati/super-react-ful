/**
 * Created by dines on 2017-03-22.
 */
var axios = require('axios');

var getData = function () {
  var url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";
  return axios.get(url).then(function (result) {
      console.log(result);
      return result.data.data.map(function (elm) {
        return elm.images.fixed_height.url;
      });
    })
    .then(function (resArray) {
      return resArray;
    })
    .catch(function (err) {
      console.warn(err);
    })
};

module.exports = {
  getData: getData
};