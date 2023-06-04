import axiosInst from "@/utility/axiosInst";

export default {
  submitLoginData({}, payload) {
    axiosInst.post("account/signin", payload)
      .then((res) => {
        localStorage.setItem("userToken", res.data)
        console.log("login success");
      })
      .catch(()=>alert("login fail"))
  }
}