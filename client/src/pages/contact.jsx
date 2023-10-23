import {Box, Button, Chip, Container, Grid, IconButton, Stack, TextField, Typography} from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GithubIcon from '@mui/icons-material/GitHub'
import SubHeading from '../components/subHeading'
import { useState } from 'react'

export default function Contact(){

    const [formData, setFormData] = useState({
        name: '',
        email:'',
        message:''
    })

    const [sending, setSending] = useState(false)
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState(false)

    function handleChange(e){
        const {name, value} = e.target
        setFormData(prev => ({
            ...prev,
            [name] : value
        }))
    }

    function hideMessage(){
        setTimeout(() => {
            setStatus(false)
        }, 3000)
    }

    async function handleSubmit(e){

        setSending(true)
        setStatus(false)

        e.preventDefault()
        const res = await fetch(import.meta.env.VITE_URI, {
            method:'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        if(res.ok){
            setSending(false)
            setFormData({
                name: '',
                email: '',
                message: ''
            })
            setStatus(true)
            hideMessage()
        }else{
            setMessage(data.status)
            setStatus(true)
        }
        const data = await res.json()
        setMessage(data.status)
    }

    const iconProp = {
        fontSize:48,
        color:'#404193',
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
                <Typography pr={8} fontSize={18} sx={{color:'#1f0812'}}>
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
                        <TextField onChange={handleChange} value={formData.name} sx={{width:'100%', mb:2}} variant='outlined' placeholder='Name' name='name'/>
                        <TextField onChange={handleChange} value={formData.email} sx={{width:'100%', mb:2}} placeholder='Email' name='email'/>
                        <TextField onChange={handleChange} value={formData.message} sx={{width:'100%', mb:4}} multiline rows={4} placeholder='Message' name='message'/>
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
                                backgroundColor: sending ? '#b3008999' : '#b30089', 
                                "&:hover":{backgroundColor: '#b30089',}
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