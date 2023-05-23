import React from "react";

function SignInSuccess({ closeModal }) {
  return (
    <div className="login-success-modal">
      <div className="overlay" onClick={closeModal} />

      <div className="container">
        <div className="login-modal">
          <div className="login-image">
            <img src="images/success.png" alt="icon" />
          </div>
          <div className="login-content">
            <h1>Login Successful</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInSuccess;
