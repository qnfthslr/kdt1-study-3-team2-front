import axiosInst from "@/utility/axiosInst";

export default {
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
};
