<template>
    <div id="BackdropContainer">
        <Backdrop/>
        <slot></slot>
    </div>
</template>

<script>
import Backdrop from './Backdrop'
export default {
    name: 'BackdropContainer',
    components:{
        Backdrop
    }
}
</script>

<style>
#BackdropContainer{
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center; 
}
</style>