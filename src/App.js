import React from "react";
import "./sass/App.scss";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import MyWork from "./components/MyWork";

function App() {
  return (
    <div className="page">
      <Header />
      <AboutMe />
      <Skills />
      <MyWork />
    </div>
  );
}

export default App;
