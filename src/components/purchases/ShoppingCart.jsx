import React, { useState, useContext } from "react";
import { dataContext } from "../../functions/Context";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import CartCardComponent from "./CartCardComponent";

function ShoppingCart() {
  // Empty Cart Message
  // if (isEmpty) return <h5 className="empty-message">My Cart is Empty.</h5>;

  const totalPrice = cartCardComponent.reduce(
    (totalPrice, item) => totalPrice + item.price,
    0
  );

  return (
    // Main Container
    <Container fluid className="shopping-cart-main-container">
      <h1 className="shopping-cart-header">Shopping Cart:</h1>
      <Row>
        <Col>
          <div className="div-flex-center">
            <p className="cart-amount">
              Cart<span className="badge">0</span>
            </p>
            <p className="remove-all">Remove All</p>
          </div>
          <div className="cart-items">
            <CartCardComponent />
          </div>
          <div>Total Price: {totalPrice}</div>
        </Col>
      </Row>
    </Container>
  );
}

export default ShoppingCart;
