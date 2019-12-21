<template>
    <div id="My_Svgs">
        <Header
            :styleObj="{
                background: 'url(https://image.flaticon.com/sprites/authors/smashicons.png)',
            }"
            headerText= 'My SVGS'   
        />
    </div>
</template>

<script>
import Header from '../components/Header'
export default {
    name: 'Svgs',
    components:{
        Header
    }
}
</script>

<style>

</style>