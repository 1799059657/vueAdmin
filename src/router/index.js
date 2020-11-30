import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/addUser',
    name: 'addUser',
    component: () => import('../views/addUser.vue')
  },
  {
    path: '/upUser',
    name: 'upUser',
    component: () => import('../views/upUser.vue')
  },
  {
    path: '/qqUpUser',
    name: 'qqUpUser',
    component: () => import('../views/upQQUser.vue')
  },
  {
    path: '/addQQUser',
    name: 'addQQUser',
    component: () => import('../views/addQQUser.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, form, next) => {
  if (!to.name === 'Login') {
    console.log('123')
    next()
  } else {
    console.log('321')
    next()
  }
})

export default router
