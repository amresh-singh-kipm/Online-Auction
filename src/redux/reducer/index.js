import { combineReducers } from "redux";
import {
  apiLoadingReducer,
  routerChangeReducer,
  signInReducer,
  signUpReducer,
  userDetailsReducer,
} from "./SigninReducer";
import { productReducer } from "./ProductReducer";
import { bidListReducer } from "./bidListReducer";

export const reducer = combineReducers({
  isSigninModal: signInReducer,
  isSignupModal: signUpReducer,
  productList: productReducer,
  apiIsLoading: apiLoadingReducer,
  userDetails: userDetailsReducer,
  bidList: bidListReducer,
  isSignIn: routerChangeReducer,
});
