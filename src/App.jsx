import { useState } from "react";
import "./styles/main.scss";
import styled from "styled-components";
import NavBar from "./components/main-page/NavBar";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Product from "./components/Product";
import CoverPhoto from "./components/main-page/CoverPhoto";
import ProductsPaginate from "./components/ProductsPaginate";


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
        <NavBar />
        <CoverPhoto />
        <ProductsPaginate/>
      </div>
    </BrowserRouter>
  );
}

export default App;
