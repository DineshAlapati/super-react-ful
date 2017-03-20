/**
 * Created by dines on 2017-03-19.
 */
var React = require('react');

var Main = React.createClass({
  render: function () {
    return (
      <div className="main-container">
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;