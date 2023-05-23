<template>
  <v-container>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/product-account-register-page">회원 가입</router-link>


    </nav>

  </v-container>
</template>

<script>

import HelloWorld from '../components/HelloWorld'


export default {
  name: 'Home',

  components: {

  },
}
</script>
