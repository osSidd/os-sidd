import data from '../data/projectsData'
import {Box, Button, Chip, Container, Grid, Stack, Typography} from '@mui/material'
import SubHeading from '../components/subHeading'

export default function Project(){
    
    return (
        <Container 
            id="projects" 
            maxWidth="xl" 
            sx={{
                minHeight:'40vh', 
                display:'flex', 
                alignItems:'center', 
                mt:{xs:10, lg:8}, 
                
            }}>
            <Box width="100%">
               <SubHeading title='Projects'/>
                {
                    data && 
                    data.map(project => (
                        <Grid container mt={{xs:12, md:0}} mb={project.id === data.length - 1 ? 0 : 8} key={project.id}>
                            <Grid item xs={12} lg={4}>
                                <ProjectImage project={project}/>
                            </Grid>
                            <Grid item xs={12} lg={4} alignSelf='flex-start' mt={{xs:4, lg:0}}>
                                <ProjectText project={project}/>
                            </Grid>
                            <Grid item xs={12} lg={4} alignSelf='center'>
                                <ProjectChip project={project}/>
                                <ProjectBtn project={project}/>
                            </Grid>
                        </Grid>
                    ))
                }                             
            </Box>
        </Container>
    )
}

function ProjectImage({project}){
    return (
        <Box
            component="img"
            src={project.image}
            alt="project"
            sx={{
                width:{xs:'100%', sm:400, lg:300},
            }}
        />
    )
}

function ProjectText({project}){
    return(
        <>
            <Typography variant='h5' fontWeight={600} color="text.primary">{project.title}</Typography>
            <Typography sx={{color:"text.secondary", fontSize:14, mt:1}}>{project.timespan}</Typography>
            <Typography sx={{color:"text.secondary", fontSize:14, mb:2}}>
                (associated with <span style={{fontWeight:'bold'}}>{project.associatedWith}</span>)
            </Typography>
            <Typography color="text.primary">{project.description}</Typography>
        </>
    )
}

function ProjectBtn({project}){
    const linkBtnProp = {
        borderRadius:5, 
        borderWidth:1, 
        fontSize:16, 
        textTransform:'capitalize', 
        color:'link.main', 
        borderColor:'link.main', 
        "&:hover":{
            borderColor:'link.main', 
            backgroundColor:'link.main', 
            color:'#fefefe'
        }
    }
    return (
        <Stack direction='row' justifyContent='center' gap={2}>
            {
                project.btn.map(btn => (
                    <Button 
                        variant='outlined' 
                        sx={linkBtnProp} 
                        href={btn.href}
                        rel='noreferrer'
                        target='_blank'
                        key={btn.id}
                    >
                        {btn.label}
                    </Button>
                ))
            }
        </Stack>
    )
}

function ProjectChip({project}){
    const chipProp = {
        p:2, 
        fontSize:16, 
        fontWeight:500, 
        color:'primary.main', 
        borderColor:'primary.main'
    }

    return (
        <Stack direction="row" flexWrap='wrap' gap={2} justifyContent='center' my={2}>
            {
                project.techUsed.map(tech => (
                    <Chip key={tech} label={tech} size='small' variant='outlined' sx={chipProp}/> 
                ))
            }
        </Stack>
    )
}