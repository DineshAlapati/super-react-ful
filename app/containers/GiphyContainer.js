/**
 * Created by dines on 2017-03-22.
 */
var React = require('react');
var GiphyComponent = require('./../components/Giphy');
var GiphyUtils = require('../utils/GiphyUtils');

var GiphyContainer = React.createClass({
  getInitialState: function () {
    return {
      imageUrl: ""
    }
  },
  componentDidMount: function () {
    GiphyUtils.getData()
      .then(function (data) {
        this.setState({
          imageUrl: data[0]
        })
      }.bind(this))
  },
  render: function () {
    return (
      <GiphyComponent
        imageUrl={this.state.imageUrl}
      />
    )
  }
});

module.exports = GiphyContainer;