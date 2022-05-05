import React from "react";
import { Section } from "./Styled-Profile";
import { useNavigate } from "react-router-dom";
import { FaGooglePlusG, FaFacebookF } from "react-icons/fa";
import FacebookLogin from "react-facebook-login";

export default function Profile() {
  let [inp, setInp] = React.useState("7046581170");
  let navigate = useNavigate();
  const submitForm = (e) => {
    let a = Math.round(Math.random() * 1000 + 123456);
    alert("Your OTP is: " + a);
    localStorage.setItem("otp", a);
    navigate("/signup");
  };
  const responseFacebook = (response) => {
    console.log(response);
    alert(
      "Success!!!\n" +
        "Name: " +
        response.name +
        "\nEmail ID: " +
        response.email +
        "\n" +
        JSON.stringify(response)
    );
  };

  return (
    <Section>
      <div>
        <img
          src="https://images.meesho.com/images/marketing/1648820929975.jpeg"
          alt=""
        />
        <h2>Sign Up to view your cart items</h2>
        <p>Country</p>
        <p id="number">
          <span>IN +91</span>
          <input
            type="text"
            placeholder="Enter your number"
            value={inp}
            onChange={(e) => setInp(e.target.value)}
          />
        </p>
        <button onClick={submitForm}>Send OTP</button>
        <p id="login-para">
          or{" "}
          <span
            onClick={() => {
              navigate("/login");
            }}
          >
            sign in
          </span>
        </p>
        <div id="login-options">
          <button>
            <FaGooglePlusG />
            Login with Google
          </button>

          <FacebookLogin
            appId="696422361677581"
            autoLoad={true}
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="my-facebook-button-class"
          />
        </div>
        <p id="privacy-policy">
          <p>By continuing, you agree to Meesho’s</p>{" "}
          <span>Terms &amp; Conditions</span> and <span>Privacy Policy</span>
        </p>
      </div>
    </Section>
  );
}
