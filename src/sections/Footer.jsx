// @mui
import { Box } from "@mui/material";
// components

export default function Footer() {
    return(
        <Box sx={{width: '100vw', height: '30px', background: 'var(--navy)', textAlign: 'center'}} >
            <footer >
                &copy; Copyright 2023 QABot.com
            </footer>
        </Box>
    )
}