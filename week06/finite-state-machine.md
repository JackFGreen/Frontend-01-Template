# 有限状态机(finite-state machine)

- 每个状态都是一个机器
  - 每个机器都可以做计算、存储、输出...
  - 所有机器接受的输入都是一致的
  - 状态机的每个机器本身没有状态，如果用函数表示都是纯函数，没有副作用
- 每个机器都知道下一个状态
  - 每个机器都有确定的下一个状态(Moore)
  - 每个机器根据输入决定下一个状态(Mealy)

## JS 中的有限状态机

```js
// 每个函数是一个状态
function state(input) {
  // 函数参数就是输入
  // 在函数中，可以自由地编写代码，处理每个状态的逻辑
  // 返回值作为下一个状态
  return next
}
/////////以下是调用//////////
while (input) {
  // 获取输入
  // 把状态机的返回值作为下一个状态，接收下一个输入
  state = state(input)
}
```
