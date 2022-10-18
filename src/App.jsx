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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Payment />

        <Routes>
          <Route path="/" element={<CoverPhoto />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
        </Routes>
        {/* <ProductsPaginate /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
