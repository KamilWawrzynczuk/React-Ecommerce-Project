import { useState } from "react";
import "./styles/main.scss";
import styled from "styled-components";
import NavBar from "./components/main-page/NavBar";
import "./functions/DataFetcher"
import { DataFetcher } from "./functions/DataFetcher";
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
  const [count, setCount] = useState(0);
  

  return (
    <div className="App">
      <NavBar />
      <P>Mad site n dat</P>
      <P>{count}</P>
      <button onClick={() => setCount(count + 1)}>Click me harder</button>
    </div>
  );
}

export default App;
