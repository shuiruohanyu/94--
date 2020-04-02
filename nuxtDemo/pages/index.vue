<template>
  <!-- 如果去找一个目录 index文件 index文件就会被作为 默认页面 -->
  <!-- 编译之后的结果是不能够被修改得 只能修改源代码 -->
  <!-- a.js(源代码)(编译之前的) => a.min.js(编译之后的) -->
  <div>
      <nuxt-link to="/home">主页</nuxt-link>
      <nuxt-link to="/login">登录页</nuxt-link>
      <nuxt-link to="/users">跳到动态路由</nuxt-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
