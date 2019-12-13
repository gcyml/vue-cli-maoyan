import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../pages/index'
import movieDetail from '../pages/movieDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', // 碰到这个路径跳转路由至index
    name: 'index',  // 给这个路由取的一个别名
    component: index, // 代表在当前路径下，加载index路由
    meta: {
      keepAlive: true // 在meta属性中设置自定义属性，为true则保留路组件状态
    }
  },
  {
    path: '/movieDetail',
    name: 'movieDetail',
    component: movieDetail
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/login')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../pages/register')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
