# 表达式，类型转换

- Grammer
- Runtime

## Grammer

### 优先级(Priority)

表达式生成树的方式实现

```
1+2*3

  +
1   *
   2 3
```

#### Member

- a.b
- a[b]
  - Java 反射
- foo`string`
- super.b
- super['b']
- new.target TODO
  - 确定是被 `new` 调用的
- new Foo()

返回 Reference 类型

```js
// o.x 返回 Reference 类型
var o = {
  x: 1,
}

// 这两个等效，加法 会找到 Reference 最终的 值
o.x + 2
1 + 2

// 这两个有区别
delete o.x
delete 1

// Reference 底层实现类似 有 Object 和 Key
// 写的能力有 delete assign
// delete 和 赋值 有引用的特性
class Reference {
  constructor(object, property) {
    this.object = object
    this.property = property
  }
}
```

#### New

- new Foo

```
new a()()
new new a()
```

#### Call

- foo()
- super()
- foo()['b']
- foo().b
- foo()`abc`

### Left Handside & Right Handside

```js
// e.g.
a + b = c
a.b = c
```

- Left
  - Runtime 的时候指 Reference 类型
  - Grammer
- Right
  - Update

#### Update

```
++a++
++(a++)
```

- a++
- ++a
- a--
- --a

#### Unary

- delete a.b
- void foo()
  - 不管后面是什么都会生成 undefined，void 0
- typeof a
- +a
- -a
- ~a
- !a
- await a

#### Exponental

- `**`

#### Multiplicative

- `* / %`

#### Additive

- `+ -`

#### Shift

- << >> >>>

#### Relationship

- `<= >= < > instanceof in`

#### Equality

- ==
- !=
- ===
- !==

#### Bitwise

- & ^ |

#### Logical

- &&
- ||

```js
// fn1 => false, 不会执行 fn2, 不是两个都执行后判断
fn1() && fn2()
```

#### Conditional

- ? :
- ,

### Boxing && Unboxing

- ToPrimitive
- valueOf && toString

## Runtime

- Type Convertion
