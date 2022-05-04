import { createStore } from "redux";
import { reducer } from "./reducer";

// <<<<<<< HEAD
let initialStore = {
  cart: [],
  count: 0,
  step: 0,
  address: {},
  name: "User",
  token: "",
};
// =======
// let initialStore = { cart: [], count: 0 };
if (localStorage.getItem("cart")) {
  initialStore.cart = JSON.parse(localStorage.getItem("cart"));
  initialStore.count = initialStore.cart.length;
}
if (localStorage.getItem("name")) {
  initialStore.name = localStorage.getItem("name");
}
if (localStorage.getItem("token")) {
  initialStore.token = localStorage.getItem("token");
}

export const store = createStore(reducer, initialStore);
