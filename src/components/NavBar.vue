<template>
    <nav id="NavBar">
        <div class="nav-content">
            <h1>SVGshop</h1>
            <ul>
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
                <router-link v-if="!getUser" to="/login">Login</router-link>
                <router-link v-if="!getUser" to="/signup">Signup</router-link>
                <router-link to="/svgs">SVGS</router-link>
                <router-link v-if="getUser" to="/my_svgs">My SVGS</router-link>
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
    }
}
</script>

<style>
#NavBar{
    padding: 20px 10px;
    width: 100%;
    background: orange;
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
}
</style>