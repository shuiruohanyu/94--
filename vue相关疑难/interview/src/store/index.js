import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 监听vuex的数据变化 就是监听 state的数据变化
  state: {
    count: 0 // vuex数据
  },
  mutations: {
    updateCount (state) {
      state.count++
    }
  },
  actions: {
  },
  modules: {
    // 模块化 A  B  C D
    A: {
      namespaced: true, // 给子模块加一个命名空间 因为 不想 模块和模块之间冲突
      state: {},
      actions: {},
      mutations: {

      }
    },
    B: {
      namespaced: true, // 给子模块加一个命名空间 因为 不想 模块和模块之间冲突
      state: {},
      actions: {},
      mutations: {}
    }
  }
})
