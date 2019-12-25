<template>
    <div id="Svg">
        <main>
            <a @click="$router.go(-1)">back</a>
            <div class="loading-container" v-if="!getClickedSvg || init">
                <Loader/>
                <p>Loading SVG</p>
            </div>
            <div class="content" v-else >
                <h2>{{getClickedSvg.name}}</h2>
                <div class="svg-container" v-html="getClickedSvg.code">

                </div>
                <div class="html code-container">
                    <p>{{getClickedSvg.code}}</p>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import hljs from 'highlight.js'
import html from 'highlight.js/lib/languages/htmlbars'
import Loader from '../components/UI/Loading'
import 'highlight.js/styles/github.css';
hljs.registerLanguage('html', html)
hljs.configure({useBR:true,tabReplace:'    '})
export default {
    name: 'SvgById',
    components:{
        Loader
    },
    data(){
        return{
            init: true
        }
    },
    watch:{
        getClickedSvg(newVal, oldVal){
            if(!oldVal){
                this.init = false
            }
            else if(oldVal._id !== newVal._id){
                this.init = false
            }
        }
    },
    computed:{
        ...mapGetters(['getClickedSvg'])
    },
    methods:{
        ...mapActions(['getSingleSvg']),
        codeHiglighter(){
            // return hljs.highlightAuto(this.getClickedSvg.code).value
        }
    },
    created(){
        this.getSingleSvg(this.$route.params.id)
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
#Svg .code-container{
    max-height: 20vh;
    overflow-y: scroll;
    overflow-x: hidden;
    background: #eeee;
    max-width: 100%;
}
#Svg .code-container .hljs-tag{
    display: block;
}
#Svg .code-container .css{
    display: block;
    padding-left:30px; 
}
#Svg .loading-container{
    height: 50vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-direction: column;
    color: var(--pinkish);
}
</style>