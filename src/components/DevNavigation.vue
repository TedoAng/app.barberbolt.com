<template>
    <div class="dev-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/summary">Summary</router-link>
    </div>
</template>
<script>
</script>
<style lang="scss">
    .dev-nav {
        width: 80%;
        height: 5vh;
        background-color: #141C27;
        border-radius: 20px;
        color: #FFF6E5;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-weight: 600;
        a {
            text-decoration: none;
            color: #FFF6E5;
        }
    }
</style>