<script setup>
</script>

<template>
    <section>
        <div class="container">
            <div class="row justify-content-center align-items-center h-100 p-3 p-sm-0">
                <div class="col-md-6 col-12">
                    <h1 class="mb-4">HI, I'M TEDO! Enthusiastic <span>CODER</span></h1>
                    <p class="mb-5">
                        I am a dedicated coder, driven by the desire 
                        to craft seamless and efficient software solutions. 
                        Armed with a solid understanding of programming 
                        languages and a meticulous approach to coding, 
                        I specialize in transforming intricate concepts into 
                        robust and user-friendly applications.
                    </p>
                    <button>Contact now</button>
                </div>
                <div class="col-md-6 col-12 d-md-block d-none">
                    <div class="profile text-center">
                        <img src="../assets/images/hero-profile.png" alt="profile">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    section {
        background-image: url("../assets/images/banner-scaled.jpg");
        background-position: center !important;
        background-repeat: no-repeat !important;
        background-size: cover !important;
        height:100vh;
        padding-top: 60px;
    }
    .container {
        height: 100%;
        color: #fff;
        h1 {
            font-weight: 800;
            font-size: 3rem;
            line-height: 48px;
            white-space: balance;
            span {
                color: #55E6A5;
            }
        }
        button {
            width: 180px;
            height: 50px;
            background-color: #55E6A5;
            color: #141C27;
            border: none;
            &:hover {
                background-color: darken(#55E6A5, 8%);
            }
        }
        p {
            color: #a2a2a2;
            font-weight: 500;
            text-wrap: balance;
        }
        .profile {
            img {
                width: 80% !important;
                height: auto;
                position: relative;
            }
        }
    }
    @media screen and (max-width: 767px) {
        section {
            height: auto;
            padding-bottom: 100px;
            padding-top: 140px;
        }
        .container {
            h1 {
                font-weight: 800;
                font-size: 2rem;
                line-height: 35px;
                white-space: balance;
                span {
                    color: #55E6A5;
                }
            }
        }
    }
    @media screen and (min-width: 1200px) {
        
    }
</style>
