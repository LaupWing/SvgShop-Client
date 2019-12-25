<template>
    <div id="Svg">
        <main>
            <a @click="$router.go(-1)">back</a>
            <h2>SVG</h2>
        </main>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name: 'SvgById',
    methods:{
        ...mapActions(['getSingleSvg'])
    },
    created(){
        console.log(this.$route.params.id)
        this.getSingleSvg(this.$route.params.id)
    }
}
</script>

<style>

</style>