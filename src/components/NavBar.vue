<template>
    <nav id="NavBar">
        <div class="nav-content">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/login">Login</router-link>
            <router-link to="/signup">Signup</router-link>
            <router-link to="/svgs">SVGS</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name:'NavBar'
}
</script>

<style>

</style>