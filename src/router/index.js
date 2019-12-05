import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import firstPage from '@/components/firstPage'
import secondPage from '@/components/secondPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/1',
      name: 'firstPage',
      component: firstPage
    },
    {
      path: '/2',
      name: 'secondPage',
      component: secondPage
    }
  ]
})
