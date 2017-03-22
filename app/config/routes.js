/**
 * Created by dines on 2017-03-19.
 */
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var hashHistory = ReactRouter.hashHistory;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');
var PromptContainer = require('../containers/PromptContainer');
var UserInfoContainer = require('../containers/UserInfoContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path="/prompt" component={PromptContainer}/>
      <Route path="/userInfo" component={UserInfoContainer}/>
    </Route>
  </Router>
);

module.exports = routes;