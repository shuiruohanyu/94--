<template>
  <div class='app'>
      <!-- 头 -->
      <div class="header">水若寒宇</div>
      <!-- 尾部 -->
      <div class="body">
           <div class='item' v-for="item in list" :key="item.id">
               <span>{{ item.name }}</span>
               <span>{{ new Date().toDateString() }}</span>
           </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios' 
export default {
  data () {
    return {
      name: '张三',
      msg: 'ok'
    }
  },
 async asyncData () {
    // 这里不能用this 因为执行该函数时  组件还没有实例化
    // 执行asyncData时  还在服务端 还没有返回数据
  let { data } = await axios({
      url:'http://ttapi.research.itcast.cn/app/v1_0/user/channels'
    })
    // 等到频道的数据加载 然后返回 频道数据  返回的频道数据会和 data进行融合
    return { list: data.data.channels }
  },
  created () {
    // 第一次执行是 在后端 执行 渲染 该组件时  =>  拿到该组件的页面结构 => 实例化
    // 第二次执行是  客户端 已经回到了浏览器上 => 再执行一遍 ,前端实现接管
    console.log("执行了创建实例事件")
  }
}
</script>

<style>
  .header {
         height: 50px;
         background-color: aquamarine;
         text-align: center;
         font-size: 20px;
         line-height: 50px;
  }
.item {
     display: flex;
    justify-content: space-between;
    padding: 0px 10px;
    height: 40px;
    line-height: 40px;
   }
    span:nth-child(2) {
        font-size: 14px;
        color:#ccc;
}
</style>