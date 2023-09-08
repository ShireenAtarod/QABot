// @mui
import { Box, Typography } from "@mui/material"
export default function SimpleBox(props){
    return(
        <Box sx={{border: '1px solid var(--navy)', height: '100%'}}>
            <Typography align="left" className="simple-box-header">
                {props.header}
            </Typography>
            <Typography align="left" className="simple-box-body">
                {props.body}
            </Typography>
        </Box>
    )
}