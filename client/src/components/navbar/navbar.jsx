import {AppBar, Box, Button, Container, Toolbar} from '@mui/material'
import MenuDrawer from './drawer'
import { useEffect, useState } from 'react'

export default function Navbar(){

    const [elevation, setElevation] = useState(0)

    const pages = ['home', 'about', 'projects', 'experience']
    const btnProps = {
        ml: 2,
        textTransform: 'capitalize',
        fontSize:16,
        fontWeight:400,
        color:'link.main',
        letterSpacing: 1,
        transition:'color 0.35s ease-out',
        "&:hover":{
            color:'primary.main',
            backgroundColor:'#fefefe',
        },
    }
    const linksProps = {
        position:'relative',
        "&::after":{
            content:'""',
            position: 'absolute',
            bottom:5,
            left:8,
            backgroundColor: 'primary.main',
            width:"0%",
            height:2,
            borderRadius:1,
            transition:'width 0.35s ease-out'
        },
        "&:hover::after":{
            width:'90%', 
        }   
    }

    useEffect(() => {
        window.addEventListener('scroll', debounce(elevate, 100))
    }, [])

    console.log('state')

    function elevate(){
        if(window.scrollY > 0)
            setElevation(2)
        else
            setElevation(0)
    }

    function debounce(fn, delay){
        let timer;
        return () => {
            clearTimeout(timer)
            timer = setTimeout(() => {
                fn.call(this, arguments)
            }, delay)
        }
    }

// Implement smooth scrolling with given duration using js
    return(
        <AppBar sx={{bgcolor:'#fefefe', paddingY:1, top:0,}} elevation={elevation} position='fixed'>
            <Container maxWidth="xl">
                <Toolbar>
                    <Box sx={{display:{xs:'flex', lg:'none'}, ml:'auto'}}>
                        <MenuDrawer/>
                    </Box>
                    <Box ml='auto' sx={{display:{xs:'none', lg:'flex'}}}>
                        {
                            pages.map(page => (
                                <Button key={page} href={`#${page}`} sx={[btnProps, linksProps]}>
                                    {page}
                                </Button>
                            ))
                        }
                        <Button 
                            href='https://os-writings.vercel.app/' 
                            sx={[btnProps, linksProps]}
                        >
                            blog
                        </Button>
                        <Button 
                            variant='outlined'
                            href='#contact' 
                            sx={{
                                ...btnProps,
                                borderRadius:5, 
                                borderColor:'link.main', 
                                "&:hover":{
                                    backgroundColor:'primary.main', 
                                    borderColor:'primary.main',
                                    color:"#fefefe"
                                }
                            }}
                        >
                            contact me
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}