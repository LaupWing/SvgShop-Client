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
        try{
            await this.fetchUser()
        }catch(e){
            console.log(e)
        }
        this.loading = false
        console.log(this.getUser)
    }
}
</script>


<style>
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    --pinkish: #ff5693;
    --white: #ffffff;
    --brown: #f7e6ce;
    --lightBrown: #faf4e2;
    --lightBlack: rgba(0,0,0,.05);

}
input,
button,
textarea{
    outline: none;
    transition: .25s;
}
button{
    padding: 10px 15px;
    background: var(--pinkish);
    border-radius: 30px;
    border: none;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.35);
    cursor: pointer;
}
input{
    border: none;
    background: transparent;
    padding: 5px;
}
a{
    text-decoration: none;
    color: black;
}
main{
    margin: auto;
    max-width: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

/* Switch styling */
.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
}
.switch input { 
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked + .slider {
    background-color: var(--pinkish);
}

input:focus + .slider {
    box-shadow: 0 0 1px var(--pinkish);
}

input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>
