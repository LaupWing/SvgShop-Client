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
        </main>
    </div>
</template>

<script>
import Header from '../components/Header'
import AddSvg from '../components/mySvgs/AddSvg/AddSvg'

export default {
    name: 'Svgs',
    components:{
        Header,
        AddSvg
    },
    data(){
        return{
            addModal: false
        }
    },
    methods:{
        toggleAdd(){
            console.log('toggle')
            this.addModal = !this.addModal
        }
    }
}
</script>

<style>
#My_Svgs header h2{
    font-size: 1.5rem;
}
</style>