<template lang="">
    <div>
        <br>
            <product-regist-form align="center" @submit="onSubmit"/> 
        <br>
    </div>
</template>
<script>

import ProductRegisterForm from "@/components/product/ProductRegisterForm.vue"
import { mapActions } from "vuex";

const productModule = 'productModule'

export default {
    components: { ProductRegisterForm },
    name: "ProductRegisterPage",

    methods: {
        ...mapActions(
            productModule, ['requestRegistProduct']
        ),
        async onSubmit(payload) {
            const product = await this.requestRegistProduct(payload)
            console.log('account : ' + JSON.stringify(product))
        }
    }

}
</script>
<style lang="">
    
</style>