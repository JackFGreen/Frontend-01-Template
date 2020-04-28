# 语句，对象

- Grammer
  - 简单
  - 组合
  - 声明
- Runtime (内部类型)
  - Completion Record 完成记录 语句执行完成
  - Lexical Environment

## Completion Record

- [[type]]
  - normal break continue return throw
- [[value]]
  - Types 基本类型
  - 空 没有值 undefined 也是有值的
- [[target]]
  - label

## 自动插入分号

按照 ECMAScript 标准，一些特定语句必须以分号结尾，代表语句的终止。但是有时候为了方便可以省略，解释器会判断在哪里终止，这个行为就是`自动插入分号`，并不是真的会插入一个分号。

## 简单语句

- ExpressionStatement
  - a=1+2;
- EmptyStatement
  - ;
- DebuggerStatement
  - 引擎实现
  - debugger;
- ThrowStatement
  - throw a;
- ContinueStatement
  - continue label?;
- BreakStatement
  - break label?;
- ReturnStatement
  - return ...?;

## 复合

- BlockStatement
- IfStatement
- SwitchStatement
- IterationStatement
- WithStatement
- LabelledStatement
- TryStatement

### BlockStatement

{} 开头一定是 block 不是 对象

正常情况执行结果是 normal，对应 Completion type

```
[[type]]: normal
```

如果有 throw 之类的就不是 normal 了

```
{
  statement1
  statement2
  statement3
  ...
}

{
  const a = 1
}
// 重复声明 a
{
  const a = 1
}
```

### Iteration

- while() {}
  - return throw
  - continue break 会被 while 消费
- do {} while()
- for(;;) {}
  - `let i = 0` 产生独立作用域，在 `主体 block {}` 之外
- for (in)
- for (of)

### 标签、循环、break、continue

```
[[type]]: break continue
[[target]]: label
```

### try

```
[[type]]: return
[[target]]: label
```

```js
try {

} catch () {

} finally {

}
```

## 声明

### FunctionDeclaration

```js
function f() {}
```

### Generator

```js
function* f() {}
```

### AsyncFunction

### AsyncGenerator

### VariableStatement

### Class

### Lexical

## 对象

[object](./object.md)
