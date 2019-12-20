<template>
    <header :style="{...styleObj, background: backgroundUrl}">
        <div class="conten">
            <h2>{{headerText}}</h2>
            <p v-if="subText">{{subText}}</p>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props:{
        backgroundUrl:{
            type: String,
            required: true
        },
        headerText:{
            type: String,
            required: true
        },
        styleObj:{
            type: Object,
            required: true
        },
        subText:{
            type: String
        }
    }
}
</script>

<style>
header{
    width: 100%;
    height: 30vh;
}
</style>