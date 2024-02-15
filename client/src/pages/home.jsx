import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import HeroImg from '../assets/heroImg.png'

export default function Home(){

    const btnProps = {
        mr:2,
        fontSize:{xs:16, md:18},
        fontWeight:600,
        textTransform:'capitalize'
    }

    const outlinedBtn = {
        borderWidth:2,
        "&:hover":{
            borderWidth:2,  
        }
    }

    return(
        <Container 
            id="home" 
            maxWidth="xl" 
            sx={{
                minHeight:{xs:'40vh', lg:'90vh'}, 
                display:'flex', 
                alignItems:'center', 
                mt:{xs:10, lg:4}
            }}>
            <Grid container>
                <Grid item xs={12} sm={7} alignSelf='center'>
                    <Typography 
                        variant='h2'
                        color='text.primary' 
                        sx={{ 
                            fontWeight:600, 
                            textAlign:{xs:'center', sm:'start'}, 
                            fontSize:{xs:48, md:64}
                        }} 
                        mb={-1}
                    >
                        Hey, I'm
                    </Typography>
                    <Typography 
                        component="h1"
                        color='primary' 
                        sx={{ 
                            textAlign:{xs:'center', sm:'start'}, 
                            fontSize:{xs:72, md:96}
                        }}  
                            mb={2} 
                            variant="h1" 
                            fontWeight={700}
                    >
                        Osama
                    </Typography>
                    <Typography 
                        sx={{
                            fontSize:18, 
                            fontWeight:500, 
                            color: 'text.secondary', 
                            textAlign:{xs:'center', sm:'start'}
                        }}
                    >
                        A self taught MERN stack developer, looking for a job in web dev field. Interested in api development and integration projects.
                    </Typography>
                    <Stack direction={{xs:'column', sm:'row'}} px={{xs:8, sm:0}} rowGap={{xs:2, md:0}} mt={4}>
                        <Button 
                            disableElevation 
                            href="#about" 
                            size="large" 
                            variant="contained" 
                            sx={{...btnProps,}}
                        >
                            learn more
                        </Button>
                        <Button 
                            href="#contact" 
                            size="large" 
                            variant="outlined" 
                            sx={[btnProps, outlinedBtn]}
                        >
                            contact me
                        </Button>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={5} alignSelf='center'>
                    <Box
                        component='img'
                        src={HeroImg}
                        width={{xs:275, sm:300, md:400, lg:500}}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}