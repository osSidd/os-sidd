import {Box, Chip, Container, Grid, Stack, Typography} from '@mui/material'

export default function Experience(){
    return (
        <Container maxWidth="xl" sx={{minHeight:'90vh', display: 'flex', flexDirection:'column', justifyContent:'center'}}>
            <Typography variant='h2'>Experience</Typography>

            <Grid container>
                <Grid item md={3} alignSelf="center">
                    <Typography>Aasa Technologies</Typography>
                </Grid>
                <Grid item md={9}>
                    {/* <Box> */}
                        <Box>
                            <Typography>web development intern</Typography>
                            <Typography>feb'23 - may'23</Typography>
                        </Box>
                        {/* list of details */}
                        {/* <Box>Logo</Box>
                    </Box> */}
                    <Box>
                        <Typography>technologies used:</Typography>
                        <Stack direction="row">
                            <Chip label="wordpress" />
                            <Chip label="react" />
                            <Chip label="d3.js" />
                            <Chip label="laravel" />
                            <Chip label="mui" />
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}