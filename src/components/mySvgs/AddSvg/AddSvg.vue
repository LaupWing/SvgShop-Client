<template>
    <BackdropContainer 
        :toggleBackdrop="toggleAdd" 
        :active="active"
    >
        <div class="AddSvg">
            <input class="title" type="text" placeholder="Title...">
            <div class="content">
                <div class="output" >
                    <div class="legend">Output</div>
                    <div class="svg-container" v-html="svg">

                    </div>
                </div>
                <div class="userInput">
                    <textarea placeholder="Paste Your SVG code" v-model="svg"></textarea>
                    <textarea placeholder="Paste Your styles"></textarea>
                </div>
            </div>
            <div class="buttons">
                <button @click="toggleAdd">cancel</button>
                <button>create</button>
            </div>
        </div>
    </BackdropContainer>
</template>

<script>
import BackdropContainer from '../../Backdrop/BackdropContainer'
export default {
    name: 'AddSvg',
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
            svg:null
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
}
.AddSvg .output{
    border: solid var(--pinkish) 2px;
    border-radius: 5px;
    width: 400px;
    height: 400px;
    margin-right: 30px;
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
    width: 500px;
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
}
.AddSvg textarea:focus{
    border: solid var(--pinkish) 2px;
}
.AddSvg textarea:first-of-type{
    width: 65%;
}
.AddSvg textarea:last-of-type{
    width: 30%;
}
.AddSvg .buttons{
    justify-content: center;
    display: flex;
}
.AddSvg .buttons button{
    margin: 20px;
}
</style>