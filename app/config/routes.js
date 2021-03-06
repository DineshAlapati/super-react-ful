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
var ConfirmBattleContainer = require('../containers/ConfirmBattleContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path="/playerOne" header="Player One" component={PromptContainer}/>
      <Route path="/playerTwo/:playerOne" header="Player Two" component={PromptContainer}/>
      <Route path="/battle" component={ConfirmBattleContainer}/>
    </Route>
  </Router>
);

module.exports = routes;