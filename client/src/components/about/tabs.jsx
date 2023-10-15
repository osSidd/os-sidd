import { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";

export default function AboutTabs(){

    const [value, setValue] = useState(0)

    function handleChange(e, value){
        setValue(value)
    }

    return (
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
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore tenetur doloribus distinctio neque voluptatum eius exercitationem nihil excepturi incidunt! Repellat ab animi distinctio exercitationem ea amet sed perspiciatis, enim natus?
                    </Typography>
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