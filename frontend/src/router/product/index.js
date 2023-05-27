import Vue from "vue";
import VueRouter from "vue-router";

import ProductAccountRegisterPage from "@/views/product/ProductAccountRegisterPage.vue"

Vue.use(VueRouter);

const productRoutes = [

    {
        path: "/product-account-register-page",
        name: "ProductAccountRegisterPage",
        component: ProductAccountRegisterPage
    }

];
export default productRoutes;