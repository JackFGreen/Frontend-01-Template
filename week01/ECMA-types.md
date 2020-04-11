# ECMAScript Types

根据 `ECMA-262` 规范，`第六章 ECMAScript 数据类型和值`，可以分为两部分 `语言类型` 和 `规范类型`

> ECMA-262.pdf  
> 6 ECMAScript Data Types and Values  
> Algorithms within this specification manipulate values each of which has an associated type. The possible value types are exactly those defined in this clause. Types are further subclassified into ECMAScript language types and specification types.

#### ECMAScript Language Types

语言类型

> ECMAScript `语言类型` 对应 程序员使用 ECMAScript 直接操作的 `值`。  
> 一个 ECMAScript 语言 `值` 是由 ECMAScript `语言类型` 表示的 `值`。

```
Undefined
Null
Boolean
String
Symbol
Number
Object
```

> ECMA-262.pdf  
> 6.1 ECMAScript Language Types  
> An ECMAScript language type corresponds to values that are directly manipulated by an ECMAScript programmer using the ECMAScript language. The ECMAScript language types are Undefined, Null, Boolean, String, Symbol, Number, and Object. An ECMAScript language value is a value that is characterized by an ECMAScript language type.

#### ECMAScript Specification Types

规范类型

> `规范类型` 对应 算法 中的 元值，用于描述 (ECMAScript 语言构造 和 ECMAScript 语言类型) 的 `语义`。  
> 规范类型值是规范的工件，`不` 一定对应于 ECMAScript `实现` 中的任何特定 `实体`。规范类型值可以用来描述 ECMAScript `表达式评估` 的中间结果，但这些值 `不能` 作为 `对象的属性` 或 ECMAScript `语言变量` 的值来存储。

```
Reference
List
Completion
Property Descriptor
Lexical Environment
Environment Record
Data Block
```

> ECMA-262.pdf  
> 6.2 ECMAScript Specification Types  
> A specification type corresponds to meta-values that are used within algorithms to describe the semantics of ECMAScript language constructs and ECMAScript language types. The specification types include Reference, List, Completion, Property Descriptor, Lexical Environment, Environment Record, and Data Block.  
> Specification type values are specification artefacts that do not necessarily correspond to any specific entity within an ECMAScript implementation. Specification type values may be used to describe intermediate results of ECMAScript expression evaluation but such values cannot be stored as properties of objects or values of ECMAScript language variables.
