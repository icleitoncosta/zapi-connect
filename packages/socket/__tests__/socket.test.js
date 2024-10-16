'use strict';

const socket = require('..');
const assert = require('assert').strict;

assert.strictEqual(socket(), 'Hello from socket');
console.info('socket tests passed');
