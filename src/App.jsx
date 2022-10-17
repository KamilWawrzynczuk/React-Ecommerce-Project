import { useState } from "react";
import "./styles/main.scss";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import ProductsPaginate from "./components/ProductsPaginate";
import Registration from "./components/user/Registration";
import Login from "./components/user/Login";
import NavBar from './components/main-page/NavBar'
import CoverPhoto from './components/main-page/CoverPhoto'
import Context from "./functions/Context";

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
    <Context>
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <CoverPhoto/>
        <Registration />
        <Login />
        {/* <ProductsPaginate /> */}
      </div>
    </BrowserRouter>
    </Context>
  );
}

export default App;
