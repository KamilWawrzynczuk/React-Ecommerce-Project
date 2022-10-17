import { useState } from "react";
import "./styles/main.scss";
import styled from "styled-components";
import NavBar from "./components/main-page/NavBar";
// import "./functions/DataFetcher";
import FixedBottomNavigation from "./components/main-page/NavBar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
    <Router>
      <div className="App">
        {/* <NavBar /> */}
        <FixedBottomNavigation />
      </div>
    </Router>
  );
}

export default App;
