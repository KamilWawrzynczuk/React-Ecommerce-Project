import React, { useState, useContext } from "react";
import styled from "styled-components";
import { dataContext } from "../../functions/Context";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function ShoppingCart() {
  return (
    <Container>
      <Header>Shopping Cart</Header>
      <div>
        <h3></h3>
        <h4></h4>
        <Button variant="outline-light">Light</Button>{" "}
      </div>
    </Container>
  );
}

export default ShoppingCart;
