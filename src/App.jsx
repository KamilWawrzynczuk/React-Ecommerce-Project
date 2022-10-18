import { useState } from "react";
import "./styles/main.scss";
import styled from "styled-components";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import ProductsPaginate from "./components/ProductsPaginate";
import Registration from "./components/user/Registration";
import Login from "./components/user/Login";
import NavBar from "./components/main-page/NavBar";

import CoverPhoto from "./components/main-page/CoverPhoto";
import Payment from "./components/purchases/Payment";
import Context from "./functions/Context";
import Product from "./components/Product";
import CartCardComponent from "./components/purchases/CartCardComponent";
import FetchContext from "./functions/fetchContext";
import WomenProducts from "./components/WomenProducts";
import Footer from "./components/main-page/Footer";
import UserInfo from "./components/user/UserInfo";


function App() {
  return (
    <Context>
      <FetchContext>
        <BrowserRouter>
          <div className="App">
            <NavBar />
            {/* <UserInfo />
            <CoverPhoto /> */}

            <Routes>
            
                <Route path="/Login" element={<Login />} />
                <Route path="/Registration" element={<Registration />} />
                {/* <Route path="/" element={<CoverPhoto />} /> */}
                <Route path="/Product" element={<Product />} />
                <Route path="/ShoppingCart" element={<CartCardComponent />} />
             
            </Routes>
          </div>
        </BrowserRouter>
      </FetchContext>
    </Context>
  );
}
export default App;
