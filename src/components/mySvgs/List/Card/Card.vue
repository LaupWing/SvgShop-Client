<template>
    <div class="card">
        test
        <div class="svg-container" v-html="svgObj.code">

        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props:{
        svgObj: {
            type: Object,
            required: true
        }
    },
    created(){
        console.log(this.svgObj)
    }
}
</script>

<style>

</style>