import axiosInst from "@/utility/axiosInst";

export default {
  requestSpringToCheckEmail({ }, payload) {
    const { accountEmail: email } = payload;
    console.log("email: " + email);

    return axiosInst.get(`/account/check-email/${email}`)
      .then((res) => {
        if (res.data) {
          alert("사용 가능한 이메일 입니다.")
          return true;
        } else {
          alert("중복된 이메일 입니다.")
          return false;
        }
      }).catch((res) => {
        alert("문제 발생 ! ");
      });
  },

  requestCreateAccountToSpring({ }, payload) {
    const { accountEmail: email, accountPassword: password } = payload;

    return axiosInst.post("/account/regist", { accountEmail: email, accountPassword: password })
      .then((res) => {
        alert("계정 등록 성공!");
        return res;
      })
      .catch((res) => {
        alert("문제 발생!");
      });
  },

}
