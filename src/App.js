import React from "react";
import Home from "./home";
import Product from "./product";
import "./stylesheets/main.scss";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Product path="/product/:productId" />
      </Router>
    </div>
  );
}

export default App;
