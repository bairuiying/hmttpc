import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Home from '@/views/home'// 用一种切换方式替换原有方式
import Login from '@/views/login'
import SecondHome from '@/views/home/second_home'
Vue.use(VueRouter)
// 挂载路由
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: Home,
    component: Home,

    children: [
      {
        path: '', // 二级路由的path什么都不写 ，代表默认的二级组件
        component: SecondHome // 默认二级路由组件
      }
    ]
  },
  {
    path: '/login',
    name: 'Login', // login的那么
    component: Login
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
