import { useState } from "react";
import { Box, Tabs, Tab, Typography, Button, SvgIcon } from "@mui/material";

import HandymanIcon from '@mui/icons-material/Handyman';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SchoolIcon from '@mui/icons-material/School';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';

import HtmlIcon from '../../assets/html.svg'
import CssIcon from '../../assets/css.svg'
import JsIcon from '../../assets/js.svg'
import ReactIcon from '../../assets/react.svg'
import MuiIcon from '../../assets/mui.svg'
import TailwindIcon from '../../assets/tailwind.svg'

import NodeIcon from '../../assets/node.svg'
import MongoIcon from '../../assets/mongodb.svg'
import GraphIcon from '../../assets/graphql.svg'

import WordpressIcon from '../../assets/wordpress.svg'

import football from '../../assets/football.png'
import code from '../../assets/code.png'
import sudoku from '../../assets/sudoku.png'

export default function AboutTabs(){

    const iconProp = {}
    const imgProp = {width:48,}
    const iconBoxProp = {display:'flex', alignItems:'center',justifyContent:'center', flexWrap:'wrap', columnGap:2, mb:1, pt:2}

    const [value, setValue] = useState(0)

    function handleChange(e, value){
        setValue(value)
    }

    return (
        <Box sx={{width:"65%"}}>
            <Box sx={{borderBottom: 1, borderColor:'divider'}}>
                <Tabs value={value} onChange={handleChange} aria-label="basic-tabs">
                    <Tab label={<CustomTabHeading title="skills" icon={<HandymanIcon/>}/>} {...a11yProps(0)} />
                    <Tab label={<CustomTabHeading title="education" icon={<SchoolIcon/>}/>} {...a11yProps(1)} />
                    <Tab label={<CustomTabHeading title="hobbies" icon={<SportsSoccerIcon/>}/>} {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Box>
                    <Box sx={iconBoxProp}>
                        <Box component='img' src={HtmlIcon} sx={imgProp}/>
                        <Box component='img' src={CssIcon} sx={imgProp}/>
                        <Box component='img' src={JsIcon} sx={imgProp}/>
                        <Box component='img' src={ReactIcon} sx={imgProp}/>
                        <Box component='img' src={MuiIcon} sx={imgProp}/>
                        <Box component='img' src={TailwindIcon} sx={imgProp}/>
                    </Box>
                    <Box sx={iconBoxProp}>
                        <Box component='img' src={NodeIcon} sx={imgProp}/>
                        <Box component='img' src={MongoIcon} sx={{...imgProp, width:20}}/>
                        <Box component='img' src={GraphIcon} sx={imgProp}/>
                    </Box>
                    <Box sx={iconBoxProp}>
                        <Box component='img' src={WordpressIcon} sx={imgProp}/>
                    </Box>
                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Box>
                    <Typography sx={{color:'#1f0812'}} variant="h6">2011 - 2015</Typography>
                    <Typography sx={{color:'#1f081288', mb:4}}>NSHM Knowledge Campus, Durgapur</Typography>
                    <Typography sx={{color:'#1f0812'}} fontSize={18}>Pursued B.Tech in Mechanical Engineering.</Typography>
                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Box>
                    <Box sx={{display:'flex', alignItems:'center', columnGap:2, mb:2}}>
                        <Box component='img' src={football} width={32}/>
                        <Typography sx={{color:'#1f0812'}}>watching football</Typography>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center', columnGap:2, mb:2}}>
                        <Box component='img' src={code} width={32}/>
                        <Typography sx={{color:'#1f0812'}}>coding</Typography>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center', columnGap:2, mb:2}}>
                        <Box component='img' src={sudoku} width={32} />
                        <Typography sx={{color:'#1f0812'}}>solving sudoku</Typography>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center', columnGap:2, ml:1}}>
                        <AutoStoriesOutlinedIcon width={32} />
                        <Typography sx={{color:'#1f0812'}}>reading books</Typography>
                    </Box>
                </Box>
            </CustomTabPanel>
        </Box>
    )
}

function CustomTabHeading({title, icon}){
    return (
        <Button startIcon={icon} sx={{color:'#1f0812', "&:hover":{backgroundColor:'transparent'}}}>
            {title}
        </Button>
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
                <Box sx={{p:3, minHeight:215}}>
                    {children}
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