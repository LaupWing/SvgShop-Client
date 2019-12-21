<template>
    <div id="Svgs">
        <main>
            <Header
                :styleObj="{
                    background: 'url(https://image.flaticon.com/sprites/authors/smashicons.png)',
                    height: '20vh',
                }"
                headerText= 'All SVGs'
            />
        </main>
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
#Svgs header h2{
    font-size: 1.5rem;
}
</style>