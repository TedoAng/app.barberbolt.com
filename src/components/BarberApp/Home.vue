<script setup>
    import Logo from '@/assets/BarberBoltLogo.svg'
    import {ref, onMounted} from 'vue'
    import { GoogleLogin, decodeCredential } from 'vue3-google-login'
    import { useRouter } from 'vue-router';
    import { registerUser } from '@/services/barber-service'
    
    const reserve = ref(true);
    const router = useRouter();
    const loggedIn = ref(false);


    const callback = (response) => {
        let data = {};
        let user = {given_name: 'Test'};
        if (response === 'tedo') {
            data = {
                name: 'Test',
                email: 'admin@tvangelov.com',
                password: 'Pass2030',
                password_confirmation: 'Pass2030'
            }
        } else {
            user = decodeCredential(response.credential);
            data = {
                name: user.name,
                email: user.email,
                password: 'Pass2030',
                password_confirmation: 'Pass2030'
            }
        }
        
        registerUser(data).then(id => {
            localStorage.setItem('userData', JSON.stringify({...user, userId: id}));
            router.push('/services');
        });
    }

    const handleReserveBtn = () => {
        if (loggedIn.value) {
            router.push('/services');
        } else {
            reserve.value = !reserve.value
        }
    }

    // const logInWithFacebook = async() => {
    // window.FB.login(function(response) {
    //         if (response.authResponse) {
    //             window.FB.api('/me', {fields: 'name,email'}, (user) => {
    //                 const data = {
    //                     name: user.name.split(' ')[0],
    //                     email: user.email,
    //                     password: 'Pass2030',
    //                     password_confirmation: 'Pass2030'
    //                 }
    //                 registerUser(data).then(id => {
    //                 localStorage.setItem('userData', JSON.stringify({...user, userId: id, given_name: user.name.split(' ')[0]}));
    //                     router.push('/services');
    //                 });
    //             })
    //         }
    //     }
    // )};

    // const initFacebook = async() => {
    //   window.fbAsyncInit = function() {
    //     window.FB.init({
    //       appId: import.meta.env.VITE_FACEBOOK_APP_ID, //You will need to change this
    //       cookie: true, // This is important, it's not enabled by default
    //       version: 'v19.0'
    //     });
    //   };
    // }

    // const loadFacebookSDK = async (d, s, id) => {
    //   var js,
    //     fjs = d.getElementsByTagName(s)[0];
    //   if (d.getElementById(id)) {
    //     return;
    //   }
    //   js = d.createElement(s);
    //   js.id = id;
    //   js.src = "https://connect.facebook.net/en_US/sdk.js";
    //   fjs.parentNode.insertBefore(js, fjs);
    // }
  
    
    onMounted(() => {
        localStorage.removeItem('userData');
        localStorage.getItem('userData') ? loggedIn.value = true : false;
        // loadFacebookSDK(document, "script", "facebook-jssdk");
        // initFacebook();
    });
</script>

<template>
    <div class="layout mt-5">
        <Logo class="logo mb-4"/>
        <h1 class="text-center">Barber</h1>
        <h1 class="text-center">Bolt</h1>
        <div class="position-relative">
            <transition name="out">
                <div v-show="reserve" class="my-5 position-absolute top-50 start-50 translate-middle-x">
                    <h4 class="text-center">best style</h4>
                    <button class="reserve my-4" @click="handleReserveBtn">РЕЗЕРВИРАЙ</button>
                </div>
            </transition>
            <transition name="in">
                <div v-show="!reserve" class="my-5 pt-5 position-absolute top-50 start-50 translate-middle-x">
                    <a href="/auth/facebook" class="text-decoration-none d-none">
                        <button class="rounded social-button mx-auto position-relative my-3 fb-btn">
                            <i class="fa-brands fa-facebook"></i>
                            Вход с Facebook
                        </button>
                    </a>
                    <div class="reserve w-100 my-3 text-center" @click="callback('tedo')">
                        Вход за Тест
                    </div>
                    <GoogleLogin :callback="callback" :buttonConfig="{shape: 'pill', theme: 'filled_blue', width: '167'}"/>
                    <div class="reserve w-100 my-2 text-center fb-btn position-relative d-none" @click="logInWithFacebook">
                        <i class="fa-brands fa-facebook-f"></i> Вход с Facebook
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .out-enter-active,
    .out-leave-active {
        transition: opacity 0.5s ease;
    }
    .out-enter-from,
    .out-leave-to {
        opacity: 0;
    }
    .in-enter-active,
    .in-leave-active {
        transition: opacity 0.5s ease;
    }
    .in-enter-from,
    .in-leave-to {
        opacity: 0;

    }
    h1 {
        color: #FFF6E5;
        font-size: 6rem;
        font-weight: 800;
        font-family: "NotoSerifCBlack", serif;
        line-height: 5rem;
        margin-bottom: 0;
    }
    h4 {
        color: #FFF6E5;
        font-family: "Noto Serif", serif;
        font-style: italic;
        font-weight: 100;
        font-size: 2.5rem;
    }
    .reserve {
        border: none;
        background-color: #E08D41;
        color: #FFF6E5;
        border-radius: 30px;
        font-size: 1rem;
        font-weight: 600;
        height: 40px;
        padding: 5px 20px;
        margin: auto;
        display: block;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        &:active,
        &:hover {
            background-color: #e2a062;
        }
    }
    .fb-btn {
        background-color: #4768B1;
        font-size: 0.85rem;
        font-weight: 400;
        font-family: "Google Sans",arial,sans-serif;
        height: 40px;
        padding: 0;
        padding-left: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        i {
            position: absolute;
            left: 0;
            top: 0;
            padding: 10.5px 15px;
            font-size: 1.1rem;
        }
        &:active,
        &:hover {
            background-color: #5c78b6;
        }
    }
    
    @media only screen and (max-width: 575px) {
        h1 {
            font-size: 5rem;
        }
    }
    @media screen and (min-width: 992px) {
        .layout {
            margin: auto;
            width: 50%;
            max-width: 991px;
            padding: 10px;
        }
    }
</style>

<style lang="scss">
    .logo {
        height: 30dvh;
        display: block;
        margin: auto;
    }
</style>
