<template>
    <div class="card">
        <div class="svg-container" v-html="svgObj.code">

        </div>
    </div>
</template>

<script>
import transform from "css-to-react-native-transform"
import strings from '../../../../utils/stringParse/stringsManipulator'
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
                        if(typeof classes[className][key]!=='number'){
                            if(classes[className][key].startsWith('url')){
                                const splitBy = 'url(#'
                                const splitted = classes[className][key]
                                    .replace(splitBy, '')
                                    .replace(')', '')
                                const finalId = `url(#${this.idGenerator(splitted)})`
                                el.style[key] = finalId
                                continue
                            }
                        }
                        el.style[key] = classes[className][key]
                    }
                })
            }
            styleEl.remove()
        },
        scopingStylesById(){
            const childs = Array.from(this.$el.querySelector('svg defs').children)
            childs.forEach(child=>{
                child.id = this.idGenerator(child.id)
                if(child.href){
                    console.log(child.id)
                    child.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', child.id);
                    // console.log(child.href)
                    console.log(child.href)
                }
            })
        },
        idGenerator(id){
            return `${strings.replaceWhiteSpaces(this.svgObj.name)}_${this.svgObj._id}_${id}`
        }
    },
    created(){
        console.log(this.svgObj)
    },
    mounted(){
        this.deleteStyleElAndAddInline()
        this.scopingStylesById()
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