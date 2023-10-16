import {Box, Container, Grid, Typography} from "@mui/material";
import AboutTabs from "../components/about/tabs";
import SubHeading from "../components/subHeading";

import AboutImg from '../assets/aboutImg.webp'

export default function About(){

    return(
        <Container id="about" maxWidth="xl" sx={{minHeight:'90vh', display:'flex', alignItems:'center'}}>
            <Grid container>
                <Grid item md={4}>
                   <Box
                    component="img"
                    src={AboutImg}
                    width={250}
                    mt={12}
                   />
                </Grid>
                <Grid item md={8}>
                    <SubHeading title='About me' />
                    <Typography mb={2}>
                        Hello!, I am Osama, a developer based in Kolkata, West Bengal. I like to create web applications that are secure, performant and device agnostic.
                    </Typography>
                    <AboutTabs/>
                </Grid>
            </Grid>
        </Container>
    )
}