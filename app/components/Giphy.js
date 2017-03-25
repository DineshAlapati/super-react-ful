/**
 * Created by dines on 2017-03-22.
 */
var React = require('react');

var GiphyComponent = React.createClass({
  render: function () {
    return (
      <div>
        <h1>TELUS Instasearch</h1>
        <img src={this.props.imageUrl}/>
      </div>
    );
  }
});


module.exports = GiphyComponent;