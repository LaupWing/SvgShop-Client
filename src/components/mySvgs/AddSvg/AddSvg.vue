<template>
    <BackdropContainer>
        <div class="AddSvg">

        </div>
    </BackdropContainer>
</template>

<script>
import BackdropContainer from '../../Backdrop/BackdropContainer'
export default {
    name: 'AddSvg',
    components:{
        BackdropContainer
    },
    data(){
        return{

        }
    },
    methods:{

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