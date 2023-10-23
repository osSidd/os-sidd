import { Box, Container, Typography } from "@mui/material";

export default function Footer(){
    return(
        <Container maxWidth="xl" sx={{mt:10}}>

            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', width: '100%'}}>
               <Typography
                sx={{
                    "&::after":{
                        content: '"|"'
                    },
                    color:'text.secondary'
                }}
               >Osama Siddiquee </Typography>
               <Typography color="text.secondary">&nbsp;Portfolio {new Date().getFullYear()}</Typography>
            </Box>
           
        </Container>
    )
}