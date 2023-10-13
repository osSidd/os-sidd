import {AppBar, Box, Button, Container, IconButton, Toolbar} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

export default function Navbar(){

    const pages = ['home', 'about', 'projects', 'experience']

    return(
        <AppBar sx={{bgcolor:'#fefefe'}} position='static'>
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
                                <Button key={page}>
                                    {page}
                                </Button>
                            ))
                        }
                        <Button variant='outlined'>get in contact</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}