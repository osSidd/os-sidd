import { Box, Container, Typography } from "@mui/material";

export default function Footer(){
    return(
        <Container maxWidth="xl">

            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', width: '100%'}}>
               <Typography
                sx={{
                    "&::after":{
                        content: '"|"'
                    }
                }}
               >Osama Siddiquee </Typography>
               <Typography>&nbsp;Portfolio {new Date().getFullYear()}</Typography>
            </Box>
           
        </Container>
    )
}