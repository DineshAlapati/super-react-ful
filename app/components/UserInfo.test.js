/**
 * Created by alapad2 on 3/22/2017.
 */
var React = require('react');
var UserInfo = require('./UserInfo');
var enzyme = require('enzyme');
var shallow = enzyme.shallow;

describe.only('Test UserInfo component', function () {
  var userInfo, onRestartMock, userInformation;

  describe('when component is loading', function () {
    onRestartMock = jest.fn();
    userInformation = {username: "mock-user"};

    beforeEach(function () {
      userInfo = shallow(<UserInfo isLoading={true} onRestart={onRestartMock} userInfo={userInformation}/>);
    });

    afterEach(function () {
      onRestartMock.mockClear();
    });

    test('should render component', function () {
      expect(userInfo.exists());
    });

    test('should show loading text', function () {
      expect(userInfo.find('p').text()).toEqual('LOADING!')
    });
  });

  describe('when component is loaded', function () {
    onRestartMock = jest.fn();
    userInformation = {username: "mock-user"};

    beforeEach(function () {
      userInfo = shallow(<UserInfo isLoading={false} onRestart={onRestartMock} userInfo={userInformation}/>);
    });

    afterEach(function () {
      onRestartMock.mockClear();
    });

    test('should render component', function () {
      expect(userInfo.exists());
    });

    test('should show Github text', function () {
      expect(userInfo.find('h1').text()).toEqual('Github')
    });
  });
});