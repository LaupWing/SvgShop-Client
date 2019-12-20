<template>
    <div class="about">
        <Header
            :styleObj="{
                background: 'url(https://image.flaticon.com/sprites/authors/smashicons.png)',
            }"
            headerText= 'About'   
        />
    </div>
</template>

<script>
import Header from '../components/Header'
export default {
    name: 'About',
    components:{
        Header
    }
}
</script>

<style>

</style>
