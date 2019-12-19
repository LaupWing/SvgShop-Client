<template>
    <div id="Signup">
        <h2>Signup</h2>
        <form>
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