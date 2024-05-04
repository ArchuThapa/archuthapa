import { Route, createBrowserRouter, createRoutesFromChildren } from "react-router-dom";
import Playout from "../Playout";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Message from "../Message";
import Profile from "../Profile";
import About from "../About";
import Skills from "../Skills";
import Hireme from "../Hireme";
import Project from "../Project";
import Contact from "../Contact";


export const MainRouter=createBrowserRouter(
    createRoutesFromChildren(
        <Route>
            
            <Route path="/" element={<Playout />} />
            <Route path="navbar" element={<Navbar />} />
            <Route path="message" element={<Message/>} />
            <Route path="profile" element={<Profile />} />
            <Route path="about" element={<About />} />
            <Route path="skills" element={<Skills />} />
            <Route path="hireme" element={<Hireme />} />
            <Route path="projects" element={<Project />} />
            <Route path="contact" element={<Contact />} />







            <Route path="footer" element={<Footer />} />
            



            </Route>
      
    )


)