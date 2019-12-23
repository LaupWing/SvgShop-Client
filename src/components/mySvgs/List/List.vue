<template>
    <div id="ListSvg">
        <Card v-for="svg in svgs" :key='svg._id' :svgObj='svg'/>
    </div>
</template>

<script>
import Card from './Card/Card'
export default {
    name: 'ListSvg',
    components:{
        Card
    },
    props:{
        svgs:{
            type: Array,
            required: true
        }
    }
}
</script>

<style>
#ListSvg{
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
}
</style>