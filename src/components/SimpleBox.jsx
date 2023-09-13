import { useState } from "react"
// @mui
import { Box, Typography } from "@mui/material"
export default function SimpleBox(props){
    const [style, setStyle] = useState(props?.sx || {})

    return(
        <Box sx={{border: '1px solid var(--navy)', height: '100%'}}>
            <Typography align="left" className="simple-header" sx={style}>
                {props.header}
            </Typography>
            <Typography align="left" className="simple-body" color="var(--navy)">
                {props.body}
            </Typography>
        </Box>
    )
}