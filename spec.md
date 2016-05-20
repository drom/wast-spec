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
  failure: <literal>
}
```

```js
{
  kind: 'assert_return',
  invoke: <invoke>,
  expr: <expr>
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
  kind: 'assert_trap',
  invoke: <invoke>,
  failure: <literal>
}
```

```js
{
  kind: 'binop',
  type: <type>,
  operator: String,
  left: <expr>,
  right: <expr>
}
```

```js
{
  kind: 'block',
  id: <literal> | <identifier> | null,
  body: [ <expr> ]
}
```

```js
{
  kind: 'br',
  id: <literal> | <identifier> | null,
  expr: <expr> | null
}
```

```js
{
  kind: 'br_if',
  id: <literal> | <identifier> | null,
  test: <expr>,
  expr: <expr> | null
}
```

```js
{
  kind: 'br_table',
  expr: [ <literal> | <identifier> | null ],
  body: [ <expr> ]
}
```

```js
{
  kind: 'call',
  id: <literal> | <identifier> | null,
  expr: <expr>
}
```

```js
{
  kind: 'call_import',
  id: <literal> | <identifier> | null,
  expr: <expr>
}
```

```js
{
  kind: 'call_indirect',
  id: <literal> | <identifier> | null,
  expr: <expr>
}
```

```js
{
  kind: 'const',
  type: <type>,
  init: <value>
}
```

```js
{
  kind: 'cvtop',
  type: <type>,
  type1: <type>,
  operator: <cvtop>,
  expr: <expr>
}
```

```js
{
  kind: 'else',
  id: <literal> | <identifier> | null,
  body: [ <expr> ]
}
```

```js
{
  kind: 'export',
  name: <string>,
  id: <literal> | <identifier> | null
}
```

```js
{
  kind: 'func',
  expo: <literal> | null,
  id: <literal> | <identifier> | null,
  local: [<literal> | <identifier> | null],
  param: <expr>,
  result: <expr>,
  body: [ <expr> ]
}
```

```js
{
  kind: 'get_local',
  id: <literal> | <identifier> | null
}
```

```js
{
  kind: 'grow_memory',
  expr: <expr>
}
```

```js
{
  kind: 'identifier',
  name: String
}
```

```js
{
  kind: 'if',
  test: <expr>,
  then: <expr>,
  else: <expr> | null
}
```

```js
{
  kind: 'import',
  id: <literal> | <identifier> | null,
  modName: <literal>,
  funcName: <literal>,
  params: [ <expr> ]
}
```

```js
{
  kind: 'invoke',
  name: <literal> | <identifier>,
  body: [ <expr> ]
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
  value: Integer | String,
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
  expr: <expr>
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
  body: [ <expr> ]
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
  kind: 'memory_size'
}
```

```js
{
  kind: 'module',
  body: [ <expr> ]
}
```

```js
{
  kind: 'nop'
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
  operator: <relop>,
  left: <expr>,
  right: <expr>
}
```

```js
{
  kind: 'result',
  type: <type>
}
```

```js
{
  kind: 'return',
  expr: <expr>
}
```

```js
{
  kind: 'script',
  body: [ <expr> ]
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
  test: <expr>,
  then: <expr>,
  else: <expr>
}
```

```js
{
  kind: 'set_local',
  id: <literal> | <identifier> | null,
  init: <expr>
}
```

```js
{
  kind: 'start',
  id: <literal> | <identifier> | null
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
  kind: 'then',
  id: <literal> | <identifier> | null,
  body: [ <expr> ]
}
```

```js
{
  kind: 'type',
  id: <literal> | <identifier> | null
}
```

```js
{
  kind: 'unop',
  type: <type>,
  operator: String
  expr: <expr>
}
```

```js
{
  kind: 'unreachable'
}
```
