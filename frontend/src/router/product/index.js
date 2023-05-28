import Vue from "vue";
import VueRouter from "vue-router";

import AccountRegisterPage from "@/views/product/AccountRegisterPage.vue"

Vue.use(VueRouter);

const productRoutes = [

    {
        path: "account-register-page",
        name: "AccountRegisterPage",
        component: AccountRegisterPage
    }

];
export default productRoutes;