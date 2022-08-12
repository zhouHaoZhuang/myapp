const express = require('express')
const execSQL = require('./utils/db')
const history = require('connect-history-api-fallback')

const path = require('path')
const fs = require('fs')
const os = require('os')

const app = express()
const port = 9000
app.use(history())
app.use(express.static('www')) //设置静态文件目录

// const cors = require('cors')
// app.use(cors()) //跨域
//body-parser: POST请求体解析器，
const bodyParser = require('body-parser')
const common = require('./api/common/index.js')
app.use('/api/common', common)
app.use('/images', express.static(path.join(__dirname, '../uploads')))
app.use(bodyParser.urlencoded({ extended: true }))

// history({
//     index: './www/index.html'
// });

//设置跨域访问
app.all('*', function (req, res, next) {
    // https://help.aliyun.com/document_detail/27137.html
    // 该响应头表示是否可以将对请求的响应暴露给页面。   简单的理解就是是否把cookie暴露给页面
    res.header('Access-Control-Allow-Credentials', 'true') //当客户端跨域并需要传递cookie时，需要设置Access-Control-Allow-Credentials，并且值为“true”
    // res.header('Access-Control-Allow-Headers', '*')
    // 指定允许的跨域请求字段。
    res.header(
        'Access-Control-Allow-Headers',
        'token,Content-Type,Content-Length, Authorization, Accept,X-Requested-With,domain,zdy' //当客户端跨域并需要传递cookie时，需要设置Access-Control-Allow-Headers，并且值为不能为“*”，需要具体配置
    )
    // 指定允许的跨域请求的来源。填写星号（*）表示全部域名；您也可以填写完整域名，例如http://www.aliyun.com。
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000') //当客户端跨域并需要传递cookie时，需要设置Access-Control-Allow-Origin，并且值为不能为“*”，需要具体配置
    // 指定允许的跨域请求方法。可同时设置多个方法，多个方法用英文逗号（,）分隔。
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('X-Powered-By', ' 3.2.1')
    res.header('Content-Type', 'application/json;charset=utf-8')
    next()
})

// 后端配置需要监听前端发送的各种请求，并处理这个请求，给前端返回响应的内容。
app.get('/registRequest', function (req, res) {
    // 监听前端向 /registRequest 发送的GET请求
    // 获取GET请求携带的参数
    let params = req.query // 获取查询字符串参数
    if (params.username == '小明' && params.password == '123') {
        // send()方法，用于给前端返回字符串
        res.send('登录成功')
    } else {
        res.send('登录失败')
    }
})
app.post('/registRequest', function (req, res) {
    // 监听前端向 /registRequest 发送的POST请求
    // 获取POST请求携带的参数
    let params = req.body // 获取请求体参数
    if (params.username == '小明' && params.password == '123') {
        // send()方法，用于给前端返回字符串
        res.send('登录成功')
    } else {
        res.send('登录失败')
    }
})
app.get('/', (req, res) => {
    fs.readFile('./www/index.html', function (err, data) {
        if (err) {
            throw err
        } else {
            // res.send('Hello World!')
            response.end(data)
        }
    })
})
app.get('/text', (req, res) => {
    res.send({ yue: 324 })
})
// 1. 首页路由
app.get('/select', async function (req, res) {
    console.log(req.query)
    let { current = 1, pageSize = 10 } = req.query
    // 查询所有文章
    let articles = await execSQL(
        `select * from article limit ${(current - 1) * pageSize},${pageSize}`
    )
    console.log(articles)
    res.send(articles)
})

/**
 * 获取当前机器的ip地址
 */
function getIpAddress() {
    var ifaces = os.networkInterfaces()
    for (var dev in ifaces) {
        let iface = ifaces[dev]
        for (let i = 0; i < iface.length; i++) {
            let { family, address, internal } = iface[i]

            if (family === 'IPv4' && address !== '127.0.0.1' && !internal) {
                return address
            }
        }
    }
}

let ipAddress = getIpAddress()
app.listen(port, () => {
    console.log(
        `服务已启动Example app listening at http://${ipAddress}:${port}`
    )
})
