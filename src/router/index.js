import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Catalog from '@/views/category'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/category',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'Category',
      component: Catalog
    }
  ]
})
