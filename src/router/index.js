import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AddParking from '@/components/AddParking'
import SearchParking from '@/components/SearchParking'
import NotFound from '@/components/NotFound'

Vue.use(Router)

var childrenRoutes = [
  {
    path: '/AddParking',
    name: 'AddParking',
    component: AddParking
  },
  {
    path: '/SearchParking',
    name: 'SearchParking',
    component: SearchParking
  }
]

export default new Router({

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: childrenRoutes
    },
    {
      path: '*',
      name: 'Error',
      component: NotFound
    }
  ]
})

