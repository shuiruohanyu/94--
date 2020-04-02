const Vue  = require('vue') //  为什么不能用import  因为这里是后端代码
const  render  = require('vue-server-renderer')  
// 服务端渲染包 此模板 可以获取vue实例的html内容
const SSR = render.createRenderer() // 创建一个 服务端渲染实例化对象  
// 第一步 创建一个vue实例
const app = new Vue({
    template: `<div>
       <div style='color:red' v-for="item in list">
           {{ item }}
       </div>
    </div>`,
    data: {
        list: ["东邪黄药师","西毒欧阳锋", "南帝段智兴", "北丐洪七公", "中神通王重阳"]
    }
})
// // 第二步 对vue实例进行 渲染 得到其html结构
// SSR.renderToString(app).then(html => {
//     // 得到渲染的结构
//     console.log("得到服务端渲染的结构是:" + html)
// }) // 将组件或者vue实例化 转化成字符串
module.exports = SSR.renderToString(app)  // 直接导出 promise对象
// 我们要将这个结果 返回浏览器  浏览器直接显示这个结构  这就是服务端渲染