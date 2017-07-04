import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List/List'
import Details from '@/components/Details/Details'
import FaveList from '@/components/FaveList/FaveList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: List
    },
    {
      path: '/favorites',
      name: 'favelist',
      component: FaveList
    },
    {
      path: '/details/:id',
      name: 'details',
      component: Details
    }
  ]
})
