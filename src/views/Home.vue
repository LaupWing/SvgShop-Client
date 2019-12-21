<template>
  <div id="Home">
      <Header
            :styleObj="{
                background: 'url(https://image.flaticon.com/sprites/authors/smashicons.png)',
            }"
            headerText= 'Home'   
        />
  </div>
</template>

<script>
import Header from '../components/Header'
export default {
    name: 'Home',
    components: {
        Header
    }
}
</script>
