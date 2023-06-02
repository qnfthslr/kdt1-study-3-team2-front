<template>
    <v-card>
        <v-simple-table>
                <tbody>
                    <tr>
                        <th>상품명</th>
                        <td>{{ product.productName }}</td>
                    </tr>
                    <tr>
                        <th>가격</th>
                        <td>{{ product.productPrice }}</td>
                    </tr>
                    
                    <tr>
                        <th>세부 정보</th>
                        <td>{{ product.productDetails }}</td>
                    </tr>

                    <tr>
                        <th>등록한 계정</th>
                        <td>{{ product.account }}</td>
                    </tr>

                </tbody>
        </v-simple-table>
        <div>
            <v-btn @click="$router.push('/')">cancel</v-btn>
        <v-btn @click="buy" value="product.productId">buy</v-btn>
        </div>
    </v-card>

    
</template>
<script>
import axiosInst from "@/utility/axiosInst";

export default {
    name: "ProductReadForm",
    props: {
        product: {
            required: true,
        }
    },
    methods: {
        async buy() {
            await axiosInst.post("/order/regist", {userToken:localStorage.getItem("accountToken"), productId:this.product.productId})
              .then(res=> {
                  alert("order success")
                  this.$router.push("/")
              })
              .catch(res=> alert("order fail"))
        }
    },


}
</script>
<style lang="">
    
</style>