/**
 * Created by dines on 2017-03-19.
 */

var axios = require('axios');

var getUserInfo = function (username) {
  return axios.get('https://api.github.com/users/' + username, {
    headers: {
      Authorization: "token f7608d5a2915878ddbaf64fcf584816a513126cb"
    }
  });
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