/**
 * Created by dines on 2017-03-19.
 */
var React = require('react');

var ConfirmBattle = function(props) {
  return props.isLoading ?
    <p>LOADING!</p> :
    <p>Battle Confirm</p>;
};

module.exports = ConfirmBattle;