<template>
    <div id="Signup">
        <h2>Signup</h2>
        <form @submit.prevent="handleSubmit"> 
            <div class="field">
                <label>Name</label>
                <input name="name" type="text" v-model="name">
            </div>
            <div class="field">
                <label>Email</label>
                <input name="email" type="email" v-model="email">
            </div>
            <div class="field">
                <label>Password</label>
                <input name="password" type="password" v-model="password">
            </div>
            <div class="field">
                <label>Confirm Password</label>
                <input name="passwordCheck" type="password" v-model="passwordCheck">
            </div>
            <button>Submit</button>
        </form>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'Signup',
    data(){
        return{
            password: '',
            passwordCheck: '',
            email: '',
            name: ''
        }
    },
    methods:{
        ...mapActions(['signupAndSet']),
        handleSubmit(){
            this.signupAndSet({
                password: this.password,
                email: this.email,
                name: this.name
            })
        }
    }
}
</script>

<style>
#Signup form{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
}
</style>