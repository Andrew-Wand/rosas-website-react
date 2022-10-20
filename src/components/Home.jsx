import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import Main from "./Main";

function Home() {
  return (
    <div className="intro">
      <Header />
      <Intro />
      <Main />
    </div>
  );
}

export default Home;
