'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

beforeEach(function () {
  return helpers.run(path.join(__dirname, '../generators/app'))
    .withPrompts({ projectName: "test" });
});

describe('generator-codechef:app', function () {
    it('creates files', function () {
        assert.file([
            'test/test.txt',
            'test/main.cpp',
            'test/Makefile'
        ]);
    });
});
