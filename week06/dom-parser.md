# DOM parser

- https://html.spec.whatwg.org/multipage/#toc-syntax
- 12.2.5 Tokenization

## parse HTML

### 1.状态转移

- 开始、结束、自封闭 标签
  - data
  - tagOpen
  - endTagOpen
  - tagName
  - beforeAttrName
  - selfClosingStartTag
- 忽略属性

### 2.业务逻辑

- 业务逻辑
- 标签结束状态提交 token

### 3.属性处理

- 属性处理 单 双 无 引号
  - attrName
  - afterAttrName
  - beforeAttrValue
  - doubleQuotedAttrValue
  - singleQuotedAttrValue
  - unQuotedAttrValue
  - afterQuotedAttrValue
- 属性结束加到 token

### 4.DOM 树

- startTag 入栈 endTag 出栈
- selfTag 入栈后 立即 出栈
- 任何元素的 parent 都是 入栈前 的栈顶

### 5.文本处理

- 文本节点 与 自封闭类似
- 多个文本节点需要合并
- 不入栈

## parse CSS

### 1.保存 CSS RULE

- 遇到 style 标签 addRule
- 用 CSS Parser 分析 CSS

### 2.添加调用

- 创建 element 后立即 compute CSS
- style 标签在 head 里，创建 body 开始创建元素时 style 收集完毕了
- 如果在 body 里有 style 那么需要重新计算 CSS
- 重新计算 + 重排 + 重绘

### 3.获取父元素列表

- computeCSS 需要匹配所有父元素
- stack 有当前元素的所有父级，或者用 element.parent 获取
- 首先获取的是当前元素，所以匹配顺序选择器从右往左，元素从内到外

### 4.选择器拆分

- 选择器也是从内向外
- 复杂选择器拆成对单个元素的选择器，用循环匹配父元素队列

### 5.匹配元素

- 根据选择器类型和元素属性，判断是否匹配
- 只处理三种选择器，id，class，tag，浏览器需要处理复合选择器

### 6.computedStyle

- 匹配到后应用到元素上，形成 computedStyle

### 7.优先级

- CSS 规则根据 specificity 和后来优先规则覆盖
- specificity 是个 4 元数组，越左权重越高
- 一个 CSS 规则的 specificity 根据包含的选择器相加而成
