import { Action_Type } from "../constant/Action-Type";

//PRODUCT LIST REDUCER
export const productReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case Action_Type.READ_PRODUCT:
      return {
        ...state,
        product: payload,
      };
    default:
      return state;
  }
};
