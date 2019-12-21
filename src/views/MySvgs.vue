<template>
    <div id="My_Svgs">
        <main>
            <Header
                :styleObj="{
                    background: 'url(https://image.flaticon.com/sprites/authors/smashicons.png)',
                    height: '15vh',
                }"
                headerText= 'My SVGs'
            />
            <button>Add SVG</button>
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
#My_Svgs header h2{
    font-size: 1.5rem;
}
</style>