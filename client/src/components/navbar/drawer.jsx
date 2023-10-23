import { Box, Button, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from "react";

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WebIcon from '@mui/icons-material/Web';
import WorkIcon from '@mui/icons-material/Work';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

import FeedIcon from '@mui/icons-material/Feed';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import EmailIcon from '@mui/icons-material/Email';


export default function MenuDrawer(){

    const [state, setState] = useState({left:false})

    const toggleDrawer = (anchor, open) => (event) => {
        if(event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return

        setState({[anchor]: open})
    }

    const btnProps = {
        color:'link.main',
        fontSize:18,
        textTransform:'capitalize',
        width:'100%',
        justifyContent:'flex-start',
    }

    const drawertopSection = [
        {
            id:0,
            label:'Home',
            icon:<HomeIcon/>,
            href:'#home'
        },
        {
            id:1,
            label:'About',
            icon:<PersonIcon/>,
            href:'#about'
        },
        {
            id:2,
            label:'Projects',
            icon:<WebIcon/>,
            href:'#projects'
        },
        {
            id:3,
            label:'Experience',
            icon:<WorkIcon/>,
            href:'#experience'
        },
        {
            id:4,
            label:'Contact',
            icon:<PermContactCalendarIcon/>,
            href:'#contact'
        }
    ]

    const drawerBottomSection = [
        {
            id:0,
            label:'Github',
            icon:<GitHubIcon/>,
            href:'https:github.com/osSidd'
        },
        {
            id:1,
            label:'Linkedin',
            icon:<LinkedInIcon/>,
            href:'https://www.linkedin.com/in/osama-siddiquee-5722a1a1',
        },
        // {
        //     id:2,
        //     label:'Email',
        //     icon:<EmailIcon/>,
        // },
        {
            id:2,
            label:'Blog',
            icon:<FeedIcon/>,
            href:'#',
        },
    ]

    const list = (anchor) => (
        <Box
            sx={{width:250}}
            role='presentation'
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            height='100%'
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
            py={2}
        >
            <Box>
            <List>
                {
                    drawertopSection.map(item => (
                        <ListItem key={item.id}>
                             {/* <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.label}/> */}
                            <Button startIcon={item.icon} href={item.href} sx={btnProps}>
                                {item.label}
                            </Button>
                        </ListItem>
                    ))
                }
            </List>
            <Divider/>
            <List>
                {
                    drawerBottomSection.map(item => (
                        <ListItem key={item.id}>
                            <Button startIcon={item.icon} href={item.href} target="_blank" sx={btnProps}>
                                {item.label}
                            </Button>
                            {/* <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.label}/> */}
                        </ListItem>
                    ))
                }
            </List>
            </Box>
            <Box>
                <Typography fontSize='small' textAlign='center'>Osama Siddiquee | Portfolio</Typography>
            </Box>
        </Box>
    )

    return (
        <>
            <MenuIcon onClick={toggleDrawer('left', true)} sx={{fontSize:36, color:'primary.main'}}/>
            <Drawer
                anchor='left'
                open={state.left}
                onClose={toggleDrawer('left', false)}
            >
                {list('left')}
            </Drawer>
        </> 
    )
}