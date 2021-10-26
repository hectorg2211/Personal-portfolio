import React from "react";
import "./sass/App.scss";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import MyWork from "./components/MyWork";
import MyExperience from "./components/MyExperience";
import Contact from "./components/Contact";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="page">
      <Header />
      <AboutMe />
      <Skills />
      <MyWork />
      <MyExperience />
      <Contact />
      <Modal />
    </div>
  );
}

export default App;
