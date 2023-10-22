import {AppBar, Box, Button, Container, IconButton, Toolbar} from '@mui/material'
import MenuDrawer from './drawer'

export default function Navbar(){

    const pages = ['home', 'about', 'projects', 'experience']
    const btnProps = {
        ml: 2,
        textTransform: 'capitalize',
        fontSize:18,
        fontWeight:600,
        color:'#404193',
        letterSpacing: 1,
        transition:'color 0.35s ease-out',
        "&:hover":{
            backgroundColor:'#fefefe',
            color:'#b30089'
        },
    }
    const linksProps = {
        position:'relative',
        "&::after":{
            content:'""',
            position: 'absolute',
            bottom:5,
            left:8,
            backgroundColor: '#b30089',
            width:"0%",
            height:3,
            borderRadius:1,
            transition:'width 0.35s ease-out'
        },
        "&:hover::after":{
            width:'90%', 
        }   
    }
// Implement smooth scrolling with given duration using js
    return(
        <AppBar sx={{bgcolor:'#fefefe', mt:2}} elevation={0} position='static'>
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
                            variant='outlined'
                            href='#contact' 
                            sx={{
                                ...btnProps,
                                borderRadius:5, 
                                borderWidth:2, 
                                borderColor:'#404193', 
                                "&:hover":{
                                    borderWidth:2, 
                                    backgroundColor:'#b30089', 
                                    borderColor:'#b30089',
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