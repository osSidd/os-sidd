import { Box, Container, Grid, Typography} from "@mui/material";
import AboutTabs from "../components/about/tabs";
import SubHeading from "../components/subHeading";

export default function About(){

    return(
        <Container id="about" maxWidth="xl" sx={{minHeight:'90vh', display:'flex', alignItems:'center'}}>
            <Grid container>
                <Grid item md={4}>
                   <div></div>
                </Grid>
                <Grid item md={8}>
                    <SubHeading title='About me' />
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta tempora, fugit sunt consequuntur maxime, omnis sequi tenetur odio, ducimus quia magni. Sequi cum illo numquam earum fugit aliquid minus perferendis!
                    </Typography>
                    <AboutTabs/>
                </Grid>
            </Grid>
        </Container>
    )
}