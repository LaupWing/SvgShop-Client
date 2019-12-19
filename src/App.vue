<template>
    <div id="app">
        <Loading v-if="loading"/>
        <NavBar/>
        <router-view/>
    </div>
</template>


<script>
import NavBar from './components/NavBar'
import Loading from './components/Loading'
import {mapActions, mapGetters} from 'vuex'
export default {
    name: 'App',
    components:{
        NavBar,
        Loading
    },
    computed:{
        ...mapGetters(['getUser'])
    },
    data(){
        return{
            loading: true
        }
    },
    methods:{
        ...mapActions(['fetchUser'])
    },
    async created(){
        await this.fetchUser()
        this.loading = false
    }
}
</script>


<style>
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
a{
    text-decoration: none;
    color: black;
}
</style>
