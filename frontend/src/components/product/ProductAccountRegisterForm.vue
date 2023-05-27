<template lang="">
    <div>
        
         <v-btn outlined color="cyan" @click="readyToCreateAccount">회원 가입 준비 버튼</v-btn>
            <div v-if="isPressedButton">
                <br>
                
            <form @submit.prevent="onSubmit">
                <table>
                    <tr>
                        <td>
                            이메일
                        </td>
                        <td>
                            <v-text-field v-model="email" label="이메일 입력"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            비밀번호
                        </td>
                        <td>
                            <v-text-field v-model="password" label="비밀번호 입력" type="password"/>
                        </td>
                    </tr>
                    <tr>
                        <td>비밀번호 확인</td>
                        <td>
                        <v-text-field label="비밀번호 확인" type="password" v-model="passwordConfirm" :rules="[passwordCheck]"/>
                        </td>

                    </tr>
                </table>

                <div>
                    <button type="submit"> 회원가입 </button>
                    <br><br>
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
            email: '',
            password: '123456',
            isPressedButton: false,
            passwordConfirm: '',
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
    computed: {
        passwordCheck() {
            return () => {
                return this.password === this.passwordConfirm || '비밀번호가 일치하지 않습니다.'
            }
        }

    }




}
</script>
<style scoped></style>