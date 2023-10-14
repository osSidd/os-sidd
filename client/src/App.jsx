import { Container } from "@mui/material";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Project from "./pages/project";


export default function App(){
  return(
    <Container>
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
    </Container>
  )
}