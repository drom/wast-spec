'use strict';

var visitorKeys = require('./visitor-keys.json'),
    binop = require('./binop.json'),
    unop = require('./unop.json'),
    relop = require('./relop.json'),
    cvtop = require('./cvtop.json'),
    _const = require('./const.json'),
    basic = require('./basic.json'),
    simple = require('./simple.json'),
    control = require('./control.json'),
    memory = require('./memory.json'),
    type = require('./type.json');

exports.visitorKeys = visitorKeys;

exports.operators = {
    binop: binop,
    unop: unop,
    relop: relop,
    cvtop: cvtop,
    const: _const,
    basic: basic,
    simple: simple,
    control: control,
    memory: memory
};

exports.type = type;
