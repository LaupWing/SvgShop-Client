import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Svgs from '../views/Svgs.vue'
import Svg from '../views/Svg.vue'

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
        component: About
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/svgs',
        name: 'Svgs',
        component: Svgs
    },
    {
        path: '/svg',
        name: 'Svg',
        component: Svg
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
