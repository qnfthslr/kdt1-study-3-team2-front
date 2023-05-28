<template>
    <div>
        <br>
        <account-register-form align="center" @submit="onSubmit" />
        <br>

    </div>
</template>
<script>

import AccountRegisterForm from '@/components/product/AccountRegisterForm.vue';
import { mapActions } from 'vuex';

const accountModule = 'accountModule'

export default {
    components: {
        AccountRegisterForm,
    },
    name: "AccountRegisterPage",
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