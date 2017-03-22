/**
 * Created by dines on 2017-03-21.
 */
var React = require('react');
var enzyme = require('enzyme');
var shallow = enzyme.shallow;
var Prompt = require('./Prompt');

describe('Test Prompt Component', function () {
  var prompt;
  var onUpdateMock = jest.fn();
  var onSubmitMock = jest.fn();
  var mockUsername = "mock user";

  beforeEach(function () {
    prompt = shallow(<Prompt onUpdateUser={onUpdateMock} onSubmitUser={onSubmitMock} username={mockUsername}/>);
  });

  test('should render', function () {
    expect(prompt.exists());
  });

  test('should have h1 property defined', function () {
    expect(prompt.find('h1').text()).toEqual("READY?");
  });
});