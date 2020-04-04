<template>
  <div class="about">
    <h1>vuex中的数据{{ count  }}</h1>
    <h2>监听到vuex的变化次数 {{changeCount  }}</h2>
    <button @click="change">改变数据(第一种方案)</button>
    <button @click="change2">改变数据(第二种方案)</button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
// import store from '@/store'
export default {
  data () {
    return {
      changeCount: 0
    }
  },
  computed: {
    ...mapState(['count']) // 映射vuex中的count到计算属性上
  },
  // watch: {
  //   //  watch可以监听data数据电话 可以监听计算属性变化 props变化
  //   count () {
  //     // 此时计算属性发生了变化
  //     this.changeCount++ // 用本地数据记录vuex变化
  //   }
  // },
  methods: {
    change () {
      // 改变 vuex中的state
      this.$store.commit('updateCount') // 提交mutations
    },
    change2 () {
      // 改变vuex第二种方案
      this.$store.commit('updateCount') // 提交mutations
    }
  },
  created () {
    // 所有的监听都必须在页面初始化 组件初始化 的时候监听
    // 应该在钩子函数初始化之后编写
    // watch(func(回调函数), func(回调函数))
    // watch会监听 第一个回调函数的返回值
    this.$store.watch((state) => {
      // 要监听state中的count
      return state.count // 表示该值会被监听
    }, () => {
      // 如果此值发生了改变
      // 会调用第二个参数
      this.changeCount++
    })
  }
}
</script>
