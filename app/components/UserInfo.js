/**
 * Created by dines on 2017-03-21.
 */
var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles/index');
var Link = require('react-router').Link;

var puke = function (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
};

var UserInfo = function (props) {
  return props.isLoading ?
    <p>LOADING!</p> :
    <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      <h1>Github</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <p className="Lead">User Details</p>
        {puke(props.userInfo)}
      </div>
      <div className="col-sm-8 col-sm-offset-2" style={styles.space}>
        <Link to="/prompt">
          <button type="button" className="btn btn-lg btn-success">
            Restart!
          </button>
        </Link>
      </div>
    </div>;
};

UserInfo.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onRestart: PropTypes.func.isRequired,
  userInfo: PropTypes.object.isRequired
};

module.exports = UserInfo;