import {Box, Button, Chip, Container, Grid, IconButton, Stack, TextField, Typography} from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GithubIcon from '@mui/icons-material/GitHub'
import SubHeading from '../components/subHeading'

export default function Contact(){

    const iconProp = {
        fontSize:48,
        color:'#b30089',
        transition:'transform 0.35s ease-in-out',
        "&:hover":{
            transform:'scale(1.05)'
        }
    }

    const iconBtn = {
        "&:hover":{
            backgroundColor:'white'
        }
    }

    return (
        <Container id="contact" maxWidth="xl" sx={{minHeight:'90vh', display: 'flex', flexDirection:'column', justifyContent:'center', my:8}}>
            <SubHeading title='Contact me' />            
            <Grid container>
                <Grid item md={6} alignSelf='center'>
                <Typography pr={8} fontSize={18} sx={{color:'#1f0812'}}>
                    Currently looking for any opportunity related to software engineering field. I can join immediately.
                </Typography>
                    <Box mt={4} ml={12}>
                        <IconButton sx={iconBtn} href='https://www.linkedin.com/in/osama-siddiquee-5722a1a1' target='_blank'> 
                            <LinkedInIcon sx={iconProp}/>
                        </IconButton>
                        <IconButton sx={iconBtn} href='https://github.com/osSidd/' target='_blank'>
                            <GithubIcon sx={iconProp}/>
                        </IconButton>
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <TextField sx={{width:'100%', mb:2}} variant='outlined' placeholder='Name' />
                    <TextField sx={{width:'100%', mb:2}} placeholder='Email'/>
                    <TextField sx={{width:'100%', mb:4}} multiline rows={4} placeholder='Message'/>
                    <Button size='large' disableElevation variant='contained' sx={{textTransform:'capitalize', fontWeight:500, backgroundColor:'#b30089', "&:hover":{backgroundColor: '#b30089'}}}>Send Message</Button>
                </Grid>
            </Grid>
        </Container>
    )
}