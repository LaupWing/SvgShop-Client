<template>
    <div id="Svgs">
        <main>
            <Header
                :styleObj="{
                    background: 'url(https://image.flaticon.com/sprites/authors/smashicons.png)',
                    height: '15vh',
                }"
                headerText= 'All SVGs'
            />
            <List 
                v-if="getAllSvgsObj.docs" 
                :svgs="getAllSvgsObj.docs"
            />
        </main>
    </div>
</template>

<script>
import Header from '../components/Header'
import {mapActions, mapGetters} from 'vuex'
import List from '../components/allSvgs/List'

export default {
    name: 'Svgs',
    components:{
        Header,
        List
    },
    computed:{
        ...mapGetters(['getAllSvgsObj'])
    },
    methods:{
        ...mapActions(['fetchAllSvgs'])
    },
    created(){
        this.fetchAllSvgs()
    }
}
</script>

<style>
#Svgs header h2{
    font-size: 1.5rem;
}
</style>