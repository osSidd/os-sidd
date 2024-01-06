import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette:{
        primary:{
            main:'#b30089'
        },
        text:{
            primary:'#333533',
            secondary:'#1f081288',
            subheading:'#404193',
        },
        link: {
            main:'#404193'
        },
    }
})

export default function MUIThemeProvider({children}){
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}