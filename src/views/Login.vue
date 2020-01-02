<template>
    <div id="Login">
        <h2>Login</h2>
        <form @submit.prevent="loggingIn">
            <input type="text" placeholder="email" v-model="email">
            <input type="text" placeholder="password" v-model="password">
            <button>Submit</button>
        </form>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'Login',
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods:{
        ...mapActions(['loginUser']),
        loggingIn(){
            this.loginUser({
                email: this.email,
                password: this.password
            })
        }
    }
}
</script>

<style>

</style>