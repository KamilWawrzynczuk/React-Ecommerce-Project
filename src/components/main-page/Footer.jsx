import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  height: 10vh;
  width: 100vw;
  background: grey;
`;
function Footer() {
  return (
    <Wrapper>
      <Container className="footer-container d-flex-row">
        <Row className="d-flex justify-content-around align-items-center">
          <Col>1 of 1</Col>
          <Col>2 of 1</Col>
          <Col>2 of 1</Col>
          <Col className="d-flex justify-content-between">
            <i className="bi bi-person"></i>
            <i className="bi bi-person"></i>
          </Col>
        </Row>
        <Row
          className="d-flex justify-content-around align-items"
          style={{ border: "solid" }}
        >
          <Col>4 of 1</Col>
          <Col>5 of 1</Col>
          <Col>6 of 1</Col>
          <Col className="d-flex justify-content-between">
            <i className="bi bi-person"></i>
            <i className="bi bi-person"></i>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default Footer;
