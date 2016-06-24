#! /usr/bin/env node
var runner = require('../lib/index');
var tasks = require(process.cwd() + '/build-tasks.js');
runner(tasks);
