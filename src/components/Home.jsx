import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import Main from "./Main";
import Footer from "./Footer";

function Home() {
  return (
    <div className="intro">
      <Header />
      <Intro />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
