<template>
    <header>

    </header>
</template>

<script>
export default {
    name: 'Header',
    props:{
        background:{
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

</style>