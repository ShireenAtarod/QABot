import { Box } from "@mui/material";

export default function ContainedBox(props) {
    return(
        <Box sx={{width: '100%', maxWidth: '440px', background: 'var(--navy)', borderRadius: '5px'}}>
            {props.children}
        </Box>
    )
}