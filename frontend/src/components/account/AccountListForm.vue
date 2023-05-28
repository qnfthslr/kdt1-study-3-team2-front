<template lang="">
    <div align="center">

        <v-btn outlined color="cyan"  @click="readyToAccountList">회원 목록 보기</v-btn>
            <div v-if="isPressedButton">

        <table>
            <tr>
                <th align="center">이메일</th>
                <th align="center">비밀번호</th>
            </tr>

            <tr v-if="!accounts || (Array.isArray(accounts) && accounts.length === 0)">
                <td colspan="2">
                    등록된 계정이 없습니다.
                </td>
            </tr>

            <tr v-else v-for="account in accounts" :key="account.email">
                <td aling="center">
                    {{ account.email }}
                </td>
                <td align="center">
                    {{ account.password }}
                </td>
            </tr>
        </table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isPressedButton: false
        }
    },
    props: {
        accounts: {
            type: Array
        }
    },
    methods: {
        readyToAccountList() {
            this.isPressedButton = true
            alert("계정 목록을 보여드릴게요.")
        }
    },
}
</script>
<style lang="">
    
</style>