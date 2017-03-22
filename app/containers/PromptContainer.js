var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      username: ""
    }
  },
  handleUpdateUser: function (e) {
    this.setState({
      username: e.target.value
    })
  },
  handleSubmitUser: function (e) {
    e.preventDefault();
    var username = this.state.username;

    this.setState({
      username: ''
    });

    this.context.router.push({
      pathname: '/userInfo',
      query: {
        username: this.state.username
      }
    });
  },
  render: function () {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        username={this.state.username}
      />
    );
  }
});

module.exports = PromptContainer;