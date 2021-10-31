// 导入Vue和VueRouter
import Vue from 'vue'
import VueRouter from 'vue-router'

// 注册路由
Vue.use(VueRouter)

// 懒加载路由组件
const Home = () => import('@views/Home')
const Cake = () => import('@views/Cake')
const Message = () => import('@views/Message')
const MessageContent = () => import('@views/MessageContent')
const Music = () => import('@views/Music')
const Wish = () => import('@views/Wish')

// 配置路由
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cake',
    component: Cake
  },
  {
    path: '/message',
    component: Message
  },
  {
    path: '/content',
    component: MessageContent
  },
  {
    path: '/music',
    component: Music
  },
  {
    path: '/wish',
    component: Wish
  },
]
const router = new VueRouter({
  routes,
  // 因为gitee pages不支持history模式，因此使用hash模式
  // mode: 'history'
})

// 导出路由
export default router