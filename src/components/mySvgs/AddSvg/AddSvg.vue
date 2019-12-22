<template>
    <BackdropContainer 
        :toggleBackdrop="toggleAdd" 
        :active="active"
    >
        <div class="AddSvg">
            <input class="title" type="text" placeholder="Title...">
            <div class="content">
                <div class="output">

                </div>
                <div class="userInput">
                    <textarea placeholder="Paste Your SVG code"></textarea>
                    <textarea placeholder="Paste Your styles"></textarea>
                </div>
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
    padding: 10px;
}
.AddSvg h2{
    padding: 10px;
    font-weight: 400;
    border-bottom: var(--lightBlack) 1px solid;
}
.AddSvg .content{
    display: flex;
}
.AddSvg .output{
    width: 400px;
}
.AddSvg .userInput{
    width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    height: 300px;
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
    background: transparent;
    border: solid var(--pinkish) 2px;
}
.AddSvg textarea:first-of-type{
    width: 65%;
}
.AddSvg textarea:last-of-type{
    width: 30%;
}
</style>