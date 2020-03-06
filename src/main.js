import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUi from 'element-ui'// 引入模块
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'// 引入样式
import '@/styles/index.less'

Vue.config.productionTip = false
Vue.use(ElementUi)// 全局注册element-ui框架 一旦全局注册 所有的位置都可以使用组件
// Vue.use实际上 会调用Element对象里的一个方法 install方法 并传入Vue对象
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'// 配置公共请求头地址
Vue.prototype.$axios = axios// 将axios赋值给Vue对象的原型属性
new Vue({
  router,
  ElementUi,
  axios,
  render: h => h(App)
}).$mount('#app')
