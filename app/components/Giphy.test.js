/**
 * Created by dines on 2017-03-22.
 */
var React = require('react');
var Giphy = require('./Giphy');
var enzyme = require('enzyme');
var shallow = enzyme.shallow;

describe('Test Giphy component', function () {
  var giphy;
  beforeEach(function () {
    giphy = shallow(<Giphy/>);
  });

  test('should render', function () {
    expect(giphy.exists());
  });

  test('should get H1 text', function () {
    expect(giphy.find(h1).text()).toEqual("TELUS Instasearch");
  })
});