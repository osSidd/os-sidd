import {Box, Button, Chip, Container, Grid, IconButton, Stack, TextField, Typography} from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GithubIcon from '@mui/icons-material/GitHub'

export default function Contact(){
    return (
        <Container maxWidth="xl" sx={{minHeight:'90vh', display: 'flex', flexDirection:'column', justifyContent:'center'}}>
            <Typography variant='h2'>Get in Touch</Typography>
            
            <Grid container mt={4}>
                <Grid item md={6} alignSelf="center">
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium facere deserunt voluptatibus facilis minus voluptates quo! Et, rerum delectus, libero aliquid cupiditate, nemo explicabo sint odit dicta atque soluta similique!</Typography>
                    <Box>
                        <IconButton> 
                            <LinkedInIcon/>
                        </IconButton>
                        <IconButton>
                            <GithubIcon/>
                        </IconButton>
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <TextField sx={{width:'100%', mb:2}} variant='outlined' placeholder='Name' />
                    <TextField sx={{width:'100%', mb:2}} placeholder='Email'/>
                    <TextField sx={{width:'100%', mb:6}} multiline rows={4} placeholder='Message'/>
                    <Button variant='contained'>Send Message</Button>
                </Grid>
            </Grid>
        </Container>
    )
}