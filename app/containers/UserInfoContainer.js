/**
 * Created by dines on 2017-03-21.
 */
var React = require('react');
var UserInfo = require('../components/UserInfo');
var githubHelpers = require('../utils/githubHelpers');

var UserInfoContainer = React.createClass({
  ContextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getUserDetails: function () {
    var query = this.props.location.query;
    githubHelpers.getUserInfo(query.username)
      .then(function (userData) {
        this.setState({
          isLoading: false,
          userInfo: userData
        });
      }.bind(this));
  },
  getInitialState: function () {
    return {
      isLoading: true,
      userInfo: {}
    }
  },
  componentDidMount: function () {
    this.getUserDetails();
  },
  handleRestart: function () {
    this.context.router.push({
      pathname: '/results'
    });
  },
  render: function () {
    return (
      <UserInfo
        isLoading={this.state.isLoading}
        onRestart={this.handleRestart}
        userInfo={this.state.userInfo}
      />
    );
  }
});

module.exports = UserInfoContainer;