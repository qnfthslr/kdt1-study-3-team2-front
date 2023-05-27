import axiosInst from "@/utility/axiosInst";

export default {
  requestCreateAccountToSpring({ }, payload) {
    const { accountEmail, accountPassword } = payload;

    return axiosInst.post("/account/regist", { accountEmail, accountPassword })
      .then((res) => {
        alert("계정 등록 성공!");
        return res;
      })
      .catch((res) => {
        alert("문제 발생!");
      });
  },
};
