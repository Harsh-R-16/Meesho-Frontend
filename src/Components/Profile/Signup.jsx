import React from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";
import { useDispatch } from "react-redux";
import { addName, addToken } from "../../Redux/action.js";

export default function Signup() {
  let [data, setData] = React.useState({
    email: "harsh.gajera17@gmail.com",
    fname: "Harsh Gajera",
    password: "harsh@123",
    otp: localStorage.getItem("otp"),
  });
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const submitForm = async (e) => {
    e.preventDefault();
    const a = await fetch(
      "https://meeshodb.herokuapp.com/api/v1/users/signup",
      {
        method: "POST",
        body: JSON.stringify({
          name: data.fname,
          email: data.email,
          password: data.password,
          passwordConfirm: data.password,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    const b = await a.json();
    console.log(b);
    let name = data.fname;
    dispatch(addName(name));
    localStorage.setItem("name", name.trim() ? name : "User");

    if (b.message === "Success!!!") {
      dispatch(addToken(b.token));
      localStorage.setItem("token", b.token);
      alert(b.message);
    } else {
      dispatch(addToken(""));
      localStorage.setItem("token", "");
      alert(
        `${b.status}. you have already registered, please login with details. logged in as guest user!!!`
      );
    }
    navigate("/checkout/cart");
  };
  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <section id="signup-page">
      <div>
        <img
          src="https://images.meesho.com/images/marketing/1648820929975.jpeg"
          alt=""
        />
        <h2>Create Account</h2>
        <form action="" onSubmit={submitForm}>
          <label htmlFor="emailId">Enter Your Email ID:</label>
          <input
            type="text"
            placeholder="enter your email address"
            id="email"
            value={data.email}
            onChange={changeHandler}
          />
          <label htmlFor="fname">Enter Your Full Name:</label>
          <input
            type="text"
            placeholder="enter your full name"
            id="fname"
            required
            value={data.fname}
            onChange={changeHandler}
          />
          <label htmlFor="password">
            Enter Password (must be 8+ characters):
          </label>
          <input
            type="text"
            placeholder="enter your last name"
            id="password"
            value={data.password}
            onChange={changeHandler}
          />
          <label htmlFor="otp">Enter OTP:</label>
          <input
            type="text"
            placeholder="enter otp"
            id="otp"
            value={data.otp}
            onChange={changeHandler}
          />
          <button>Verify</button>
        </form>
      </div>
    </section>
  );
}
