import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Header from '@/components/header'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/index/',
    name: 'index',
    component: Index
  },
    {
      path: '/',
      name: 'header',
      component: Header
    }
  ]
})
