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
    methods:{
        deleteStyleElAndAddInline(){
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
    },
    created(){
        // console.log(this.svgObj)
    },
    mounted(){
        this.deleteStyleElAndAddInline()
    }
}
</script>

<style>
.card{
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: 20px;
    border-radius: 10px;
}
.svg-container,
.svg-container svg{
    height: 100%;
}

</style>