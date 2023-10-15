import { Box, Typography } from "@mui/material"

export default function SubHeading({title}){
    return (
        <Box
                mb={4} 
                position="relative"
                sx={{
                    "&::after":{
                    content:'""',
                    width:135,
                    height:5,
                    backgroundColor:'#23c',
                    position:'absolute',
                    top:62,    
                    }
                }}
        >
            <Typography 
                variant="h3"
                fontWeight={600} 
                color="#555"
            >
                {title}
            </Typography>
        </Box>
    )
}