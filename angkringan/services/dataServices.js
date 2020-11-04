import * as url from "../services/api";

export default {
  listItem(){
    return url.get("products/")
  },
  registerUser() {
    return url.post("account/register/");
  },
  login() {
    return url.post("account/");
  },
  getCategory(){
    return url.get("products/category/")
  },
  addItem(){
    return url.post("products/input_products/")
  }
};
