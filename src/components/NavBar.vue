<template>
    <nav id="NavBar">
        <div class="nav-content">
            <h1>SVGshop</h1>
            <ul>
                <router-link to="/">Home</router-link>
                <router-link v-if="!getUser" to="/login">Login</router-link>
                <router-link v-if="!getUser" to="/signup">Signup</router-link>
                <router-link to="/svgs">All SVGS</router-link>
                <router-link v-if="getUser" to="/my_svgs">My SVGS</router-link>
                <a @click.prevent="logout" v-if="getUser">Logout</a>
            </ul>
        </div>
    </nav>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name:'NavBar',
    computed:{
        ...mapGetters(['getUser'])
    },
    methods:{
        logout(){
            console.log(this.getUser)
        }
    }
}
</script>

<style>
#NavBar{
    padding: 20px 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
#NavBar .nav-content{
    display: flex;
    align-items: center;
    max-width: 600px;
    width: 100%;
    justify-content: space-between;
}
#NavBar .nav-content a{
    margin: 0 15px;
    cursor: pointer;
}
#NavBar .nav-content a.router-link-exact-active{
    color: var(--pinkish);
    font-weight: 600;
    border-bottom: solid 2px var(--pinkish);
}
</style>