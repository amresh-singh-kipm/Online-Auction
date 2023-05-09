import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  openSignInModal,
  openSignUpModal,
  signUpUser,
} from "../redux/action/SigninAction";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";

function SignUp() {
  //STATE TO SAVE USER
  const initialUserDetails = {
    name: "",
    email: "",
    encry_password: "",
    mobile: "",
  };
  const [userDetails, setUserDetails] = useState(initialUserDetails);

  //FUNCTION TO HANDLE INPUT
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };
  //REDUX STATE
  const isSign = useSelector((state) => state.isSignupModal.isSign);
  const isSignIn = useSelector((state) => state.isSigninModal.inSign);
  const dispatch = useDispatch();
  //FUNCTION TO REGISTER USER

  const signUp = (e) => {
    e.preventDefault();
    dispatch(signUpUser(userDetails));
    dispatch(openSignInModal(true));
    dispatch(openSignUpModal(false));
  };

  //FUNCTON TO NAVIGATE SIGNIN PAGE
  const navigate = useNavigate();
  const changeAuthMode = () => {
    dispatch(openSignInModal(isSignIn === true ? false : true));
    dispatch(openSignUpModal(isSign === true ? false : true));
  };
  return (
    <Modal show={isSign}>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="text-center Auth-form-text">
              Already registered? <span onClick={changeAuthMode}>Sign In</span>
            </div>
            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control mt-2"
                placeholder="e.g Jane Doe"
                name="name"
                value={userDetails.name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-2"
                placeholder="Email Address"
                name="email"
                value={userDetails.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Mobile Number</label>
              <input
                type="Number"
                className="form-control mt-2"
                placeholder="+91"
                name="mobile"
                value={userDetails.mobile}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-2"
                placeholder="Password"
                name="encry_password"
                value={userDetails.encry_password}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="d-grid mt-4 submitbtn">
              <button type="submit" className="btn" onClick={signUp}>
                Submit
              </button>
            </div>
            <p className="forgotlink mt-3">
              <a href="#">Forgot Password?</a>
            </p>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default SignUp;
