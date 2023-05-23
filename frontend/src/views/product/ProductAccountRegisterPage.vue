<template>
    <div>
        <v-btn color="red" @click="readyToCreateAccount">회원 가입 준비 버튼</v-btn>
        <div v-if="isPressedButton">
            <product-register-form align="center" @submit="onSubmit" />
        </div>



    </div>
</template>
<script>
export default {
    methods: {
        readyToCreateAccount() {
            this.isPressedButton = true
            alert('제품 등록 준비')
        },
    }
}
</script>
<style lang="">
    
</style>