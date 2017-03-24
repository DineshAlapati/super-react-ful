/**
 * Created by dines on 2017-03-22.
 */
var React = require('react');

var GiphyComponent = React.createClass({
  render: function () {
    return (
      <div>
        <div>TELUS Instasearch</div>
        <img src={this.props.imageUrl}/>
      </div>
    );
  }
});


module.exports = GiphyComponent;