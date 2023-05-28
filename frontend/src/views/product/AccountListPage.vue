<template lang="">
    <div>
        
        <h2>상품 목록</h2>

        <account-list-form :accounts="accounts"/>

        <br>



    </div>
</template>
<script>

import { mapActions, mapState } from 'vuex';
import AccountListForm from '@/components/product/AccountListForm.vue';

const accountModule = 'accountModule'

export default {
    components: { AccountListForm },
    data() {
        return {

        }
    },
    computed: {
        ...mapState(accountModule, ['products']),
    },
    mounted() {
        this.requestAccountListToSpring()
    },
    methods: {
        ...mapActions(
            accountModule, ['requestAccountListToSpring']
        )
    },




}
</script>
<style lang="">
    
</style>