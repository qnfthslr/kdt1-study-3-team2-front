import Vue from "vue";
import VueRouter from "vue-router";
import ProductRegistPage from "@/views/product/ProductRegistPage";

Vue.use(VueRouter);

const productRoutes = [
    {
        path: "/product-regist-page",
        name: "ProductRegistPage",
        component: ProductRegistPage
    },




]
