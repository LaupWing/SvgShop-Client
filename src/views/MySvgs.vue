<template>
    <div id="My_Svgs">
        <AddSvg :toggleAdd="toggleAdd" :active="addModal"/>
        <main>
            <Header
                :styleObj="{
                    background: 'url(https://image.flaticon.com/sprites/authors/smashicons.png)',
                    height: '15vh',
                }"
                headerText= 'My SVGs'
            />
            <button @click="toggleAdd">Add SVG</button>
            <Nav/>
            <List :svgs='getUserSvgs'/>
        </main>
    </div>
</template>

<script>
import Header from '../components/Header'
import Nav from '../components/mySvgs/Nav/Nav'
import AddSvg from '../components/mySvgs/AddSvg/AddSvg'
import {mapActions, mapGetters} from 'vuex'
import List from '@/components/mySvgs/List/List'
export default {
    name: 'Svgs',
    components:{
        Header,
        AddSvg,
        List,
        Nav
    },
    computed:{
        ...mapGetters(['getUserSvgs'])
    },
    data(){
        return{
            addModal: false
        }
    },
    methods:{
        ...mapActions(['getUserSvgsFromDB']),
        toggleAdd(){
            this.addModal = !this.addModal
        }
    },
    created(){
        this.getUserSvgsFromDB()
    }
}
</script>

<style>
#My_Svgs header{
    margin-bottom: 20px; 
}
#My_Svgs header h2{
    font-size: 1.5rem;
}
#My_Svgs button{
    align-self: flex-start;
}
</style>