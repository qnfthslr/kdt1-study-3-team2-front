<template>
  <v-container>
    <div style="display: flex;">
      <nav>


        <h2>↖↖↖</h2>
        <h2>↖↖↖</h2>
        <h2>↖↖↖</h2>
        <h1> 내비게이션을 이용해주세요. </h1>
        <h2> ←←← </h2>
        <h2> ←←← </h2>
        <h2> ←←← </h2>

      </nav>

      <div style="display: flex; justify-content: flex-end;">
        <img src="@/assets/good.gif" style="max-width: 30%;" />
        <img src="@/assets/escape.jpg" style="max-width: 40%;" />
      </div>
    </div>
  </v-container>
</template>

<script>


export default {
  name: 'Home',

  components: {

  },
}
</script>

<style scoped>
@keyframes rainbow {
  0% {
    background-position: 0% 50%
  }

  50% {
    background-position: 100% 50%
  }

  100% {
    background-position: 0% 50%
  }
}

h2,
h1 {
  background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: rainbow 3s ease infinite;
}
</style>
