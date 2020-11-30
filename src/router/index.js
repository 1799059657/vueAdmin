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
  let token = localStorage.getItem('token')
  console.log(to.name)
  if (to.name !== 'Login') {
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
