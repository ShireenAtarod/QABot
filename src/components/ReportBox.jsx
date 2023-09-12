// component
import { chartIcon } from "../assets/icons";
import ContainedBox from "./ContainedBox";
// @mui
import { Stack, Typography, Card, Box } from "@mui/material";


export default function ReportBox(props){
    return(
        <ContainedBox>
            <Stack spacing={2} sx={{marginTop: '22vh', padding: '6px', color: 'var(--lightBlue)'}}>
                <div className="svg-container" style={{marginLeft: 'auto'}}>
                    {props.image}
                </div>
                <Typography variant="h4">
                    {props.value}
                </Typography>
                <Typography variant="h5">
                    {props.title}
                </Typography>
            </Stack>
        </ContainedBox>
    )
}