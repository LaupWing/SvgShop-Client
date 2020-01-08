<template>
    <main id="Login">
        <div class="login-container">
            <h2>Login</h2>
            <form @submit.prevent="loggingIn">
                <input type="text" placeholder="email" v-model="email">
                <input type="text" placeholder="password" v-model="password">
                <button>Login</button>
            </form>
        </div>
    </main>
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
        async loggingIn(){
            await this.loginUser({
                email: this.email,
                password: this.password
            })
            this.$router.push('/my_svgs')
        }
    }
}
</script>

<style>
#Login{
    margin-top: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login-container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: var(--lightBrown);
    padding: 10px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.37);
    border-radius: 10px;
}
.login-container form{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 10px;
}
.login-container form input{
    margin: 20px 0;
    width: 250px;
    border-bottom: 1px solid var(--pinkish);
}
.login-container form button{
    margin: 20px 0;
}

</style>