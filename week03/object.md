# 对象

- 唯一
- 状态
- 行为，状态改变

## Class based

- 归类
  - 菱形问题
- 分类
  - 两个类抽象 interface
  - 复用 mixin

## Prototype based

不做严谨的分类，用相似的方式去描述对象。

## Exercise

狗咬人

咬 抽象

改变对象状态的行为

人受伤 狗着急 是 行为，咬是业务，

```js
// 对
class Human {
  hurt() {}
}
// 错
class Dog {
  bite() {}
}
```

## Object in JavaScript

- Object
  - 原型
    - [[Prototype]]
  - 属性 Property
    - 运行时
    - key: val
    - Data Property
      - [[value]]
      - writable
      - enumerable
      - configurable
    - Accessor Property
      - get
      - set
      - - enumerable
      - configurable

## API/Grammer

- `{} . [] Object.defineProperty`
  - 基本的面向对象，不属于 class-based prototype-based
- `Object.create Object.setPrototypeOf Object.getPrototypeOf`
  - prototype-based
- `new class extends`
  - class-based
  - 运行时只有 prototype，可以模拟 class
- `new function prototype`

## Function Object

- [[call]]

## Special Object

- Array
  - [[length]]
  - Data prototype
- Object.prototype
  - [[setPrototypeOf]]
