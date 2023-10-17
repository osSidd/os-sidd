import { Box, Typography } from "@mui/material"

export default function SubHeading({title}){
    return (
        <Box
                mb={8} 
                position="relative"
                sx={{
                    "&::after":{
                    content:'""',
                    width:135,
                    height:5,
                    backgroundColor:'#b30089',
                    position:'absolute',
                    top:62,    
                    }
                }}
        >
            <Typography 
                variant="h3"
                fontWeight={600} 
                color="#404193"
            >
                {title}
            </Typography>
        </Box>
    )
}