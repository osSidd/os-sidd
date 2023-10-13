import { Container } from "@mui/material";
import Navbar from "./components/navbar";
import Home from "./pages/home";


export default function App(){
  return(
    <Container>
      <Navbar/>
      <Home/>
    </Container>
  )
}