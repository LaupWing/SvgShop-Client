<template>
  <div id="app">
    <NavBar/>
    <router-view/>
  </div>
</template>


<script>
import NavBar from './components/NavBar'
import {mapActions, mapGetters} from 'vuex'
export default {
    name: 'App',
    components:{
        NavBar
    },
    computed:{
        ...mapGetters(['getUser'])
    },
    methods:{
        ...mapActions(['fetchUser'])
    },
    created(){  
        this.fetchUser()
        console.log(this.getUser)
    }
}
</script>


<style>

</style>
