<template>
<v-container>
  <p>{{product}}</p>
</v-container>
</template>

<script>
import {mapActions, mapState} from "vuex";
import product from "@/router/product";

const productModule="productModule"
export default {
  name: "ProductReadPage",
  props: {
    productId: {
      type: Number,
      required: true,
    }
  },
  methods: {
    ...mapActions(productModule, ["requestProductToSpring"])
  },
  beforeMount() {
    this.requestProductToSpring(this.productId)
  },
  computed: {
    ...mapState(productModule, ["product"])
  }
}
</script>

<style scoped>

</style>