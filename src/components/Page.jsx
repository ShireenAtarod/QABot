import { Paper } from "@mui/material"

export default function Page(props) {
    return(
        <Paper elevation={24} sx={{ width: '100vw', height: '100vh'}}>
            {props.children}
        </Paper>
    )
}