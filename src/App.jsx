import {useState } from "react";
import "./styles/main.scss";
import styled from "styled-components";
import NavBar from "./components/main-page/NavBar";
// import "./functions/DataFetcher";
import FixedBottomNavigation from "./components/main-page/NavBar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Product from "./components/Product";

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
        <Product/>
      </div>
    </BrowserRouter>
  );
}

export default App;
