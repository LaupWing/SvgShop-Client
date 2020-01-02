<template>
    <div id="allSvgs-list">
        <Card v-for="svg in svgs" :key='svg._id' :svgObj='svg'/>
    </div>
</template>

<script>
import Card from '@/components/Card/Card'
export default {
    name: 'AllSvgs',
    components:{
        Card
    },
    props:{
        svgs:{
            type: Array,
            required: true
        }
    },
    created(){
        console.log(this.svgs)
    }
}
</script>

<style>
#allSvgs-list{
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
}
</style>