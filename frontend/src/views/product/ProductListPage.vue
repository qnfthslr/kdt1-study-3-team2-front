<template>
    <v-container>
        <v-simple-table >
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-left">
                        productName
                    </th>
                    <th clas="text-left">
                        producPrice
                    </th>
                </tr>
                </thead>
                <tbody >
                    <tr
                        v-for="prod in products"
                        :key="prod.id"
                    >
                        <td>{{prod.productName}}</td>
                        <td>{{prod.productPrice}}</td>

                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </v-container>
</template>

<script>
import {mapActions, mapState} from "vuex";
const productModule = "productModule"
export default {
  name: "ProductListPage",
    beforeMount() {
      this.requestProductListToSpring()
    },
    methods: {
      ...mapActions(productModule, ["requestProductListToSpring"]),
        goProductPage() {

        },
    },
    computed: {
        ...mapState(productModule, ['products'])
    }
}
</script>

<style scoped>

</style>