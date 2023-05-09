import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PublicRouter from "./Router/PublicRouter";
import PrivateRouter from "./Router/PrivateRouter";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "./utils/constant";
import { routerChanging } from "./redux/action/SigninAction";

function App() {
  const isShow = useSelector((state) => state?.isSignIn?.isOpen);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(routerChanging(true));
    }
  }, [isShow]);
  
  return (
    <div>
      {/* <NavbarComp />
      <Heros />
      <Modal />
      <Signin />
      <SignUp/> */}
      {isShow ? <PrivateRouter /> : <PublicRouter />}
    </div>
  );
}
export default App;
