/**
 * Created by dines on 2017-03-19.
 */
var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles/index');
var Link = require('react-router').Link;

var puke = function (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
};

var ConfirmBattle = function (props) {
  return props.isLoading ?
    <p>LOADING!</p> :
    <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      <h1>Confirm Players</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <div className="col-sm-6">
          <p className="Lead">Player 1</p>
          {puke(props.playersInfo[0])}
        </div>
        <div className="col-sm-6">
          <p className="Lead">Player 2</p>
          {puke(props.playersInfo[1])}
        </div>
      </div>
      <div className="col-sm-8 col-sm-offset-2">
        <div className="col-sm-12" style={styles.space}>
          <button type="button" className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>
            Initiate Battle!
          </button>
        </div>
        <div className="col-sm-12" style={styles.space}>
          <Link to="/playerOne">
            <button type="button" className="btn btn-lg btn-danger">
              Reselect Players
            </button>
          </Link>
        </div>
      </div>
    </div>;
};

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
};

module.exports = ConfirmBattle;