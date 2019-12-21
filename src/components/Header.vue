<template>
    <header 
        :style="{
            ...styleObj,
        }"
    >
        <div class="content">
            <h2>{{headerText}}</h2>
            <p v-if="subText">{{subText}}</p>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props:{
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
    /* min-height: 250px; */
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
}
header h2{
    padding: 30px 15px;
    background: rgba(255,255,255,.8);
    font-size: 2.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}
</style>