import React from "react";
import { useState } from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { FaGooglePlusG } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addName } from "../../Redux/action.js";

function SigninWithGoogle() {
  const [isAuth, setIsAuth] = useState(false);
  let dispatch = useDispatch();
  const navigate = useNavigate();
  let googleSuccess = (response) => {
    console.log(response, isAuth);
    console.log(response.profileObj);
    localStorage.setItem("name", response.profileObj.givenName);
    setIsAuth(true);
    dispatch(addName(response.profileObj.name));
    alert(`Welcome ${response.profileObj.givenName} , Happy Shopping`);
    navigate("/checkout/cart");
  };
  let googleFailure = (response) => {
    console.log(response);
  };
  return (
    <GoogleLogin
      clientId="62223785118-7ehbulfopl0d7hb1qr67vr4r7fr934qf.apps.googleusercontent.com"
      buttonText="Login With Google"
      render={(renderProps) => (
        <button
          style={{ backgroundColor: "#cf4332" }}
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <FaGooglePlusG />
          Login With Google
        </button>
      )}
      onSuccess={googleSuccess}
      onFailure={googleFailure}
      cookiePolicy="single_host_origin"
    />
  );
}

export default SigninWithGoogle;
