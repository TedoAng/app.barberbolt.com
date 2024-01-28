<script setup>
import Logo from '../assets/logo.svg';
import { sendMessage } from '../services/form-service';
import { ref } from 'vue';

const formData = ref({
    name: null,
    email: null,
    message: null,
    error: {
        name: null,
        email: null,
        message: null
    },
    sent: false
});

const submitForm = async() => {
    if (typeof(formData.value.name) != 'string' || formData.value.name === null) {
        return formData.value.error.name = 'Invalid name!'
    }
    if (typeof(formData.value.email) != 'string' || formData.value.email === null) {
        return formData.value.error.email = 'Invalid email!'
    }
    if (formData.value.message === null || formData.value.message.length < 5 || formData.value.message.length > 300) {
        return formData.value.error.message = 'Message must be between 5 - 300 symbols!'
    }

    formData.value.error = {};

    const data = {
        name: formData.value.name,
        email: formData.value.email,
        message: formData.value.message,
    }
    try {
        const request = await sendMessage(data)
        request ? formData.value.sent = true  : null;
    } catch (error) {
        console.log(error);
    }
}
</script>

<template>
    <section class="side-bar">
        <div class="header d-flex justify-content-between align-items-center">
            <Logo class="logo"/>
            <div class="close" @click="$emit('openSide')">
                <div class="line1"></div>
                <div class="line2"></div>
            </div>
        </div>
        <div class="body">
            <h4>ABOUT US</h4>
            <p>
                Ready to take the next step? Contact me now for a personalized 
                consultation and propel your digital presence forward. 
                Let's make it happen together!
            </p>
            <h4>GET IN TOUCH</h4>
            <div v-if="formData.sent">
                <div class="thanks-msg">
                    <h4>Message sent, we will contact you soon.</h4>
                    <h3>Thanks!</h3>
                </div>
            </div>
            <form v-else id="demo-form" action="" @submit.prevent="submitForm">
                <div class="position-relative">
                    <input v-model="formData.name" type="text" placeholder="Your Name">
                    <small class="position-absolute start-0 bottom-0 mb-2 ps-1 text-danger">{{formData?.error.name}}</small>
                </div>
                <div class="position-relative">
                    <input v-model="formData.email" type="text" placeholder="Your Email">
                    <small class="position-absolute start-0 bottom-0 mb-2 ps-1 text-danger">{{formData?.error.email}}</small>
                </div>
                <div class="position-relative">
                    <textarea v-model="formData.message" class="message-box" placeholder="Message"></textarea>
                    <small class="position-absolute start-0 bottom-0 mb-2 ps-1 text-danger">{{formData?.error.message}}</small>
                </div>
                
                
                <button class="submit g-recaptcha" 
                data-sitekey="6LeoTT4pAAAAAO9U_pUselLatS3QNVMMVMxSaIHv" 
                data-callback='onSubmit' 
                data-action='submit'>SUBMIT</button>
            </form>
        </div>
    </section>
</template>

<style lang="scss" scoped>
   .side-bar {
    width: 400px;
    max-width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    color: #fff;
    overflow-y: scroll;
    z-index: 999;
    background-color: #090f1a;
    &::-webkit-scrollbar { 
        display: none;
    }
    .header {
        position: sticky;
        top: 0;
        padding: 25px;
        background-color: #141C27;
        .logo {
            width: 130px;
        }
        .close {
            width: 30px;
            height: 30px;
            background-color: #55E6A5;
            border-radius: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: all 0.3s ease-out;
            .line1 {
                width: 15px;
                height: 2px;
                background-color: #141C27;
                transform: rotate(45deg);
                position: absolute;
                transition: all 0.5s ease-out;
                border-radius: 10px;
            }
            .line2 {
                width: 15px;
                height: 2px;
                background-color: #141C27;
                transform: rotate(135deg);
                position: absolute;
                transition: all 0.5s ease-out;
                border-radius: 10px;
            }
            &:hover {
                background-color: black;
                .line1 {
                    background-color: #fff;
                }
                .line2 {
                    background-color: #fff;
                }
            }
        }
    }
    .body {
        padding: 30px;
        p {
            color: #a2a2a2;
            font-weight: 500;
            letter-spacing: -1px;
            text-wrap: balance;
        }
        .message-box {
            height: 210px;
        }
        input,
        textarea {
            width: 100%;
            height: 70px;
            background-color: transparent;
            margin-bottom: 30px;
            border: 2px solid #55E6A5;
            padding: 20px;
            outline-style: none;
            color: #fff;
        }
        h4 {
            margin-bottom: 30px;
        }
        .submit {
            padding: 10px 20px;
            border: none;
            background-color: #55E6A5;
            font-weight: 500;
            margin-bottom: 30px;
        }
    }
    .thanks-msg {
        h4 {
            color: #55E6A5;
        }
    }
   }
</style>
