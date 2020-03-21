import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Course from '../views/Course.vue'
import Fe from '../views/Fe.vue'
import Rd from '../views/Rd.vue'

import User from '../views/User.vue'

import Count from '../views/Count.vue'

import Error from '../views/Error.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    alias: '/test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, 
  {
    path: '/course',
    name: 'Course',
    component: Course,
    children: [
      {
        path: 'fe',
        component: Fe
      },
      {
        path: 'rd',
        component: Rd
      }
    ]
  },
  {
    path: '/user/:id',
    name: 'User',
    component: User,
  },
  {
    path: '/count',
    name: 'Count',
    component: Count
  },
  {
    path: '*',
    component: Error
  }
]

const router = new VueRouter({
  mode: 'history', // hash
  base: process.env.BASE_URL,
  routes
})

export default router
