import {Box, Container, Grid, Typography} from "@mui/material";
import AboutTabs from "../components/about/tabs";
import SubHeading from "../components/subHeading";

import AboutImg from '../assets/aboutImg.png'


export default function About(){

    return(
        <Container id="about" maxWidth="xl" sx={{minHeight:'90vh', display:'flex', alignItems:'center'}}>
            <Grid container>
                <Grid item md={5} alignSelf='center'>
                    <Box
                       
                    >
                    <Box
                        component="img"
                        src={AboutImg}
                        width={450}
                    />
                    </Box>
                </Grid>
                <Grid item md={7}>
                    <SubHeading title='About me' />
                    <Typography mb={2} sx={{color:'#1f0812'}}>
                        Hello!, I am Osama, a developer based in Kolkata, West Bengal. I like to create web applications that are secure, performant and device agnostic.
                    </Typography>
                    <AboutTabs/>
                </Grid>
            </Grid>
        </Container>
    )
}