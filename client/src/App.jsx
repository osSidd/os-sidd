import { Container } from "@mui/material";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
import About from "./pages/about";
import Project from "./pages/project";
import Experience from "./pages/experience";
import Contact from "./pages/contact";

import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function App(){
  return(
    <Container>
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      <Experience/>
      <Contact/>
      <Footer/>
    </Container>
  )
}