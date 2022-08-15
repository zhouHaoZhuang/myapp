// 1,导入包
const ws = require('nodejs-websocket')

let count = 0
// 2,创建一个websocket服务器
const server = ws.createServer((conn) => {
  console.log(' 有用户连接上来了')
  count++
  conn.on('text', (str) => {
    console.log(str)

    conn.sendText(str + 'websocket') // conn.send(str) 也可以
    broabcast(str + 'websocket')
  })
  broabcast(`用户${count}连接上来了`)
  conn.on('close', (code, reason) => {
    console.log('关闭了')
    count--
    broabcast(`用户${count}离开了`)
  })
  conn.on('error', (code, reason) => {
    console.log('出错了')
  })
})

function broabcast(msg) {
  // 3,向所有的客户端广播消息
  server.connections.forEach((conn) => {
    conn.sendText(msg)
  })
}
// 3,监听端口
server.listen(8081, () => {
  console.log('websocket服务器已经启动')
})
