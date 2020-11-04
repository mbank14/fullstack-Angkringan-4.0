import url from "../services/api";

export default {
  registerUser() {
    return url.post("/account/register/");
  },
  login() {
    return url.post("/account/");
  },
};
