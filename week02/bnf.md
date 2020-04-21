# 产生式(BNF)

## 什么是产生式

[Backus–Naur form](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form)，用于描述计算机语言的语法。

> 在计算机科学中，Backus-Naur 形式或 Backus normal form (BNF)是一种无上下文语法的符号技术，通常用于描述计算机编程语言、文档格式、指令集和通信协议等计算语言的语法。它们被应用于需要精确描述语言的地方：例如，在官方语言规范、手册和编程语言理论教科书中。  
> 原始的 Backus-Naur 符号的许多扩展和变体都被使用；有些是精确定义的，包括扩展的 Backus-Naur 形式（EBNF）和增强的 Backus-Naur 形式（ABNF）。

> In computer science, Backus–Naur form or Backus normal form (BNF) is a notation technique for context-free grammars, often used to describe the syntax of languages used in computing, such as computer programming languages, document formats, instruction sets and communication protocols. They are applied wherever exact descriptions of languages are needed: for instance, in official language specifications, in manuals, and in textbooks on programming language theory.  
> Many extensions and variants of the original Backus–Naur notation are used; some are exactly defined, including extended Backus–Naur form (EBNF) and augmented Backus–Naur form (ABNF).

## 结构

- `<...>` 语法结构名
- 语法结构 分为 `基础结构` 和 用其他语法结构定义的 `复合结构`
  - 基础结构称为 `终结符`
    - `*` 不是其他语法结构构成的
  - 复合结构称为 `非终结符`
    - 乘法表达式，`数字 \* 数字` 合成
- `"..."` 引号和中间的字符 表示 `终结符`
- 可以有 `()`
- `*` 重复多次
- `|` 或
- `+` 至少一次

## 示例

### 一种语言只能由 "a" "b" 组成

```
// 只能表示 "a" 或 "b"，需要 递归表示 同时包含 "a" "b"
<Program>::= "a"+ | "b"+

// 可递归
<Program>::= <Program> "a"+ | <Program> "b"+
```

### 定义一个加法

```
// 数字
<Number>::= "0" | "1" | "2" | ... | "9"

// 十进制数，0 或 首位不为0，01 不合法
<DecimalNumber>::= "0" | (("1" | ... | "9") <Number>*)
```

```
// 数字+数字
<AdditiveExpression>::= <DecimalNumber> "+" <DecimalNumber>

// 连加 数字+数字+数字+...，递归
<AdditiveExpression>::= <AdditiveExpression> "+" <DecimalNumber>

// 纯数字也可以，不用非得带 + 号
<AdditiveExpression>::= <DecimalNumber>
```

```
// 加法表达式 -> 后面两个合成一个
<AdditiveExpression>::= <DecimalNumber> | <AdditiveExpression> "+" <DecimalNumber>
```

```
// 乘法表达式 "+" -> "*"
<MultiplicationExpression>::= <DecimalNumber> | <MultiplicationExpression> "*" <DecimalNumber>
```

```
// 1+2*3 左项1 右项2*3 左右都可以改成 乘法表达式 乘法优先级高于加法
// 加法表达式修改
<AdditiveExpression>::= <MultiplicationExpression> | <AdditiveExpression> "+" <MultiplicationExpression>
```

```
// 逻辑表达式 = 不含逻辑的纯加法表达式 | 含多个逻辑的递归的 "||" 和 "+" | “&&” 和 "+"
<LogicalExpression>::= <AdditiveExpression> |
  <LogicalExpression> "||" <AdditiveExpression> |
  <LogicalExpression> "&&" <AdditiveExpression>
```

```
// 定义 除法
<MultiplicationExpression>::= <DecimalNumber> |
  <MultiplicationExpression> "*" <DecimalNumber> |
  <MultiplicationExpression> "/" <DecimalNumber>
```

```
// 定义 减法
<AdditiveExpression>::= <MultiplicationExpression> |
  <AdditiveExpression> "+" <MultiplicationExpression> |
  <AdditiveExpression> "-" <MultiplicationExpression>
```

```
// 定义带括号的 ()
<PrimaryExpression>::= <DecimalNumber> |
  "(" <LogicalExpression> ")"

// 括号优先级高于乘法 -> 乘法修改 需要包含 括号
<MultiplicationExpression>::= <PrimaryExpression> |
  <MultiplicationExpression> "*" <PrimaryExpression> |
  <MultiplicationExpression> "/" <PrimaryExpression>
```

### 带括号的四则运算

同上

```
// 数字
<Number>::= "0" | "1" | "2" | ... | "9"

// 十进制数，0 或 首位不为0，01 不合法
<DecimalNumber>::= "0" | (("1" | ... | "9") <Number>*)
```

```
// 定义带括号的 ()
<PrimaryExpression>::= <DecimalNumber> |
  "(" <LogicalExpression> ")"

// 括号优先级高于乘法 -> 乘法修改 需要包含 括号
<MultiplicationExpression>::= <PrimaryExpression> |
  <MultiplicationExpression> "*" <PrimaryExpression> |
  <MultiplicationExpression> "/" <PrimaryExpression>
```

```
// 定义 减法
<AdditiveExpression>::= <MultiplicationExpression> |
  <AdditiveExpression> "+" <MultiplicationExpression> |
  <AdditiveExpression> "-" <MultiplicationExpression>
```

```
// 逻辑表达式 = 不含逻辑的纯加法表达式 | 含多个逻辑的递归的 "||" 和 "+" | “&&” 和 "+"
<LogicalExpression>::= <AdditiveExpression> |
  <LogicalExpression> "||" <AdditiveExpression> |
  <LogicalExpression> "&&" <AdditiveExpression>
```

## 解析 BNF

语法分析，算法 LL LR

---

TODO

## 规则

左递归
右递归
