<template>
  <v-container>
    <div>
      <nav>
        <router-link to="/product-register-page">상품 등록</router-link>
      </nav>
    </div>
  </v-container>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Home',

    components: {
      HelloWorld,
    },
  }
</script>
