import {AppBar, Box, Button, Container, IconButton, Toolbar} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

export default function Navbar(){

    const pages = ['home', 'about', 'projects', 'experience']
    const btnProps = {
        ml: 2,
        textTransform: 'capitalize',
        fontSize:18,
        fontWeight:600,
        color:'#555',
        letterSpacing: 1,
        transition:'color 0.35s ease-out',
        "&:hover":{
            backgroundColor:'#fefefe',
            color:'#34c'
        },
    }
    const linksProps = {
        position:'relative',
        "&::after":{
            content:'""',
            position: 'absolute',
            bottom:5,
            left:8,
            backgroundColor: '#34c',
            width:"0%",
            height:3,
            borderRadius:1,
            transition:'width 0.35s ease-out'
        },
        "&:hover::after":{
            width:'90%', 
        }   
    }

    return(
        <AppBar sx={{bgcolor:'#fefefe', mt:2}} elevation={false} position='static'>
            <Container maxWidth="xl">
                <Toolbar>
                    {/* <Box sx={{display:{xs:'flex', md:'none'}}}>
                        <IconButton>
                            <MenuIcon/>
                        </IconButton>
                    </Box> */}
                    <Box ml='auto'>
                        {
                            pages.map(page => (
                                <Button key={page} sx={[btnProps, linksProps]}>
                                    {page}
                                </Button>
                            ))
                        }
                        <Button 
                            variant='outlined' 
                            sx={{...btnProps, borderWidth:2, borderColor:'#555', "&:hover":{borderWidth:2, backgroundColor:'#fefefe', borderColor:'#34c', color:"#34c"}}}
                        >
                            get in touch
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}