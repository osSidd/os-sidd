import {Box, Chip, Container, Grid, List, ListItem, Stack, Typography} from '@mui/material'
import SubHeading from '../components/subHeading'


export default function Experience(){

    const chipProp = {
        fontWeight:500, 
        fontSize:16, 
        p:2, 
        backgroundColor:'#b30089', 
        color:'#fefefe', 
        width:'fit-content'
    }
    const listItemProp = {
        display:'list-item',
        fontSize:18, 
        lineHeight: 1.5, 
        fontFamily:'Roboto', 
        color:'#1f0812'
    }

    return (
        <Container 
            id="experience" 
            maxWidth="xl" 
            sx={{
                minHeight:'40vh', 
                display: 'flex', 
                flexDirection:'column', 
                justifyContent:'center', 
                mt:{xs:10, lg:14}
            }}
        >
            <SubHeading title='Experience' />
            <Grid container>
                <Grid item xs={12} md={3} pl={{xs:0, md:2}}>
                    <Typography 
                        fontSize={18} 
                        sx={{color:'#333533'}} 
                        fontWeight={600}
                    >
                        Aasa Technologies
                    </Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Box>
                        <Typography 
                            variant='h5' 
                            fontWeight={600} 
                            sx={{color:'#333533'}} 
                            mb={1}
                        >
                            web development intern
                        </Typography>
                        <Typography 
                            fontSize={18} 
                            sx={{color:'#1f081288'}}
                        >
                            feb'23 - may'23 (internship)
                        </Typography>
                    </Box>
                        <List sx={{listStyleType: 'disc', mt:2, ml:4}}>
                            <ListItem sx={listItemProp}>
                                Developed the proer software website from scratch using the given design in wordpress using the elementor plugin.
                            </ListItem>
                            <ListItem sx={listItemProp}>
                                Worked with the design team to update the ui whenever the a change came across while working on proer website.
                            </ListItem>
                            <ListItem sx={listItemProp}>
                                Worked on the about section of Infoceleria.com
                            </ListItem>
                            <ListItem sx={listItemProp}>
                                Designed the dashboards of proer app using React, D3.Js and MUI.
                            </ListItem>
                        </List>
                    <Box>
                        <Typography sx={{color:'#333533'}} fontWeight={600} mt={4}>technologies used:</Typography>
                        <Stack 
                            direction='row' 
                            flexWrap='wrap' 
                            justifyContent={{xs:'flex-start', md:'flex-start'}} 
                            gap={2} 
                            mt={2}
                        >
                            <Chip label="react" variant='outlined' sx={chipProp}/>
                            <Chip label="mui" variant='outlined' sx={chipProp}/>
                            <Chip label="D3" variant='outlined' sx={chipProp}/>
                            <Chip label="laravel" variant='outlined' sx={chipProp}/>
                            <Chip label="wordpress" variant='outlined' sx={chipProp}/>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}