const express = require("express");
const router = express.Router();
const multer = require("multer");

// const key = require('../../config/keys')

// 设置图片存储路径
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./www/uploads"); // ../uploads是将存放图片文件夹创建在node项目平级，./uploads会存放在node项目根目录下，需要提前建好文件夹，否则会报错
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`); // 文件名
  }
});

// 添加配置文件到muler对象。
var upload = multer({ storage: storage });

/***
 * 图片上传 并将拼接好的图片url返回给前端，示例：（http://127.0.0.1:8000/images/xxxx.png）
 */
router.post("/uploadImg", upload.single("file"), (request, res) => {
  // console.log(request.file, "file");
  res.json({
    code: 200,
    data: {
      fileFullPath: `http://localhost:9000/uploads/${request.file.filename}`,
      id: Date.now()
    },
    msg: "上传成功"
  });
});

module.exports = router;
