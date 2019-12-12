import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../pages/index'
import movieDetail from '../pages/movieDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', // 碰到这个路径跳转路由至index
    name: 'index',  // 给这个路由取的一个别名
    component: index // 代表在当前路径下，加载index路由
  },
  {
    path:'/movieDetail',
    name: 'movieDetail',
    component: movieDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
