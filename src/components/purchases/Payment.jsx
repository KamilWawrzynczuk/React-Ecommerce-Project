import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Card = styled.div`
  border: solid 2px;
  width: 50vw;
  max-width: 500px;
  margin: auto;
  border-radius: 2px;
`;
const HeaderWrapper = styled.div`
  display: flex;
  justify-content
`;
const cardNumber = styled.div
// items will come from shopping cart state
const items = ["item1", "item1", "item1", "item1"];

function Payment() {
  return (
    <Wrapper>
      <Card>
        {items.map((item, index) => {
          return <span key={index}>{item}</span>;
        })}
        <HeaderWrapper>
          <h2>Card information</h2>
          <i>Visa</i>
        </HeaderWrapper>
      </Card>
    </Wrapper>
  );
}

export default Payment;
