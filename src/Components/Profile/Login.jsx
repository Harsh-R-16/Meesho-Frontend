import React from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";
import { useDispatch } from "react-redux";
import { addName, addToken } from "../../Redux/action.js";

export default function Login() {
  let [data, setData] = React.useState({
    email: "harsh.gajera17@gmail.com",
    password: "harsh@123",
  });
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const submitForm = async (e) => {
    e.preventDefault();
    const a = await fetch("https://meeshodb.herokuapp.com/api/v1/users/login", {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const b = await a.json();
    console.log(b);
    if (b.message === "Success!!!") {
      alert(b.message);
      dispatch(addName(b.user.name));
      dispatch(addToken(b.token));
      localStorage.setItem("name", b.user.name);
      navigate("/checkout/cart");
      return;
    }
    alert(`${b.status}. logged in as guest user!!!`);
    dispatch(addToken("10306dsd4sa6d4e84e6d4a6sas4ca6s464"));
    dispatch(addToken("User"));
    navigate("/checkout/cart");
  };
  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  const forgotPassword = async () => {
    const a = await fetch(
      "https://meeshodb.herokuapp.com/api/v1/users/forgotPassword",
      {
        method: "POST",
        body: JSON.stringify({
          email: data.email,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    const b = await a.json();
    if (b.message === "Success!!!") {
      alert(
        `Your reset password link is <${b.link}>. make patch request to reset your password with email address.`
      );
      navigate("/checkout/cart");
      return;
    }
    navigate("/checkout/cart");
    alert(b.message);
  };
  return (
    <section id="login-page">
      <div>
        <h1>Welcome Back</h1>
        <h2>Login to Your Account</h2>
        <form action="" onSubmit={submitForm}>
          <label htmlFor="email">Enter Your Email Address:</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            onChange={changeHandler}
            value={data.email}
          />
          <label htmlFor="password">Enter Your Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={changeHandler}
            value={data.password}
          />
          <button>Log In</button>
        </form>
        <p onClick={forgotPassword}>Forgot Password?</p>
      </div>
    </section>
  );
}
