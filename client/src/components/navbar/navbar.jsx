import {AppBar, Box, Button, Container, Toolbar} from '@mui/material'
import MenuDrawer from './drawer'

export default function Navbar(){

    const pages = ['home', 'about', 'projects', 'experience']
    const btnProps = {
        ml: 3,
        textTransform: 'capitalize',
        fontSize:16,
        fontWeight:400,
        color:'#dedede',
        letterSpacing: 1,
        transition:'color 0.35s ease-out',
        "&:hover":{
            color:'#fff',
        },
    }
    const linksProps = {
        position:'relative',
        "&::after":{
            content:'""',
            position: 'absolute',
            bottom:5,
            left:8,
            backgroundColor: 'transparent',
            width:"0%",
            height:2,
            borderRadius:1,
            transition:'width 0.35s ease-out'
        },
        "&:hover::after":{
            width:'90%', 
        }   
    }

// Implement smooth scrolling with given duration using js
    return(
        <AppBar sx={{bgcolor:'#222222ef', paddingY:2, top:0,}} position='fixed'>
            <Container maxWidth="xl">
                
                <Toolbar>
                    <Box sx={{display:{xs:'flex', lg:'none'}, ml:'auto'}}>
                        <MenuDrawer/>
                    </Box>
                    <Box ml='auto' sx={{display:{xs:'none', lg:'flex'}}}>
                        {
                            pages.map(page => (
                                <Button variant='text' key={page} href={`#${page}`} sx={[btnProps, linksProps]}>
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
                                paddingY:1,
                                paddingX:2.5,
                                fontWeight:700,
                                borderRadius: 10,
                                borderWidth:2,
                                borderColor:'burlywood',
                                "&:hover":{
                                    borderWidth:2,
                                    borderColor:'burlywood',
                                    color:'#fff',
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