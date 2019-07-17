import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AddParking from '@/components/AddParking'
import SearchParking from '@/components/SearchParking'
import NotFound from '@/components/NotFound'
import AddUser from '@/components/AddUser'
import Login from '@/components/Login'

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
      path: '/AddUser',
      name: 'AddUser',
      component: AddUser
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      name: 'Error',
      component: NotFound
    }
  ]
})

