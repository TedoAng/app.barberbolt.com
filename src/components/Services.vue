<script setup>
</script>

<template>
    <section>
        <div class="container py-5">
            <div class="row justify-content-center py-5">
                <div class="col-md-6 col-12 text-center">
                    <h5>MY SERVICE</h5>
                    <h2>
                        Crafting stories through
                        design and innovation
                    </h2>
                </div>
            </div>
            <div class="row justify-content-center p-3 p-sm-0 py-5">
                <div class="col-lg-4 col-sm-6 col-12 text-center">
                    <div class="cardbox">
                        <i class="material-icons">space_dashboard</i>
                        <h4>Website Design</h4>
                        <p>
                            Elevate your online presence with cutting-edge website design services.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-12 text-center">
                    <div class="cardbox">
                        <i class="material-icons">apps</i>
                        <h4>App Development</h4>
                        <p>
                            Experience innovation at your fingertips with our mobile app. Our app brings convenience and functionality together.
                        </p>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-12 text-center">
                    <div class="cardbox">
                        <i class="material-icons">draw</i>
                        <h4>Logo Design</h4>
                        <p>
                            Unlock the power of a strong visual identity with our logo design expertise.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    section {
        background-color: #02050A
    }
    .cardbox {
        padding: 0px 40px 40px 40px;
        border: 2px solid #191919;
        height: calc(100% - 50px);
        margin-top: 50px;
        h4 {
            color: #fff;
            margin-bottom: 20px;
        }
        p {
            color: #a2a2a2;
            font-weight: 500;
            text-wrap: balance;
            margin-bottom: 0;
        }
        i {
            font-size: 8rem;
            color: #55E6A5;
            position: relative;
            top: -50px;
        }
    }
    h5 {
        color: #55E6A5;
    }
    h2 {
        color: #fff;
        font-weight: 700;
        font-size: 2.5rem;
    }
    @media screen and (max-width: 767px) {
        h2 {
            font-size: 2rem;
        }
    }
</style>