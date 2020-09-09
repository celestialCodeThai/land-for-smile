import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Content from "./Content";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Hero />
      <Content />
    </div>
  );
};

export default Home;
