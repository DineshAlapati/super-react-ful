/**
 * Created by dines on 2017-03-19.
 */

var axios = require('axios');

var id = "";
var sec = "";
var param = "?client_id=" + id + "&client_secret=" + sec;

var getUserInfo = function (username) {
  return axios.get('https://api.github.com/users/' + username + param)
};

var helpers = {
  getPlayersInfo: function (players) {
    return axios
      .all(players.map(function (username) {
        return getUserInfo(username);
      }))
      .then(function (info) {
        return info.map(function (user) {
          return user.data;
        });
      })
      .catch(function (err) {
        console.warn('Error in getPlayersInfo: ', err);
      });
  }
};

module.exports = helpers;