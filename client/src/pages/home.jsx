import { Box, Button, ButtonGroup, Container, Grid, Typography } from "@mui/material";

export default function Home(){
    return(
        <Container maxWidth="xl" sx={{minHeight:'90vh', display:'flex', alignItems:'center'}}>
            <Grid container>
                <Grid item md={7}>
                    <Typography variant="h2">
                        Hey, I'm
                    </Typography>
                    <Typography component="h1" variant="h1">
                        Osama
                    </Typography>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta tempora, fugit sunt consequuntur maxime, omnis sequi tenetur odio, ducimus quia magni. Sequi cum illo numquam earum fugit aliquid minus perferendis!
                    </Typography>
                    <Box>
                        <Button variant="contained">learn more</Button>
                        <Button variant="outlined">get in contact</Button>
                    </Box>
                </Grid>
                <Grid item md={5}></Grid>
            </Grid>
        </Container>
    )
}