import { Container } from "@mui/material";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Project from "./pages/project";
import Experience from "./pages/experience";
import Contact from "./pages/contact";
import Footer from "./components/footer";


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