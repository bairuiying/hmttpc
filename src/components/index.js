// 全局注册
import LayoutAside from './home/layout-aside'
import LayoutHeader from './home/layout-header'

export default {
  install: function (Vue) {
    // 注册全局
    Vue.component('layout-header', LayoutHeader)
    Vue.component('layout-aside', LayoutAside)
  }
}
