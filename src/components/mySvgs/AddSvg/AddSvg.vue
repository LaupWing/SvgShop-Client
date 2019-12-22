<template>
    <BackdropContainer 
        :toggleBackdrop="toggleAdd" 
        :active="active"
    >
        <div class="AddSvg">
            <input class="title" type="text" placeholder="Title..." v-model="title">
            <div class="content">
                <div class="output" :style='checkSvg'>
                    <div class="legend">Output</div>
                    <div class="svg-container" v-html="code">

                    </div>
                </div>
                <div class="userInput">
                    <textarea placeholder="Paste Your SVG code" v-model="code"></textarea>
                </div>
            </div>
            <div class="private">
                <p><strong>Private</strong></p>
                <label class="switch">
                    <input type="checkbox" :checked="private">
                    <span class="slider round"></span>
                </label>
            </div>
            <p class="feedback" v-if="feedback && !code">{{feedback}}</p>
            <div class="buttons">
                <button @click="toggleAdd">cancel</button>
                <button @click="createSvg">create</button>
            </div>
        </div>
    </BackdropContainer>
</template>

<script>
import BackdropContainer from '../../Backdrop/BackdropContainer'
import cssParser from '../../../utils/stringParse/parceCSStext'
import {mapGetters, mapActions} from 'vuex'
export default {
    name: 'AddSvg',
    computed:{
        ...mapGetters(['getUser']),
        checkSvg(){
            if(!this.code){
                return {
                    height: '400px'
                }
            }else{
                return{
                    height: 'auto'
                }
            }
        }
    },
    props:{
        toggleAdd:{
            type: Function,
            required: true
        },
        active:{
            type: Boolean,
            required: true
        },
    },
    components:{
        BackdropContainer
    },
    data(){
        return{
            code:null,
            private: false,
            feedback: null,
            title: null
        }
    },
    methods:{
        ...mapActions(['saveSvgToDB']),
        createSvg(){
            if(this.code && this.title){
                this.code = null,
                this.private = false,
                this.title = null
                this.toggleAdd()
                this.saveSVG()
            }else{
                this.feedback ='You need to set an svg'
            }
        },
        saveSVG(){
            const svgObj = {
                private: this.private,
                code: this.code,
                name: this.title
            }
            this.saveSvgToDB(svgObj)
        }
    }
}
</script>

<style>
.AddSvg{
    /* width: 500px; */
    background: white;
    z-index: 200;
    border-radius: 10px;
    padding: 25px;
}
.AddSvg h2{
    padding: 10px;
    font-weight: 400;
    border-bottom: var(--lightBlack) 1px solid;
}
.AddSvg .content{
    display: flex;
    margin: 10px 0;
    align-items: flex-start;
}
.AddSvg .output{
    border: solid var(--pinkish) 2px;
    border-radius: 5px;
    width: 400px;
    height: 400px;
    margin-right: 30px;
    transition: .5s;
    position: relative;
}
.AddSvg .output .svg-container{
    width: 100%;
    height: 100%;
}
.AddSvg .output .legend{
    position: absolute;
    top: 0;
    left: 0;
    text-transform: uppercase;
    font-size: .8rem;
    background: var(--pinkish);
    color: white;
    padding: 5px 10px;
    border-radius: 0 0 5px 0;
}
.AddSvg .userInput{
    width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 400px;
}
.AddSvg input{
    border-bottom: transparent 2px solid;
}
.AddSvg input:focus{
    border-color: var(--pinkish);
}
.AddSvg input.title{
    width: 100%;
    font-size: 2rem;
    color: var(--pinkish);
    margin-bottom: 10px;
}
.AddSvg input.title::placeholder{
    font-size: 2rem;
}
.AddSvg textarea{
    resize: none;
    border-radius: 5px;
    padding: 5px;
    height: 150px;
    border: none;
    background: var(--lightBlack);
    height: 100%;
    width: 100%;
}
.AddSvg textarea:focus{
    border: solid var(--pinkish) 2px;
}
.AddSvg .buttons{
    justify-content: center;
    display: flex;
}
.AddSvg .buttons button{
    margin: 20px;
}
.AddSvg .private{
    margin: 15px;
    display: flex;
    align-items: center;
    color: var(--pinkish);
}
.AddSvg .private .switch{
    margin-left: 10px;
}
.AddSvg .feedback{
    text-align: center;
}
</style>