/**
 * Created by dines on 2017-03-21.
 */
var sinon = require('sinon');
var githubHelpers = require('./githubHelpers');
var Promise = require('promise');
var axios = require('axios');

describe('githubHelpers', function () {
  var axiosGetStub, consoleWarnSpy;
  describe('getUserInfo', function () {
    beforeEach(function () {
      axiosGetStub = sinon.stub(axios, 'get');
      consoleWarnSpy = sinon.spy(console, 'warn');
    });
    afterEach(function () {
      axiosGetStub.restore();
      console.warn.restore();
    });

    test('should return user info', function () {
      axiosGetStub.returns(Promise.resolve({data: {username: "mock-user"}}));
      githubHelpers.getUserInfo('username-does-not-matter').then(function (res) {
        expect(res).toEqual({username: "mock-user"});
      });
    });
    test('should log warning error', function () {
      axiosGetStub.returns(Promise.reject("Error: Not found"));
      githubHelpers.getUserInfo('username-does-not-matter').catch(function () {
        expect(console.warn).toHaveBeenCalled();
      });
    });
  });
});