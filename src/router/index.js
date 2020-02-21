import Vue from 'vue'
import Router from 'vue-router'
import Bro from '@/components/Bro'
import CheckList from '@/components/CheckList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'bro',
      component: Bro
    },
    {
      path: '/check',
      name: 'CheckList',
      component: CheckList
    }
  ]
})
