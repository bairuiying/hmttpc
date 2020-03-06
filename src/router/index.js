import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import home from '@/views/home'// 用一种切换方式替换原有方式
import login from '@/views/login'
Vue.use(VueRouter)
// 挂载路由
const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    // name: 'home',
    component: home
  },
  {
    path: '/login',
    name: 'login', // login的那么
    component: login
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
