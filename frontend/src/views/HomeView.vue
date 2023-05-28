<template>
  <v-container>
    <div>
      <nav>
        <router-link to="/account-register-page">회원 가입</router-link> |
        <router-link to="/account-list-page">회원 목록</router-link> |
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
