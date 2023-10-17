import { Box, Container, Typography } from "@mui/material";

export default function Footer(){
    return(
        <Container maxWidth="xl">

            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', width: '100%'}}>
               <Typography
                sx={{
                    "&::after":{
                        content: '"|"'
                    },
                    color:'#1f081299'
                }}
               >Osama Siddiquee </Typography>
               <Typography sx={{color:'#1f081299'}}>&nbsp;Portfolio {new Date().getFullYear()}</Typography>
            </Box>
           
        </Container>
    )
}