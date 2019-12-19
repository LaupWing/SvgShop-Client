<template>
    <nav id="NavBar">
        <div class="nav-content">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link v-if="!getUser" to="/login">Login</router-link>
            <router-link v-if="!getUser" to="/signup">Signup</router-link>
            <router-link to="/svgs">SVGS</router-link>
            <router-link v-if="getUser" to="/my_svgs">My SVGS</router-link>
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

</style>