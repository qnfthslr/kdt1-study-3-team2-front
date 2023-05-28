<template lang="">
    <div>
        
        <h2>상품 목록</h2>

        <account-list-form :accounts="accounts"/>

        <br>
        {{ output }}


    </div>
</template>
<script>

import { mapActions, mapState } from 'vuex';
import AccountListForm from '@/components/product/AccountListForm.vue';

const accountModule = 'accountModule'

export default {



}
</script>
<style lang="">
    
</style>