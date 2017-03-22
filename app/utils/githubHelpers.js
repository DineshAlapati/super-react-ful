/**
 * Created by dines on 2017-03-19.
 */

var axios = require('axios');

var helpers = {
  getUserInfo: function (username) {
    return axios
      .get('https://api.github.com/users/' + username, {
        headers: {
          Authorization: "token INSERT_TOKEN"
        }
      })
      .then(function (info) {
        return info.data;
      })
      .catch(function (err) {
        console.warn('Error in getPlayersInfo: ', err);
      });
  }
};

module.exports = helpers;