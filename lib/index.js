'use strict';

var visitorKeys = require('./visitor-keys.json'),
    basic = require('./basic.json'),
    simple = require('./simple.json'),
    control = require('./control.json'),
    memory = require('./memory.json'),
    type = require('./type.json');

exports.visitorKeys = visitorKeys;

exports.operators = {
    basic: basic,
    simple: simple,
    control: control,
    memory: memory
}

exports.type = type;
