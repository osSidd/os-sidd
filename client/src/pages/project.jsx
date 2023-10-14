import proer from '../assets/proer.png'
import apify from '../assets/apify.png'

import {Box, Chip, Container, Grid, Stack, Typography} from '@mui/material'

export default function Project(){
    return (
        <Container maxWidth="xl" sx={{minHeight:'90vh', display:'flex', alignItems:'center'}}>
            <Box width="100%">
                <Typography variant='h2' mb={4}>
                    Projects
                </Typography>
                <Box my={32 } sx={{display:'flex', alignItems:'center', justifyContent: 'space-between'}}>
                    <Box>
                        <Typography variant='h4'>Proer Website</Typography>
                        <Box>
                            <Typography>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi exercitationem quae, fugit provident expedita aut aspernatur eveniet cumque temporibus sequi perspiciatis maxime magnam eos optio quisquam, voluptatum commodi nobis eum.
                            </Typography>
                        </Box>
                        <Stack direction="row">
                            <Chip label="wordpress"/>
                            <Chip label="javascript" />
                            <Chip label="css"/>
                        </Stack>
                    </Box>
                    <Box
                        component="img"
                        src={proer}
                        alt="project"
                        sx={{
                            width:500
                        }}
                    />
                </Box>
                <Box my={32} sx={{display:'flex', alignItems:'center', justifyContent: 'space-between'}}>
                    <Box
                        component="img"
                        src={apify}
                        alt="project"
                        sx={{
                            width:500
                        }}
                    />
                    <Box textAlign="end">
                        <Typography variant='h4'>Apify</Typography>
                        <Box>
                            <Typography>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi exercitationem quae, fugit provident expedita aut aspernatur eveniet cumque temporibus sequi perspiciatis maxime magnam eos optio quisquam, voluptatum commodi nobis eum.
                            </Typography>
                        </Box>
                        <Stack direction="row">
                            <Chip label="react"/>
                            <Chip label="d3.js" />
                            <Chip label="mui"/>
                            <Chip label="api-integration"/>
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}