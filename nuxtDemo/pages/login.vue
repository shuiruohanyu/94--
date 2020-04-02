<template>
  <div>
      <h1>登录页面</h1>
      <h2>{{ name }}</h2>
      <input type="text" placeholder="请输入您的登录名">
         <input type="text" placeholder="请输入您的密码">
         <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
    data  () {
        return  {
            name: '张三'
        }
    },
   methods: {
     login () {
        this.name = '李四'
     }
   }
}
</script>

<style>

</style>