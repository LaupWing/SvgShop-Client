<template>
    <main id="Signup">
        <div class="signup-container">
            <h2>Signup</h2>
            <form @submit.prevent="handleSubmit">
                <input name="name" type="text" v-model="name" placeholder="name">
                <input name="email" type="email" v-model="email" placeholder="Email">
                <input name="password" type="password" v-model="password" placeholder="Password">
                <input name="passwordCheck" type="password" v-model="passwordCheck" placeholder="Confirm Password">
                <button>Submit</button>
            </form>
        </div>
    </main>
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
#Signup{
    margin-top: 20vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.signup-container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: var(--lightBrown);
    padding: 10px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.37);
    border-radius: 10px;
}
.signup-container form{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 10px;
}
.signup-container form input{
    margin: 20px 0;
    width: 250px;
    border-bottom: 1px solid var(--pinkish);
}
.signup-container form button{
    margin: 20px 0;
}
#Signup form{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
}
</style>