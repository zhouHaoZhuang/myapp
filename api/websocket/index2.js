const express = require('express')
const { createServer } = require('http')
const { Server } = require('socket.io')
const fs = require('fs')

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
  /* options */
})
app.use(express.static('www')) //设置静态文件目录

app.get('/', (req, res) => {
  fs.readFile('index2.htm', function (err, data) {
      if (err) {
          throw err
      } else {
          // res.send('Hello World!')
          res.end(data)
      }
  })
})

io.on('connection', (socket) => {
  // ...
  socket.on('hehe', (data) => {
    console.log(data)
    socket.emit('nihao',data)
  })
  socket.emit('send', '你好')
})

httpServer.listen(3000, () => {
  console.log('服务器已经启动,请访问 http://localhost:3000')
})
