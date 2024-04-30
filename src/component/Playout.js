
import React from "react";
import Navbar from "./Navbar";
import Meassage from "./Message";
import Profile from "./Profile";
import About from "./About";
import Skills from "./Skills";
import Hireme from "./Hireme";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";




const App = () => {
  return (
    <div>
      <Navbar />
      <Meassage />
      <Profile />
      <About />
      <Skills />
      <Hireme/>
      <Project/>
      <Contact/>


    
      <Footer />
     
      {/* <Hero />
      <About />
      <Skills />
      <Hireme />
      <Project />
      <Contact /> */}
   
    </div>
  );
};

export default App;