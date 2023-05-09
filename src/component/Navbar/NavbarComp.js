import React, { useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { openSignInModal, routerChanging } from "../../redux/action/SigninAction";
import { Link } from "react-router-dom";
import SignUp from "../../pages/SignUp";
import Signin from "../../pages/Signin";
import SellForm from "../../pages/SellForm";

function NavbarComp() {
  const isSign = useSelector((state) => state?.isSignIn?.isOpen);
  const dispatch = useDispatch();

  const changeAuthMode = () => {
    dispatch(openSignInModal(true));
    // setAuthMode(authMode === "Signin" ? "Signup" : "Signin");
  };
  const token = localStorage.getItem("token");
  const [isSignIn, setIsSignin] = useState(false);
  useEffect(() => {
    if (token) {
      setIsSignin(true);
    } else {
      setIsSignin(false);
    }
  }, [token]);
  const signOut = () => {
    localStorage.clear();
    setIsSignin(false);
    dispatch(routerChanging(false));
  };
  const [showModal, setShowModal] = useState(false);
  // const handleClose = (e) => {
  //   console.log(e.target);
  //   // if(e.target==null||e.target==undefined||!(e.target)){
  //   //   setShowModal(false)
  //   // }
  // };
  const openModal = () => {
    console.log("fuction is clicked");
    setShowModal(true);
  };
  return (
    <>
    <nav className="navbar navbar-expand-sm">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="images/logo.png" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            {isSign ? (
              <>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Services
                  </Link>
                  <ul className="dropdown-menu underlinks">
                    <li>
                      <Link className="dropdown-item" onClick={openModal}>
                        Sell Items
                      </Link>
                      <SellForm showModal={showModal} setShowModal={setShowModal} />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/buy">
                        Buy Items
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/account">
                    My Account
                  </Link>
                </li>
              </>
            ) : null}
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            {isSignIn ? (
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={signOut}>
                  Signout
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={changeAuthMode}>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
      <Signin />
      <SignUp />
      </>
  );
}

export default NavbarComp;
