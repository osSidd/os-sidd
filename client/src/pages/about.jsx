import { Container, Grid, Tab, Tabs, Typography, Box} from "@mui/material";
import { useState } from "react";

export default function About(){

    const [value, setValue] = useState(0)

    function handleChange(e, value){
        setValue(value)
    }

    return(
        <Container maxWidth="xl" sx={{minHeight:'90vh', display:'flex', alignItems:'center'}}>
            <Grid container>
                <Grid item md={4}>
                   <div></div>
                </Grid>
                <Grid item md={8}>
                    <Typography variant="h2">
                        About Me
                    </Typography>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta tempora, fugit sunt consequuntur maxime, omnis sequi tenetur odio, ducimus quia magni. Sequi cum illo numquam earum fugit aliquid minus perferendis!
                    </Typography>
                    <Box sx={{width:"50%"}}>
                        <Box sx={{borderBottom: 1, borderColor:'divider'}}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic-tabs">
                                <Tab label="Item One" {...a11yProps(0)} />
                                <Tab label="Item Two" {...a11yProps(1)} />
                                <Tab label="Item Three" {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            <Box>
                                <Typography>Frontend</Typography>
                                <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore tenetur doloribus distinctio neque voluptatum eius exercitationem nihil excepturi incidunt! Repellat ab animi distinctio exercitationem ea amet sed perspiciatis, enim natus?</Typography>
                                <Typography>Backend</Typography>
                                <Typography>Other</Typography>
                            </Box>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            Item Two
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            Item Three
                        </CustomTabPanel>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

function CustomTabPanel(props){
    const {children, value, index, ...others} = props

    return(
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...others}
        >
            {value === index && (
                <Box sx={{p:3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

function a11yProps(index){
    return {
        id:`simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    }
}