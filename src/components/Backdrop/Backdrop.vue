<template>
    <div id="Backdrop">

    </div>
</template>

<script>
export default {
    name: 'Backdrop'
}
</script>

<style>
#Backdrop{
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 1000;
    background: rgba(0,0,0,.3);
}
</style>