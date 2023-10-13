import { Container } from "@mui/material";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";


export default function App(){
  return(
    <Container>
      <Navbar/>
      <Home/>
      <About/>
    </Container>
  )
}