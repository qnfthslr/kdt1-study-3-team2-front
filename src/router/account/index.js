import Vue from "vue";
import VueRouter from "vue-router";
import SigninPage from "@/views/account/SigninPage.vue";

Vue.use(VueRouter)

const accountRoutes = [
  {
    path: '/signin-page',
    name: 'SigninPage',
    component: SigninPage
  },
]
export default accountRoutes
