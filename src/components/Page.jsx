import { useState, useEffect } from "react"
import { Paper } from "@mui/material"

export default function Page(props) {
    const [style, setStyle] = useState(props?.sx || {})

    return(
        <Paper elevation={24} sx={style} className="paper">
            {props.children}
        </Paper>
    )
}