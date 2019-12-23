<template>
    <div class="card">
        <div class="svg-container" v-html="svgObj.code">

        </div>
    </div>
</template>

<script>
import transform from "css-to-react-native-transform"

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
        const svg = this.$el.querySelector('svg')
        const styleEl = this.$el.querySelector('svg style')
        const style = styleEl.innerHTML
        const classes = transform(style)
        for(const className in classes){
            const els = svg.querySelectorAll(`.${className}`)
            els.forEach(el=>{
                for(const key in classes[className]){
                    console.log(key, '=', classes[className][key])
                    el.style[key] = classes[className][key]
                }
            })
        }
        styleEl.remove()
    }
}
</script>

<style>

</style>