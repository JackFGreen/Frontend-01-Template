# 浏览器工作原理 | HTTP + 词法语法分析 (一)

- 输入 url 到展示页面
  - url
    - HTTP
  - HTML
    - parse
  - DOM
    - CSS computing
  - DOM with CSS
    - layout
  - DOM with position
    - render
  - Bitmap

## ISO-OSI 7 层网络模型

- 1
- HTTP require('http')
  - 应用
  - 表示
  - 会话
- 2
- TCP require('net')
  - 传输
- 3
- Internet
  - 网络
- 4
- 4G 5G WIFI
  - 数据链路
  - 物理

## TCP 与 IP

- TCP
  - 流
  - 端口
  - require('net')
  - 全双工
- IP
  - 包
  - IP 地址
  - libnet/libpcap

## HTTP

- Request
- Response

### Request

```
POST / HTTP/1.1
Host: 127.0.0.1
Content-Type: application/x-www-form-urlencoded
Content-length: 6

name=j
```

- request line
  - POST / HTTP/1.1
  - 方法 路径 协议
- headers
  - Host: 127.0.0.1
  - Content-Type: application/x-www-form-urlencoded
- 换行
- body
  - field1=aaa&code=x%3D1

### Response

```
HTTP/1.1 200 OK
Content-Type: text/html
Date: Mon, 23 Dec 2019 06:46:19 GMT
Connection: keep-alive
Transfer-Encoding: chunked

5 后面有5个字符
hello
4 后面有4个字符
jack
0 结尾，没有字符了

```

- status line
  - HTTP/1.1 200 ok
  - 协议 状态码 状态
- headers
  - Content-Type: text/html
  - Date: Mon, 23 Dec 2019 06:46:19 GMT
  - Connection: keep-alive
  - Transfer-Encoding: chunked
    - body 编码方式
- body
  - 26
  - <html><body> Hello World<body></html>
  - 26
  - <html><body> Hello World<body></html>
  - 0
