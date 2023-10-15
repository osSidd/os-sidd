import { Box, Button, ButtonGroup, Container, Grid, Typography } from "@mui/material";

export default function Home(){

    const btnProps = {
        mr:2,
        fontSize:18,
        fontWeight:600,
        textTransform:'capitalize'
    }

    const outlinedBtn = {
        borderWidth:2,
        borderColor:'#555',
        color:'#555',
        "&:hover":{
            borderWidth:2,
            borderColor:'#555',
            color:'#555',
        }
    }

    return(
        <Container id="home" maxWidth="xl" sx={{minHeight:'90vh', display:'flex', alignItems:'center'}}>
            <Grid container>
                <Grid item md={7}>
                    <Typography variant="h2" sx={{color:'#555'}} mb={-1}>
                        Hey, I'm
                    </Typography>
                    <Typography component="h1" sx={{color:'#333'}} mb={2} variant="h1" fontWeight={600}>
                        Osama
                    </Typography>
                    <Typography sx={{fontSize:20, fontWeight:600, color: '#555', lineHeight:1.5, letterSpacing:1}}>
                        I am a self taught MERN stack developer. I am mostly interested in API development and integration using RESTFUL approach and GraphQL.
                    </Typography>
                    <Box mt={4}>
                        <Button size="large" variant="contained" sx={{...btnProps, bgcolor:'#555'}}>learn more</Button>
                        <Button size="large" variant="outlined" sx={[btnProps, outlinedBtn]}>contact me</Button>
                    </Box>
                </Grid>
                <Grid item md={5}></Grid>
            </Grid>
        </Container>
    )
}