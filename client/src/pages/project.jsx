import proer from '../assets/proer.png'
import apify from '../assets/apify.png'

import {Box, Chip, Container, Grid, Paper, Stack, Typography} from '@mui/material'
import SubHeading from '../components/subHeading'

export default function Project(){

    const chipProp = {p:2, fontSize:16, fontWeight:600, color:'white'}

    return (
        <Container id="projects" maxWidth="xl" sx={{minHeight:'90vh', display:'flex', alignItems:'center'}}>
            <Box width="100%">
               <SubHeading title='Projects'/>
                <Box mt={16} p={4} mb={12} sx={{display:'flex', alignItems:'center', justifyContent: 'flex-start', background:'linear-gradient(90deg, #fff, steelblue)'}}>
                <Paper elevation={0} square>
                        <Box
                            component="img"
                            src={proer}
                            alt="project"
                            sx={{
                                width:500
                            }}
                        />
                    </Paper>
                    <Box mt={4} pl={8}>
                        <Typography variant='h4' fontWeight={600} sx={{color:'white'}}>Proer Website UI </Typography>
                        <Box mt={2}>
                            <Typography fontSize={18} sx={{color:'#efefef'}}>
                                Developed UI for Proer (Employee Monitoring software), while @ Aasa Technologies. 
                            </Typography>
                        </Box>
                        <Stack direction="row" mt={4} gap={2} sx={{ml:'auto', width:'fit-content'}}>
                            <Chip label="wordpress" size='medium' variant='outlined' sx={chipProp}/> 
                            <Chip label="javascript" size='medium' variant='outlined' sx={chipProp} />
                            <Chip label="css" size='medium' variant='outlined' sx={chipProp}/>
                        </Stack>
                    </Box>
                </Box>
                <Box mt={12} p={4} mb={18} sx={{display:'flex', alignItems:'center', justifyContent: 'flex-start', background:'linear-gradient(90deg, #fff, teal)', p:4}}>
                    <Paper elevation={0} square>                    
                        <Box
                            component="img"
                            src={apify}
                            alt="project"
                            sx={{
                                width:500
                            }}
                        />
                    </Paper>
                    <Box mt={4} pl={8}>
                        <Typography variant='h4' fontWeight={600} sx={{color:'#efefef'}}>Apify</Typography>
                        <Box mt={2}>
                            <Typography sx={{color:'#efefef'}} fontSize={18}> 
                                A PWA made out of interest of API integration.
                            </Typography>
                        </Box>
                        <Stack direction="row" mt={4} gap={2} sx={{ml:'auto', width:'fit-content'}}>
                            <Chip label="react" size='medium' variant='outlined' sx={chipProp}/>
                            <Chip label="d3.js" size='medium' variant='outlined' sx={chipProp}/>
                            <Chip label="mui" size='medium' variant='outlined' sx={chipProp}/>
                            {/* <Chip label="api-integration" size='medium' variant='outlined' sx={chipProp}/> */}
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}