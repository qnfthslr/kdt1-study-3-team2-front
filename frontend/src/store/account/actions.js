import axiosInst from "@/utility/axiosInst";

export default {
  requestSpringToCheckEmailDuplication({ }, payload) {
    const { email } = payload;
    console.log("email: " + email);

    return axiosInstance.springAxiosInst.get(`/account/check-email/${email}`)
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
    const { email, password } = payload;

    return axiosInst.post("/account/regist", { email, password })
      .then((res) => {
        alert("계정 등록 성공!");
        return res;
      })
      .catch((res) => {
        alert("문제 발생!");
      });
  },

}
