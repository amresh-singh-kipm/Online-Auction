import { Action_Type } from "../constant/Action-Type";

//BIDLIST REDUCER
export const bidListReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case Action_Type.READ_BID_LIST:
      return {
        ...state,
        bidList: payload,
      };
    default:
      return state;
  }
};
