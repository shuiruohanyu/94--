<template>
  <!-- _id.vue组件作为动态路由的组件 -->
  <!-- 加下划线的目的是标识 此 组件是动态路由组件 => nuxt 一种规范 -->
  <!-- _abc => abc 就是动态路由的参数的参数名 _表示 abc是动态路由参数 -->
  <!-- 和原来的vue-cli 不太一样 -->
  <!-- vue-cli 官方的 方式  纯前端项目-->
  <!-- nuxt 前后端项目 需要中后端 遵循规范 -->
  <div>
      我是动态路由 {{ $route.params.abc  }}
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>