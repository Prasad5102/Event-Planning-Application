import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  

  return (
 <>
      <Navbar/>
      <HeroSection/>
      <Services/>
      <About/>
      <Contact/>
      <Footer/>
      <Toaster/>
   </>
  )
}

export default App
