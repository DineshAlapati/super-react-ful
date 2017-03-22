/**
 * Created by dines on 2017-03-21.
 */
var React = require('react');
var enzyme = require('enzyme');
var shallow = enzyme.shallow;
var Home = require('./Home');

describe('Test Home Component', function () {
  var home;
  beforeEach(function() {
    home = shallow(<Home/>);
  });

  it('should render', function() {
    expect(home.exists());
  });

  it('should have 3 child elements', function() {
    expect(home.find('div').children().length).toEqual(3);
  });
});
