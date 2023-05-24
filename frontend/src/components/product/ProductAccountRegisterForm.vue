<template lang="">
    <div>
        <form @submit.prevent="onSubmit">
            <table>
                <tr>
                    <td>
                        이메일 : <t>
                    </td>
                    <td>
                        <input type="text" v-model="accountEmail"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        비밀번호 : <t>
                    </td>
                    <td>
                        <input type="text" v-model="accountPassword"/>
                    </td>
                </tr>
            </table>

            <div>
                <button type="submit"> 회원가입 </button>
                <<router-link :to="{name : 'Home'}">
                    돌아가기
                </router-link>
            </div>



        </form>

    </div>
</template>
<script>
export default {
    name: "ProductAccountRegisterForm",
    data() {
        return {
            accountEmail: '이메일을 입력하세요',
            accountPassword: '비밀번호를 입력하세요',

        }
    },
    methods: {
        onSubmit() {
            const { accountEmail, accountPassword } = this
            this.$emit('submit', { accountEmail, accountPassword })

        }
    },




}
</script>
<style lang="">
    
</style>