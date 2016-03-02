## Introduction

This document specifies the WebAssembly AST Object types.

## Objects

```js
{
  kind: 'assert_invalid',
  module: <module>,
  failure: <failure>
}
```
```js
{
  kind: 'assert_return_nan',
  invoke: <invoke>
}
```
```js
{
  kind: 'assert_return',
  invoke: <invoke>,
  expr: Object
}
```
```js
{
  kind: 'assert_trap',
  invoke: <invoke>,
  failure: <failure>
}
```
```js
{
  kind: 'binop',
  type: <type>,
  left: Object,
  right: Object
}
```
```js
{
  kind: 'block',
  id: <literal> | <identifier>,
  body: [ ]
}
```
```js
{
  kind: 'br_if',
  id: <literal> | <identifier>,
  test: Object,
  expr: Object
}
```
```js
{
  kind: 'br',
  id: <literal> | <identifier>,
  expr: Object
}
```
```js
{
  kind: 'call_import',
  id: <literal> | <identifier>,
  expr: Object
}
```
```js
{
  kind: 'call_indirect',
  id: <literal> | <identifier>,
  expr: Object
}
```
```js
{
  kind: 'call',
  id: <literal> | <identifier>,
  expr: Object
}
```
```js
{
  kind: 'case',
  body: [ ]
}
```
```js
{
  kind: 'const',
}
```
```js
{
  kind: 'cvtop',
  type: <type>,
  expr: Object
}
```
```js
{
  kind: 'export',
  id: <literal> | <identifier>
}
```
```js
{
  kind: 'failure'
}
```
```js
{
  kind: 'func',
  id: <literal> | <identifier>,
  param: Object,
  result: Object,
  body: [ ]
}
```
```js
{
  kind: 'get_local',
  id: <literal> | <identifier>
}
```
```js
{
  kind: 'grow_memory',
  expr: Object
}
```
```js
{
  kind: 'has_feature',
}
```
```js
{
  kind: 'identifier',
  id: String
}
```
```js
{
  kind: 'if_else',
  test: Object,
  consequent: Object,
  alternate: Object
}
```
```js
{
  kind: 'if',
  test: Object,
  consequent: Object
}
```
```js
{
  kind: 'import',
  id: <literal> | <identifier>,
  params: [ ]
}
```
```js
{
  kind:
  invoke: <invoke>,
  body: [ ]
}
```
```js
{
  kind: 'item',
  type: <type>
}
```
```js
{
  kind: 'literal',
  value: Number,
  raw: String
}
```
```js
{
  kind: 'load',
  type: <type>,
  expr: Object
}
```
```js
{
  kind: 'local',
  items: [ ]
}
```
```js
{
  kind: 'loop',
  body: [ ],
  'extra'
}
```
```js
{
  kind: 'memory_size'
}
```
```js
{
  kind: 'memory',
  'segment'
}
```
```js
{
  kind: 'module',
  body: [ ]
}
```
```js
{
  kind: 'nop'
}
```
```js
{
  kind: param: Object,
  items: [ ]
}
```
```js
{
  kind: 'relop',
  type: <type>,
  left: Object,
  right: Object
}
```
```js
{
  kind: 'resize_memory',
  expr: Object
}
```
```js
{
  kind: 'result'
}
```
```js
{
  kind: 'return',
  expr: Object
}
```
```js
{
  kind: 'script',
  body: [ ]
}
```
```js
{
  kind: 'segment',
}
```
```js
{
  kind: 'select',
  type: <type>,
  test: Object,
  consequent: Object,
  alternate: Object
}
```
```js
{
  kind: 'set_local',
  id: <literal> | <identifier>,
  init: Object
}
```
```js
{
  kind: 'start',
  id: <literal> | <identifier>
}
```
```js
{
  kind: 'store',
  type: <type>,
  addr: String,
  data: String
}
```
```js
{
  kind: 'table',
  items: [ ]
}
```
```js
{
  kind: 'tableswitch',
  id: <literal> | <identifier>,
  test: Object,
  table: [ ],
  body: [ ]
}
```
```js
{
  kind: 'type',
  id: <literal> | <identifier>
}
```
```js
{
  kind: 'unop',
  type: <type>,
  operator: String
  expr: Object
}
```
```js
{
  kind: 'unreachable'
}
```
