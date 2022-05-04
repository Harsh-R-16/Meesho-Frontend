import React from "react";
import { Section } from "./Styled-Profile";
import { useNavigate } from "react-router-dom";
import { FaGooglePlusG, FaFacebookF } from "react-icons/fa";

export default function Profile() {
  let [inp, setInp] = React.useState("7046581170");
  let navigate = useNavigate();
  const submitForm = (e) => {
    let a = Math.round(Math.random() * 1000 + 123456);
    alert("Your OTP is: " + a);
    localStorage.setItem("otp", a);
    navigate("/signup");
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
          <button>
            <FaFacebookF />
            Login with Facebook
          </button>
        </div>
        <p id="privacy-policy">
          <p>By continuing, you agree to Meesho’s</p>{" "}
          <span>Terms &amp; Conditions</span> and <span>Privacy Policy</span>
        </p>
      </div>
    </Section>
  );
}
