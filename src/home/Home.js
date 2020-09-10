import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Content from "./Content";
import Footer from "./Footer";
import ProductDetail from "../products/ProductDetail";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      {/* <Hero />
      <Content /> */}
      <ProductDetail />
      <Footer />
    </div>
  );
};

export default Home;
