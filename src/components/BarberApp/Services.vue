<template>
    <div class="service-layout">
        <div class="welcome">
            <div class="d-flex px-3">
                <p class="align-self-end pe-2">Здравей, </p>
                <h3>Name</h3>
            </div>
            <div class="info rounded m-3 p-3">
                <p>От тук можеш да избереш процедурите за да резервираш своя час</p>
            </div>
        </div>
        <div class="services p-3 position-relative">
            <h5>Процедури</h5>
            <div class="products d-flex flex-wrap gap-4 justify-content-center my-3">
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
            </div>
            <button class="reserve position-absolute start-50 bottom-0 translate-middle-x my-3">НАПРЕД</button>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .welcome {
        height: 30vh;
    }
    .service-layout {
        margin: auto;
        max-width: 991px;
        color: #FFF6E5;
    }
    p,
    h3,
    h5 {
        margin-bottom: 0;
    }
    .info {
        background-color: #E08D41;
    }
    .services {
        height: 70vh;
        background-color: #F3E0B8;
        color: #525252;
        overflow: hidden;
    }
    .reserve {
        border: none;
        background-color: #E08D41;
        color: #FFF6E5;
        border-radius: 30px;
        font-size: 1.5rem;
        font-weight: 600;
        width: fit-content;
        padding: 5px 20px;
        margin: auto;
        display: block;
        &:hover {
            background-color: darken(#E08D41, 8%);
            color: #F3E0B8;
            scale: 1.03;
        }
    }
    .product {
        width: 80px;
        height: 80px;
        background-color: crimson;
    }
    .products {
        overflow: scroll;
        height: calc(100% - 104px);
    }
</style>