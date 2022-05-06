import "./App.css";
import AllRoutes from "./Components/All Routes/AllRoutes";
import React from "react";

function App() {
  React.useEffect(() => {
    fetch("https://meeshodb.herokuapp.com").then((res) => res.json());
  }, []);
  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
