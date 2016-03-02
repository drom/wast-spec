## Introduction

This document specifies the WebAssembly AST node types.
Spec directly reflects [AstSemantics](https://github.com/WebAssembly/design/blob/master/AstSemantics.md)
document.

## Types

[types](https://github.com/WebAssembly/design/blob/master/AstSemantics.md#types)

## Objects

[module](https://github.com/WebAssembly/design/blob/master/Modules.md)

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
  operator: String,
  left: Object,
  right: Object
}
```

```js
{
  kind: 'block',
  id: <literal> | <identifier>,
  body: [ Object ]
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
  body: [ Object ]
}
```

```js
{
  kind: 'const',
  type: <type>,
  init: String
}
```

```js
{
  kind: 'cvtop',
  type: <type>,
  type1: <type>,
  operator: String,
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
  body: [ Object ]
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
  consequent: Object,
  alternate: null
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
  kind: 'invoke',
  name: String,
  body: [ Object ]
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
  value: Integer,
  raw: String
}
```

[load](https://github.com/WebAssembly/design/blob/master/AstSemantics.md#linear-memory-accesses)

```js
{
  kind: 'load',
  type: <type>,
  size: 8 | 16 | 32,
  sign: 's' | 'u' | null,
  offset: Integer,
  align: Integer,
  expr: Object
}
```

```js
{
  kind: 'local',
  items: [ <item> ]
}
```

```js
{
  kind: 'loop',
  id: <literal> | <identifier>,
  extra: <extra>,
  body: [ Object ]
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
  body: [ Object ]
}
```

```js
{
  kind: 'nop'
}
```

```js
{
  kind: 'page_size'
}
```

```js
{
  kind: 'param',
  items: [ <item> ]
}
```

```js
{
  kind: 'relop',
  type: <type>,
  operator: String,
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
  body: [ Object ]
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

[store](https://github.com/WebAssembly/design/blob/master/AstSemantics.md#linear-memory-accesses)

```js
{
  kind: 'store',
  type: <type>,
  size: 8 | 16 | 32,
  offset: Integer,
  align: Integer,
  addr: String,
  data: String
}
```

```js
{
  kind: 'table',
  items: [ <item> ]
}
```

```js
{
  kind: 'tableswitch',
  id: <literal> | <identifier>,
  test: Object,
  table: [ Object ],
  body: [ Object ]
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
