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

</style>