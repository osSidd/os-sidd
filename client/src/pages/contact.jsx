import {Box, Button, Container, Grid, IconButton, TextField, Typography} from '@mui/material'

import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GithubIcon from '@mui/icons-material/GitHub'
import SubHeading from '../components/subHeading'

import useMessage from '../hooks/useMessage'

export default function Contact(){

    const {message, status, formData, sending, handleChange, handleSubmit} = useMessage()

    const iconProp = {
        fontSize:48,
        color:'link.main',
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
        <Container 
            id="contact" 
            maxWidth="xl" 
            sx={{
                minHeight:'40vh', 
                display: 'flex', 
                flexDirection:'column', 
                justifyContent:'center', 
                mt:14
            }}
        >
            <SubHeading title='Contact me' />            
            <Grid container>
                <Grid item xs={12} md={6} alignSelf='center'>
                <Typography pr={8} fontSize={18} color="text.primary">
                    Currently looking for any opportunity related to software engineering field. I can join immediately.
                </Typography>
                    <Box mt={{xs:2, md:4}}>
                        <IconButton 
                            sx={iconBtn} 
                            href='https://www.linkedin.com/in/osama-siddiquee-5722a1a1' 
                            target='_blank'
                        > 
                            <LinkedInIcon sx={iconProp}/>
                        </IconButton>
                        <IconButton 
                            sx={iconBtn} 
                            href='https://github.com/osSidd/' 
                            target='_blank'
                        >
                            <GithubIcon sx={iconProp}/>
                        </IconButton>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} mt={{xs:6, md:0}} position='relative'>
                    <form onSubmit={handleSubmit}>
                        <TextField 
                            onChange={handleChange} 
                            value={formData.name} 
                            sx={{width:'100%', mb:2}} 
                            variant='outlined' 
                            placeholder='Name' 
                            name='name'
                            required
                        />
                        <TextField 
                            onChange={handleChange} 
                            value={formData.email} 
                            sx={{width:'100%', mb:2}} 
                            variant='outlined'
                            placeholder='Email' 
                            name='email'
                            required
                        />
                        <TextField 
                            onChange={handleChange} 
                            value={formData.message} 
                            sx={{width:'100%', mb:4}}
                            variant='outlined' 
                            multiline 
                            rows={4} 
                            placeholder='Message' 
                            name='message'
                            required
                        />
                        <Button 
                            type='submit'
                            size='large' 
                            disableElevation 
                            variant='contained' 
                            sx={{
                                textTransform:'capitalize', 
                                fontWeight:500,
                                display:'block', 
                                m:{xs:'auto', md:0}, 
                                width:{xs:'100%', md:'auto'}, 
                                backgroundColor: sending ? 'primary.light' : 'primary.main', 
                                "&:hover":{backgroundColor: 'primary.light',}
                            }}
                        >
                            {
                                sending ? 'Sending Message' : 'Send Message'
                            }
                        </Button>
                        <div style={{
                            color: status ? 'teal' : 'crimson',
                            display: status ? 'block' : 'none',
                            fontFamily:'Roboto',
                            textAlign:'center',
                            position:'absolute',
                            bottom:'-5px',
                            width:'100%'
                        }} >
                            {message}
                        </div>
                    </form>
                </Grid>
            </Grid>
        </Container>
    )
}