import { useState } from "react";
import "./styles/main.scss";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Product from "./components/Product";
import Registration from "./components/user/Registration";
import Login from "./components/user/Login";
import NavBar from "./components/main-page/NavBar";
function App() {
  const P = styled.p`
    color: white;
    font-size: 5rem;
    margin: 3rem;
  `;
  // DataFetcher()
  // Keep App.jsx clear
  // Keep App.jsx clear
  // Keep App.jsx clear
  // Keep App.jsx clear

  const [count, setCount] = useState();

  return (
    <BrowserRouter>
      <div className="App">
        {/* <NavBar /> */}
        {/* <Product /> */}
        <Registration />
        <Login />
      </div>
    </BrowserRouter>
  );
}

export default App;
