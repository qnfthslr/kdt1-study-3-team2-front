<template>
  <v-container>
      <v-card>
          <v-container>
          <v-text-field label="email" placeholder="example@google.com" v-model="email" />
          <v-text-field label="password" type="password" placeholder="password" v-model="password"/>

          <v-btn @click="$router.push('/')">cancel</v-btn>
          <v-btn @click="submit">SignIn</v-btn>
          </v-container>
      </v-card>
  </v-container>
</template>

<script>
import {mapActions} from "vuex";

const accountModule = "accountModule"
export default {
  name: "SigninPage",
  data () {
    return {
      email:"",
      password: "",
    }
  },
  methods: {
    ...mapActions(accountModule, ["submitLoginData"]),
    async submit() {
      const {email:accountEmail, password:accountPassword} = this
      console.log({accountEmail, accountPassword})
      await this.submitLoginData({accountEmail, accountPassword})
      await this.$router.push("/")
    }
  }
}
</script>

<style scoped>

</style>