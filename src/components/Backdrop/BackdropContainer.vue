<template>
    <div id="BackdropContainer">
        <div id="Backdrop" @click="toggleBackdrop" v-if="active">

        </div>
        <div class="slotContainer" :class="checkActive">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BackdropContainer',
    props:{
        toggleBackdrop:{
            type: Function,
            required: true
        },
        active:{
            type: Boolean,
            required: true
        }
    },
    computed:{
        checkActive(){
            return this.active ? 'active' : null
        }
    },
    methods:{
    },
    created(){
        console.log(this.toggleBackdrop)
    }
}
</script>

<style>
#BackdropContainer .slotContainer{
    z-index: 200;
    transition: 1s ease-in transform;
}
#BackdropContainer .slotContainer.active{
    transform: translateY(0);
    opacity: 1;
}
#BackdropContainer .slotContainer{
    transform: translateY(-100vh);
    opacity: 0;
    position: fixed;
    top: 30%;
    margin: auto;
    left: 0;
    right: 0;
    transition: .5s;
    display: flex;
    justify-content: center;
}
#Backdrop{
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 100;
    background: rgba(0,0,0,.3);
    top: 0;
    left: 0;
}
</style>