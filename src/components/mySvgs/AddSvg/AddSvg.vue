<template>
    <BackdropContainer 
        :toggleBackdrop="toggleAdd" 
        :active="active"
    >
        <div class="AddSvg">

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
    width: 100px;
    height: 100px;
    background: white;
    z-index: 200;
}
</style>