import React from "react";
import "./sass/App.scss";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="page">
      <Header />
      <AboutMe />
    </div>
  );
}

export default App;
