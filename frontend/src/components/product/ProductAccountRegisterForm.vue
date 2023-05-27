<template lang="">
    <div>
        
         <v-btn outlined color="cyan" @click="readyToCreateAccount">회원 가입 준비 버튼</v-btn>
            <div v-if="isPressedButton">
                <br>
                
            <form @submit.prevent="onSubmit">
                <table>
                    <tr>
                        <td>
                            이메일 :
                        </td>
                        <td>
                            <input type="text" v-model="email"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            비밀번호 : 
                        </td>
                        <td>
                            <input type="text" v-model="password"/>
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
            email: '이메일을 입력하세요',
            password: '비밀번호를 입력하세요',
            isPressedButton: false,
        }
    },
    methods: {
        onSubmit() {
            const { email, password } = this
            this.$emit('submit', { email, password })

        },
        readyToCreateAccount() {
            this.isPressedButton = true
            alert('계정 등록 준비')
        },
    },




}
</script>
<style scoped></style>