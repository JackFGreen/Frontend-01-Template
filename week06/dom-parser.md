# DOM parser

- https://html.spec.whatwg.org/multipage/#toc-syntax
- 12.2.5 Tokenization

## 1.状态转移

- 开始、结束、自封闭 标签
  - data
  - tagOpen
  - endTagOpen
  - tagName
  - beforeAttrName
  - selfClosingStartTag
- 忽略属性

## 2.业务逻辑

- 业务逻辑
- 标签结束状态提交 token

## 3.属性处理

- 属性处理 单 双 无 引号
  - attrName
  - afterAttrName
  - beforeAttrValue
  - doubleQuotedAttrValue
  - singleQuotedAttrValue
  - unQuotedAttrValue
  - afterQuotedAttrValue
- 属性结束加到 token

## 4.DOM 树

- startTag 入栈 endTag 出栈
- selfTag 入栈后 立即 出栈
- 任何元素的 parent 都是 入栈前 的栈顶

## 5.文本处理

- 文本节点 与 自封闭类似
- 多个文本节点需要合并
- 不入栈
