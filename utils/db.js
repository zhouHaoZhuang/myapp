const mysql = require("mysql");
const os = require('os');

/**
 * 获取当前机器的ip地址
 */
function getIpAddress() {
  var ifaces=os.networkInterfaces()

  for (var dev in ifaces) {
    let iface = ifaces[dev]

    for (let i = 0; i < iface.length; i++) {
      let {family, address, internal} = iface[i]

      if (family === 'IPv4' && address !== '127.0.0.1' && !internal) {
        return address
      }
    }
  }
}

let ipAddress = getIpAddress()

const pool = mysql.createPool({
  host: ipAddress,
  port: 3306,
  user: "root",
  password: "770377",
  database: "blogs-01",
  // database: "blog",
  acquireTimeout: 15000,
  connectionLimit: 50,
  waitForConnections: true,
  queueLimit: 0,
});

const execSQL = function (sql) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connect) => {
      connect.query(sql, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    });
  });
};
module.exports = execSQL;
