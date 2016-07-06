#! /usr/bin/env node
require('babel-register');
var runner = require('../lib');
var config = require(process.cwd() + '/build-config.js');
var taskName = process.argv[2];

runner(config.tasks, {taskName: taskName, logger: config.logger});
