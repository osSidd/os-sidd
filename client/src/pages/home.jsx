import { Box, Button, Container, Grid, Typography } from "@mui/material";
import HeroImg from '../assets/heroImg.png'

export default function Home(){

    const btnProps = {
        mr:2,
        fontSize:18,
        fontWeight:600,
        textTransform:'capitalize'
    }

    const containedBtn = {
        "&:hover":{
        backgroundColor:'#b30089'
        }
    }

    const outlinedBtn = {
        borderWidth:2,
        borderColor:'#b30089',
        color:'#b30089',
        "&:hover":{
            borderWidth:2,
            borderColor:'#b30089'     
        }
    }

    return(
        <Container id="home" maxWidth="xl" sx={{minHeight:'90vh', display:'flex', alignItems:'center',}}>
            <Grid container>
                <Grid item md={7} alignSelf='center'>
                    <Typography variant="h2" sx={{color:'#333533', fontWeight:600}} mb={-1}>
                        Hey, I'm
                    </Typography>
                    <Typography component="h1" sx={{color:'#b30089'}} mb={2} variant="h1" fontWeight={700}>
                        Osama
                    </Typography>
                    <Typography sx={{fontSize:18, fontWeight:500, color: '#1f081288',}}>
                        A self taught MERN stack developer, looking for a job in web dev field.
                    </Typography>
                    <Box mt={4}>
                        <Button disableElevation href="#about" size="large" variant="contained" sx={{...btnProps, bgcolor:'#b30089', ...containedBtn}}>learn more</Button>
                        <Button href="#contact" size="large" variant="outlined" sx={[btnProps, outlinedBtn]}>contact me</Button>
                    </Box>
                </Grid>
                <Grid item md={5} alignSelf='center'>
                    <Box
                        component='img'
                        src={HeroImg}
                        width={500}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}