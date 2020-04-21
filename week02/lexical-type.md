# 词法和类型

## Unicode code point

```
1byte=8bit=2^8=256种状态
可存储256种符号
```

### ASCII

ASCII 最早的字符集，定义了 128 个符号(0-127)，英语够用，别的国家不够用，比如注音符号，汉字等

### 非 ASCII 编码

不够用的国家用 128-255 表示别的符号，但是同一个编码在不同的国家表示不同的符号，比如 130 在法语编码中代表了 é，在希伯来语编码中却代表了字母 Gimel (ג)，在俄语编码中又会代表另一个符号。打开一个文件要确定它的编码方式，不然会乱码。

### Unicode

包含所有的符号，规定了符号的二进制编码，解决了乱码问题。但是没有规定二进制代码如何存储。比如英文用 1 个字节表示就够了，别的可能要 3 个字节，如果规定一个符号用 3 个字节表示，那么英文就要补全前面的 2 个字节，造成浪费。有许多种 Unicode 存储方式，直到互联网普及，需要一种通用的，UTF-8 是用的最广的，其他的还有 UTF-16 和 UTF-32。

- 16 进制
- 最完整，世界各地都包含进去
- U+0000 - U+007F 128 ASCII
- ASCII 最早的字符集，128 位
- js 最好在 ASCII 里，最少 BMP([USC](#Formats))，兼容
- CJK 中日韩 4E00-9FFF

```
厉害=\u5389\u5bb3
\u 标识符 字符串
```

#### Little endian & Big endian

某个字有两个字节，哪个字节存储在前，哪个存储在后

```
严 -> Unicode -> 4E25
两个字节存储，4E 25，哪个在前
4E 在前 Big
25 在前 Little
```

为了确定存储顺序，在文件开头插入 `零宽非换行空格(zero width no-break space)`，用 `FEFF` 表示，刚好是 2 个字节，`FF` 比 `FE` 大 1，FE(`FEFF`) 在前是 Big，FF(`FFFE`) 在前是 Little

### Category

中英文 都有 空格 字母 等，公用

## Atom

- InputElement
  - WhiteSpace
  - LineTerminator
  - Comment
  - Token

### WhiteSpace

- <TAB> U+0009 '\t'
- <VT> U+0011 '\v'
- <FF> U+000A
- <SP> U+0032
- <NBSP> U+00A0 non-break
  - `Java&nbsp;Script` 整体换行，保留空格
  - `Java Script` 单词换行，空格
- <ZWNBSP> U+FEFF Zero width no-break space -> BOM
- <USP> U+ separate space

### LineTerminator

- LF U+000A \n
- CR U+000D \r
- LS
- PS

### Comment

- `//`
- `/**/`

### Token

- Punctuator `< > =`
- IdentifierName
  - Keywords `var for`
  - Identifier `var foo` foo
    - 变量名 不包含 keywords `var get = 1`
    - 属性名 可包含 keywords `className`
  - Future reserved Keywrods: enum
- Literal `1 2 true`

### IdentifierName

- id_start `[a-zA-Z*\$]+.\*`
- id_part

## Types

- Number
- String
- Boolean
- Object
- Undefined
- Null
- Symbol

### Number

- DecimalLiteral
  - 0 0. .1 1e3
- Binary 0b111
- Octal 0o10
- Hex 0xFF

#### Safe Integer

Number.MAX_SAFE_INTEGER.toString(16)

#### Float Compare

Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON

### String

- Charactor
- Code point
- Encoding

#### Formats

- ASCII
- Unicode
- USC U+0000 - U+FFFF BMP
- GB ASCII+中文，没有外国字符
  - GB2312
  - GBK(GB13000)
  - GB18030
- ISO-8859
- BIG5 台湾 繁体

#### 存储方式

- UTF8 使用 8 位存储
- UTF16 使用 16 位存储

##### UTF-8

UTF-8 最大的一个特点，就是它是一种`变长`的编码方式。它可以使用 `1~4` 个字节表示一个符号，根据不同的符号而`变化字节长度`。

- 对于`单`字节的符号，字节的第一位设为 `0`，后面 `7` 位为这个符号的 `Unicode` 码。因此对于`英语`字母，UTF-8 编码和 ASCII 码是相同的。
- 对于 `n` 字节的符号 `(n > 1)`，`第一`个字节的前 `n 位都设为 1`，第 `n + 1 位设为 0`，后面字节的前`两位`一律设为 `10`。剩下的没有提及的二进制位，全部为这个符号的 Unicode 码。

| Unicode 符号范围 (十六进制)         | UTF-8 编码方式 (二进制)             |
| ----------------------------------- | ----------------------------------- |
| 0000 0000-0000 007F (0-127)         | 0xxxxxxx                            |
| 0000 0080-0000 07FF (128-2047)      | 110xxxxx 10xxxxxx                   |
| 0000 0800-0000 FFFF (2048-65535)    | 1110xxxx 10xxxxxx 10xxxxxx          |
| 0001 0000-0010 FFFF (65536-1114111) | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx |

`严`的 Unicode 是 `4E25`（`100111000100101`），根据上表，可以发现 4E25 处在第三行的范围内（`0000 0800 - 0000 FFFF`），因此严的 UTF-8 编码需要`三`个字节，即格式是 `1110xxxx 10xxxxxx 10xxxxxx`。然后，从严的`最后一个`二进制位开始，依次`从后向前`填入格式中的 x，多出的位`补 0`。这样就得到了，严的 UTF-8 编码是 `11100100 10111000 10100101`，转换成十六进制就是 `E4B8A5`。

#### Grammer

- "a"
- 'a'
- \`a\`

'\x10'  
'\u000A  
转义 `\` [' " \ b f n r t v]

```
// 解析断句
`I said: "${s1}, ${s2}"`

`I said: "${
  s1
}, ${
  s2
}"`
```

---

[字符编码笔记：ASCII，Unicode 和 UTF-8](http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html)
