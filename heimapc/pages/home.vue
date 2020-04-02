<template>
  <!-- 做一个实时的疫情数据 -->
  <el-card>
    <!-- 用来展示数据   id是惟一的 是递归生成的-->
    <el-table :data="list" row-key="id">
      <el-table-column prop="name" label="地区名称" />
      <el-table-column prop="total.confirm" label="确诊总人数(人)" />
      <el-table-column prop="total.suspect" label="疑似总人数(人)" />
      <el-table-column prop="total.dead" label="死亡总人数(人)" />
      <el-table-column prop="total.heal" label="康复总人数(人)" />
    </el-table>
  </el-card>
</template>

<script>
// 将现在的疫情数据显示到表格上
export default {
//  加数据  我们要做的服务端渲染
// 此函数会在 后端服务端渲染之前 执行  返回的数据 会和data中的数据进行融合
  async asyncData (context) {
    // 注意 此时 不要用jsonp
    // 只有前端才会有跨域同源策略问题
    // 此时此刻在服务端
    // 如何解决跨域问题 jsonp 利用sciprt标签 可以请求不同端口协议的内容, 回调的形式 执行对应的方法
    // 设置cors (通过在服务端设置允许访问的 协议端口地址)
    // 采用反向代理的方式 解决跨域
    // 服务端是不存在 跨域问题的  先去发起一个请求 => 后台 (允许你访问的后台) => 代替你去访问你要访问的真实后台 => 接口返回给你
    // spa 项目中  => 代理 要设置在 webpack中, webpack可以当做一个后台(仅仅限于开发期间),因为webpack 是一个开发期间的工具
    // 你最终的打包的项目要部署到 linux服务器 ,采用ngix 进行web化服务, 上线之后 需要ngix去做你的反向代理, 只需要运维帮你做, 但是你你需要知道
    // 请求数据
    const url = 'https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5'
    // 哪里有axios 我们安装项目是选择的axios 那是前端的对象
    // context.app  => 指的就是 前端的vue惟一的Vue实例对象
    const { data: { data } } = await context.app.$axios({
      url
    })
    const result = JSON.parse(data)
    // 如果想要解决重复的问题 可以进行一下递归 递归的目的是 给每一个节点 每一条数据加上一个惟一的id
    // 递归方法
    // arr是当前的数组 prefix是当前的前缀
    const dealId = function (arr, prefix) {
      arr.forEach((element, index) => {
        element.id = prefix + '-' + (index + 1) // 所有的地区都是从1 开始
        if (element.children && element.children.length) {
          // 此时 表示有子节点
          dealId(element.children, element.id) // 此时 中国是 1  1-1 1-2  1-1-1
        }
      })
    }
    dealId(result.areaTree, '') // 处理树形数据  第二个参数 是 前缀  树形数据  1-1 1-2 1-3  2-1 2-2 2-3
    return { list: result.areaTree }
  }
}
</script>

<style>

</style>
