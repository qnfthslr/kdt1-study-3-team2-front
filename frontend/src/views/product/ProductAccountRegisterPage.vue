<template>
    <div>
        <v-btn color="red" @click="readyToCreateAccount">회원 가입 준비 버튼</v-btn>
        <div v-if="isPressedButton">
            <product-register-form align="center" @submit="onSubmit" />
        </div>



    </div>
</template>
<script>

import ProductAccountRegisterForm from '@/components/product/ProductAccountRegisterForm.vue';
import { mapActions } from 'vuex';

const productModule = 'productModule'

export default {
    components: {
        ProductAccountRegisterForm,
    },
    name: "ProductAccountRegisterPage",
    data() {
        return {
            isPressedButton: false,
        }
    },

    methods: {
        readyToCreateAccount() {
            this.isPressedButton = true
            alert('제품 등록 준비')
        },


    }
}
</script>
<style lang="">
    
</style>