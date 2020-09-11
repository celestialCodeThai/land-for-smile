import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "./Hero";
import Content from "./Content";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
};

export default Home;
