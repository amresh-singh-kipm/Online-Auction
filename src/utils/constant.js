const BASE_URL = "http://localhost:5050/api";
export const getToken = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const config = {
  host: BASE_URL,
  auth: {
    signin: "/login",
    signup: "/register",
    signout: "/signout",
  },
  product: {
    getALlProduct: "/products",
    createProduct: "/createproduct",
  },
  bid: {
    bidList: "/buyer/bidlist",
    createBid: "/buyer",
    deleteBid: "/buyer/deletebid",
    updateBid: "/buyer/updatebid",
  },
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};
