var server = require('express')()  // 实例化web服务
var app = require('./app')
server.get('/', function (request, response) {
    //  当请求地址是/ 进行处理
    app.then(html => {
        response.send(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>大家好,老高的课结束在即</title>
</head>
<body>
     ${html}
</body>
</html>`)
        // 需要把动态渲染的内容直接返回
    })
  
})
server.listen(10086,function () {
    console.log("您的web服务启动了,访问地址 http://localhost:10086/")
})