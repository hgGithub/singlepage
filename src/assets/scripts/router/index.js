import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/pages/HelloWorld'
import Test from '@/components/pages/Test'

Vue.use(Router)

export default new Router({
  // mode: 'history', // 需要服务器配置
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
    // {
    //   path: '/404',
    //   name: 'Test',
    //   component: Test // 将来替换为自定的404组件
    // },
    // {
    //   path: '/500',
    //   name: 'Test',
    //   component: Test // 将来替换为自定的404组件
    // }
  ]
})
