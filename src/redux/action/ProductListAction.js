import { config } from "../../utils/constant";
import { Action_Type } from "../constant/Action-Type";
import { apiIsLoading } from "./SigninAction";

//ACTION TO GET PRODUCT LIST
export const getAllProduct = (product) => {
  return {
    type: Action_Type.READ_PRODUCT,
    payload: product,
  };
};

//USERID
const userId = JSON.parse(localStorage.getItem("user"));

//FUNCTION TO FETCH PRODUCTLIST
export const productList = () => {
  return (dispatch) => {
    fetch(`${config.host}${config.product.getALlProduct}`)
      .then((resp) => resp.json())
      .then((resp) => dispatch(getAllProduct(resp)))
      .then(() => dispatch(apiIsLoading(false)))
      .catch((err) => console.log(err));
  };
};

//FUNCTION TO SELL A PRODUCT
export const sellerProduct = (product) => {
  return (dispatch) => {
    fetch(`${config.host}${config.product.createProduct}/${userId._id}`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify(product),
    })
      .then((resp) => resp.json())
      .catch((error) => console.log(error));
  };
};
