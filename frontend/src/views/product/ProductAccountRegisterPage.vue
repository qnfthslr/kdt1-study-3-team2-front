<template>
    <div>
        <br>
        <product-account-register-form align="center" @submit="onSubmit" />
        <br>

    </div>
</template>
<script>

import ProductAccountRegisterForm from '@/components/product/ProductAccountRegisterForm.vue';
import { mapActions } from 'vuex';

const accountModule = 'accountModule'

export default {
    components: {
        ProductAccountRegisterForm,
    },
    name: "ProductAccountRegisterPage",
    data() {
        return {
        }
    },

    methods: {
        ...mapActions(
            accountModule, ['requestCreateAccountToSpring']
        ),
        async onSubmit(payload) {
            const account = await this.requestCreateAccountToSpring(payload)
            console.log('account: ' + JSON.stringify(account))

        }

    }
}
</script>
<style lang="">
    
</style>