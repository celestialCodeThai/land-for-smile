import React from "react";
import Home from "./home";
import Product from "./product";
import "./stylesheets/main.scss";
import { Router } from "@reach/router";
import { FilterProvider } from "./context/FilterContext";

function App() {
  return (
    <div className="App">
      <FilterProvider>
        <Router>
          <Home path="/" />
          <Product path="/product/:productId" />
        </Router>
      </FilterProvider>
    </div>
  );
}

export default App;
