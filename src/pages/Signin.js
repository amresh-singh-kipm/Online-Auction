/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  openSignInModal,
  openSignUpModal,
  signInUser,
} from "../redux/action/SigninAction";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";

const Signin = () => {
  //STATE
  const initialUser = {
    email: "",
    password: "",
  };
  const [userDetails, setUserDetails] = useState(initialUser);

  //FUNCTION TO HANDLE INPUT FIELD
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  //TOKEN
  const token = localStorage.getItem("token");

  //REDUX STATE
  const dispatch = useDispatch();
  const isSign = useSelector((state) => state.isSigninModal.isSign);
  const isSignUp = useSelector((state) => state.isSignupModal.isSign);
  //FUNCTION FOR SIGNIN USER
  const signIn = (e) => {
    e.preventDefault();
    dispatch(signInUser(userDetails));
    if (token) {
      console.log("token", isSign);
      dispatch(openSignInModal(isSign === true ? false : true));
    }
    
  };


  //FUNCTION TO NAVIGATE SIGNUP PAGE
  const navigate = useNavigate();
  const changeAuthMode = () => {
    dispatch(openSignUpModal(isSignUp === true ? false : true));
    dispatch(openSignInModal(isSign === true ? false : true));

    // navigate("/signup");
  };
  return (
    <Modal show={isSign} >
      {isSign && <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Login In</h3>
            <div className="text-center Auth-form-text">
              <p>
                Not registered yet?{" "}
                <span onClick={changeAuthMode}>Sign Up</span>
              </p>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                className="form-control mt-2"
                placeholder="Enter email"
                value={userDetails.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="text"
                name="password"
                className="form-control mt-2"
                placeholder="Enter password"
                value={userDetails.password}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="d-grid mt-4 submitbtn">
              <button className="btn" onClick={signIn}>
                Submit
              </button>
            </div>
            <p className="forgotlink mt-3">
              <a href="#">Forgot Password?</a>
            </p>
          </div>
        </form>
        </div>}
     
    </Modal>
  );
};

export default Signin;
