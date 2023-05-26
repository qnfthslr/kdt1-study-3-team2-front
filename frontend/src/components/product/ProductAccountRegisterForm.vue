<template lang="">
    <div>
        <v-btn color="red" @click="readyToCreateAccount">회원 가입 준비 버튼</v-btn>
            <div v-if="isPressedButton">
                <br>
            <form @submit.prevent="onSubmit">
                <table>
                    <tr>
                        <td>
                            이메일 :
                        </td>
                        <td>
                            <input type="text" v-model="accountEmail"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            비밀번호 : 
                        </td>
                        <td>
                            <input type="text" v-model="accountPassword"/>
                        </td>
                    </tr>
                </table>

                <div>
                    <button type="submit"> 회원가입 </button>
                    <br>
                    <router-link :to="{name : 'Home'}">
                        돌아가기
                    </router-link>
                </div>


            </form>
        </div>

    </div>
</template>
<script>
export default {
    name: "ProductAccountRegisterForm",
    data() {
        return {
            accountEmail: '이메일을 입력하세요',
            accountPassword: '비밀번호를 입력하세요',
            isPressedButton: false,

        }
    },
    methods: {
        onSubmit() {
            const { accountEmail, accountPassword } = this
            this.$emit('submit', { accountEmail, accountPassword })

        },
        readyToCreateAccount() {
            this.isPressedButton = true
            alert('제품 등록 준비')
        },
    },




}
</script>
<style lang="">
    
</style>