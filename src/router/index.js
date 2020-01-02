import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Svgs from '../views/Svgs.vue'
import SvgById from '../views/Svg.vue'
import MySvgs from '../views/MySvgs.vue'
import store from '../store/modules/user'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
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
        path: '/svg/:id',
        name: 'SvgById',
        component: SvgById
    },
    {
        path: '/my_svgs',
        name: 'MySvgs',
        component: MySvgs,
        meta:{
            requiresAuth: true
        }
    }
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to,from, next)=>{
    if(to.matched.some(rec => rec.meta.requiresAuth)){
        if(store.state.user){
            next()
        }
        else{
            next({name: 'Login'})
        }
    }
    else{
        next()
    }
})

export default router
