import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index',
    },
    {
      path: '/index',
      name: 'index',
      component: ()=>  import('@/views/index')
    },
    {
      path: '/example',
      name: 'example',
      component: ()=>  import('@/views/example/example')
    },
    {
      path: '/example/detail',
      name: 'detail',
      component: ()=>  import('@/views/example/detail')
    },
    {
      path: '/company',
      name: 'company',
      component: ()=>  import('@/views/company/company')
    },
    {
      path: '/join',
      name: 'join',
      component: ()=>  import('@/views/join/join')
    },


    {
      path:'*',
      name:'404',
      component:()=>import('@/views/404/404')
    }
  ]
})

// 解决 Vue 重复点击相同路由
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
