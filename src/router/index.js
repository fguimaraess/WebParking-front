import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AddParking from '@/components/AddParking'
import SearchParking from '@/components/SearchParking'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/AddParking',
      name: 'AddParking',
      component: AddParking
    },
    {
      path: '/SearchParking',
      name: 'SearchParking',
      component: SearchParking
    },
    {
      path: '*',
      name: 'Error',
      component: NotFound
    }
  ]
})

