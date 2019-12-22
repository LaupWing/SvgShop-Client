<template>
    <div class="card">
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
        // console.log(this.svgObj)
    },
    mounted(){
        console.dir(this.$el.querySelector('svg'))
        console.dir(this.$el.querySelector('svg style'))
    }
}
</script>

<style>

</style>