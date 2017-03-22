/**
 * Created by dines on 2017-03-21.
 */
var React = require('react');
var enzyme = require('enzyme');
var shallow = enzyme.shallow;
var Main = require('./Main');

describe('Test Main Component', function () {
  it('should render', function() {
    var main = shallow(<Main/>);
    expect(main.exists());
  });
});
