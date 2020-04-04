import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history', // mode的意思是选择 history模式还是 hash模式
  base: process.env.BASE_URL, // base设置一个项目的基础地址  baidu
  // BASE_URL dev环境 (dev)  test环境 (test) 预发布环境(prePro) 生产环境(pro)
  // 每个环境的后台请求地址肯定是不一样的
  // 如果看到环境变量 就说明 是区分环境的
  // 需要
  routes
})

export default router
