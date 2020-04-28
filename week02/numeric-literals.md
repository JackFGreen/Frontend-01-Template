# 数字直接量

- NumberLiteral
  - DecimalLiteral
    - 0 0. .1 1e3
  - BinaryIntegerIiteral
    - 0b111
  - OctalInterLiteral
    - 0o10
  - HexIntegerLiteral
    - 0xFF

## Syntax

```
// BNF
NumericLiteral ::
  // 十进制
  DecimalLiteral
  // 二进制
  BinaryIntegerLiteral
  // 八进制
  OctalIntegerLiteral
  // 十六进制
  HexIntegerLiteral
```

### DecimalLiteral

```
// 十进制
DecimalLiteral ::
  // 整数 . 小数? 指数? -> A\.B?C?
  DecimalIntegerLiteral . DecimalDigits(opt) ExponentPart(opt)
  // . 小数 指数? -> \.BC?
  . DecimalDigits ExponentPart(opt)
  // 整数 指数？ -> AC?
  DecimalIntegerLiteral ExponentPart(opt)
```

```
// 十进制整数 -> A::= 0|DB?
DecimalIntegerLiteral ::
  0
  // 非0数 小数? -> DB?
  NonZeroDigit DecimalDigits(opt)
```

```
// 小数 -> B::= E|BE
DecimalDigits ::
  DecimalDigit
  DecimalDigits DecimalDigit
```

```
// 十进制数 -> E::= [0-9]
DecimalDigit :: one of
  0 1 2 3 4 5 6 7 8 9
```

```
// 非0数 -> D::= [1-9]
NonZeroDigit :: one of
  1 2 3 4 5 6 7 8 9
```

```
// 指数 -> C::= FG
ExponentPart ::
  // 指数标识 符号整数
  ExponentIndicator SignedInteger
```

```
// 指数标识 -> F::= (e|E)
ExponentIndicator :: one of
  e E
```

```
// 符号整数 -> G::= (B|\+B|\-B)
SignedInteger ::
  DecimalDigits
  + DecimalDigits
  - DecimalDigits
```

#### 公式

```
A::= 0|([1-9]([0-9]+)?)
B::= [0-9]+
C::= (e|E)((\+|\-)?([0-9]+))
D::= [1-9]
E::= [0-9]
F::= (e|E)
G::= ((\+|\-)?([0-9]+))
```

#### 正则

```
DecimalLiteral::= A\.B?C?|\.BC?|AC?

A\.B?C?::= (0|([1-9]([0-9]+)?))\.([0-9]+)?((e|E)((\+|\-)?([0-9]+)))?

\.BC?::= \.([0-9]+)((e|E)((\+|\-)?([0-9]+)))?

AC?::= (0|([1-9]([0-9]+)?))((e|E)((\+|\-)?([0-9]+)))?
```

```js
// /^(A|B|C)$/ = /^A$/ | /^B$/ | /^C$/ ABC 外层需要() 才能 首尾 完全匹配 A|B|C
// /^A|B|C$/ = /^A | B | C$/ 否则 首尾 匹配的是 A C
const decimalReg = /^((\+|\-)?(((0|([1-9]([0-9]+)?))\.([0-9]+)?((e|E)((\+|\-)?([0-9]+)))?)|(\.([0-9]+)((e|E)((\+|\-)?([0-9]+)))?)|((0|([1-9]([0-9]+)?))((e|E)((\+|\-)?([0-9]+)))?)))$/
```

### BinaryIntegerLiteral

```
// 二进制数 -> A::= B|C
BinaryIntegerLiteral ::
  // 0b 二进制数字 -> B::= '0b'D
  0b BinaryDigits
  // 0B 二进制数字 -> C::= '0B'D
  0B BinaryDigits
```

```
// 二进制数字 -> D::= E|DE
BinaryDigits ::
  // 二进制数字基数
  BinaryDigit
  // 二进制数字 二进制数字基数
  BinaryDigits BinaryDigit
```

```
// 二进制数字基数 -> E::= (0|1)
BinaryDigit :: one of
  0 1
```

#### 公式

```
A::= (0b((0|1)|((0|1)+)))|(0B((0|1)|((0|1)+)))
B::= (0b((0|1)|((0|1)+)))
C::= (0B((0|1)|((0|1)+)))
D::= ((0|1)|((0|1)+))
E::= (0|1)
```

#### 正则

```js
const binaryReg = /^(0(b|B)(0|1)+)$/
```

### OctalInterLiteral

```
OctalIntegerLiteral ::
  0o OctalDigits
  0O OctalDigits

OctalDigits ::
  OctalDigit
  OctalDigits OctalDigit

OctalDigit :: one of
  0 1 2 3 4 5 6 7
```

#### 公式

```
E::= [0-7]
```

#### 正则

```js
const octalReg = /^(0(o|O)[0-7]+)$/
```

### HexIntegerLiteral

```
HexIntegerLiteral ::
  0x HexDigits
  0X HexDigits

HexDigits ::
  HexDigit
  HexDigits HexDigit

HexDigit :: one of
  0 1 2 3 4 5 6 7 8 9 a b c d e f A B C D E F
```

#### 公式

```
E::= [0-9a-fA-F]
```

#### 正则

```js
const hexReg = /^(0(x|X)[0-9a-fA-F]+)$/
```

## 匹配所有数字直接量的正则

[demo](./regNumber.html)

```js
const numberReg = /^(((\+|\-)?(((0|([1-9]([0-9]+)?))\.([0-9]+)?((e|E)((\+|\-)?([0-9]+)))?)|(\.([0-9]+)((e|E)((\+|\-)?([0-9]+)))?)|((0|([1-9]([0-9]+)?))((e|E)((\+|\-)?([0-9]+)))?)))|(0(b|B)(0|1)+)|(0(o|O)[0-7]+)|(0(x|X)[0-9a-fA-F]+))$/
```
