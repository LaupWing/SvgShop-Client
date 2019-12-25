<template>
    <div id="Svg">
        <main>
            <a @click="$router.go(-1)">back</a>
            <div class="content" v-if="getClickedSvg" >
                <h2>{{getClickedSvg.name}}</h2>
                <div class="svg-container" v-html="getClickedSvg.code">

                </div>
                <div class="code-container" v-html="test">

                </div>
            </div>
        </main>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import hljs from 'highlight.js'
import html from 'highlight.js/lib/languages/htmlbars'
import 'highlight.js/styles/github.css';
hljs.registerLanguage('html', html)
export default {
    name: 'SvgById',
    data(){
        return{
            test: null
        }
    },
    computed:{
        ...mapGetters(['getClickedSvg'])
    },
    methods:{
        ...mapActions(['getSingleSvg'])
    },
    created(){
        this.getSingleSvg(this.$route.params.id)
        setTimeout(()=>{
            this.test = hljs.highlightAuto(this.getClickedSvg.code).value
            console.log(highlightedCode)
        },2000)
    }
}
</script>

<style>
#Svg .content{
    width: 90%;
    margin: 20px 0;
}
#Svg svg{
    width: 100%;
}
#Svg h2{
    background: var(--pinkish);
    width: 100%;
    color: white;
    padding: 10px;
    border-radius: 10px 10px 0 0;
}
#Svg .svg-container{
    width: 100%;
    overflow: hidden;
}
#Svg a{
    align-self: flex-start;
    margin: 10px;
    font-weight: bold;
    border-bottom: 2px solid var(--pinkish);
    cursor: pointer;
    font-size: 1.2rem;
    color: var(--pinkish);
}
</style>