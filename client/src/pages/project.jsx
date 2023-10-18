import proer from '../assets/proer.png'
import apify from '../assets/apify.png'
import portfolio from '../assets/portfolio.png'

import {Box, Button, Chip, Container, Grid, Paper, Stack, Typography} from '@mui/material'
import SubHeading from '../components/subHeading'

export default function Project(){

    const chipProp = {p:2, fontSize:16, fontWeight:500, color:'#b30089', borderColor:'#b30089'}
    const linkBtnProp = {borderRadius:5, borderWidth:1, fontSize:16, textTransform:'capitalize', color:'#404193', borderColor:'#404193', "&:hover":{borderColor:'#404193', backgroundColor:'#404193', color:'#fefefe'}}

    return (
        <Container id="projects" maxWidth="xl" sx={{minHeight:'90vh', display:'flex', alignItems:'center', mt:8, mb:16}}>
            <Box width="100%">
               <SubHeading title='Projects'/>
               <Grid container>
                    <Grid item md={4}>
                        <Box
                            component="img"
                            src={proer}
                            alt="project"
                            sx={{
                                width:300,
                            }}
                        />
                    </Grid>
                    <Grid item md={4} alignSelf='flex-start'>
                        <Typography variant='h5' fontWeight={600} sx={{color:'#333533'}}>Proer Website UI </Typography>
                        <Typography sx={{color:'#1f081299', fontSize:14, mt:1}}>march '23 - april '23</Typography>
                        <Typography sx={{color:'#1f081299', fontSize:14, mb:2}}>(associated with <span style={{fontWeight:'bold'}}>Aasa Technologies</span>)</Typography>
                        <Typography sx={{color:'#1f0812'}}>
                            Developed UI for Proer (Employee monitoring software) in wordpress using the elementor plugin.
                        </Typography>
                    </Grid>
                    <Grid item md={4} alignSelf='center'>
                        <Stack direction="row" gap={2} justifyContent='center' my={2}>
                            <Chip label="wordpress" size='small' variant='outlined' sx={chipProp}/> 
                            <Chip label="javascript" size='small' variant='outlined' sx={chipProp} />
                            <Chip label="css" size='small' variant='outlined' sx={chipProp}/>
                        </Stack>
                        <Stack direction='row' justifyContent='center' gap={2}>
                            <Button 
                                variant='outlined' 
                                sx={linkBtnProp} 
                                href='https://proer.io'
                                rel='noreferrer'
                                target='_blank'
                            >
                                live
                            </Button>
                        </Stack>
                    </Grid>
               </Grid>
               <Grid container mt={8}>
                    <Grid item md={4}>
                        <Box
                            component="img"
                            src={apify}
                            alt="project"
                            sx={{
                                width:300,
                            }}
                        />
                    </Grid>
                    <Grid item md={4} alignSelf='flex-start'>
                        <Typography variant='h5' fontWeight={600} sx={{color:'#333533'}}>APIfy</Typography>
                        <Typography sx={{color:'#1f081299', fontSize:14, mt:1}}>september '23 - present</Typography>
                        <Typography sx={{color:'#1f081299', fontSize:14, mb:2}}>(associated with <span style={{fontWeight:'bold'}}>Personal project</span>)</Typography>
                        <Typography sx={{color:'#1f0812'}}>
                            A PWA made out of interest of API integration. Combines feeds for news, weather, sports, finance, social & entertainment, thus eliminates need for multiple apps.
                        </Typography>
                    </Grid>
                    <Grid item md={4} alignSelf='center'>
                        <Stack direction="row" gap={2} justifyContent='center' my={2}>
                            <Chip label="react" size='small' variant='outlined' sx={chipProp}/>
                            <Chip label="d3.js" size='small' variant='outlined' sx={chipProp}/>
                            <Chip label="mui" size='small' variant='outlined' sx={chipProp}/>
                            {/* <Chip label="api-integration" size='medium' variant='outlined' sx={chipProp}/> */}
                        </Stack>
                        <Stack direction='row' justifyContent='center' gap={2}>
                            <Button 
                                variant='outlined' 
                                sx={linkBtnProp} 
                                href='#'
                                rel='noreferrer'
                                target='_blank'
                            >
                                live
                            </Button>
                            <Button 
                                href='https://github.com/osSidd/Apify'
                                target='_blank'
                                rel='noreferrer'
                                variant='outlined'
                                sx={linkBtnProp}
                            >
                                repo
                            </Button>
                        </Stack>
                    </Grid>
               </Grid>
               <Grid container mt={8}>
                    <Grid item md={4}>
                        <Box
                            component="img"
                            src={portfolio}
                            alt="project"
                            sx={{
                                width:300,
                            }}
                        />
                    </Grid>
                    <Grid item md={4} alignSelf='flex-start'>
                        <Typography variant='h5' fontWeight={600} sx={{color:'#333533'}}>Portfolio</Typography>
                        <Typography sx={{color:'#1f081299', fontSize:14, mt:1}}>october '23 - october'23</Typography>
                        <Typography sx={{color:'#1f081299', fontSize:14, mb:2}}>(associated with <span style={{fontWeight:'bold'}}>Personal project</span>)</Typography>
                        <Typography sx={{color:'#1f0812'}}>
                            I required a Portfolio to demonstrate my web development projects and skills. It's simple but gets the job done.
                        </Typography>
                    </Grid>
                    <Grid item md={4} alignSelf='center'>
                        <Stack direction="row" gap={2} justifyContent='center' my={2}>
                            <Chip label="react" size='small' variant='outlined' sx={chipProp}/>
                            <Chip label="mui" size='small' variant='outlined' sx={chipProp}/>
                            <Chip label="node.js" size='small' variant='outlined' sx={chipProp}/>
                            {/* <Chip label="api-integration" size='medium' variant='outlined' sx={chipProp}/> */}
                        </Stack>
                        <Stack direction='row' justifyContent='center' gap={2}>
                            <Button 
                                variant='outlined' 
                                sx={linkBtnProp} 
                                href='https://portfolio-green-two-40.vercel.app/'
                                rel='noreferrer'
                                target='_blank'
                            >
                                live
                            </Button>
                            {/* <Button 
                                href='https://github.com/osSidd/Apify'
                                target='_blank'
                                rel='noreferrer'
                                variant='outlined'
                                sx={linkBtnProp}
                            >
                                repo
                            </Button> */}
                        </Stack>
                    </Grid>
               </Grid>
            </Box>
        </Container>
    )
}