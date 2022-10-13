import { useState } from "react";
import "./styles/main.scss";
import styled from "styled-components";

function App() {
  const P = styled.p`
    color: white;
    font-size: 5rem;
    margin: 3rem;
  `;
  // Keep App.jsx clear
  // Keep App.jsx clear
  // Keep App.jsx clear
  // Keep App.jsx clear
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <P>Mad site n dat</P>
      <P>{count}</P>
      <button onClick={() => setCount(count + 1)}>Click me harder</button>
    </div>
  );
}

export default App;
