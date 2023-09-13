// component
import ContainedBox from "./ContainedBox";
// @mui
import { Stack, Typography, Card, Box } from "@mui/material";


export default function ReportBox(props){
    return(
        <ContainedBox>
            <Stack spacing={2} sx={{marginTop: '20vh', height: '21vw', padding: '6px', color: 'var(--lightBlue)'}}>
                <div className="svg-container" style={{marginLeft: 'auto'}}>
                    {props.image}
                </div>
                <Typography variant="h3" sx={{fontWeight: 'bolder', marginTop: '20%'}}>
                    {props.value}
                </Typography>
                <Typography variant="h4">
                    {props.title}
                </Typography>
            </Stack>
        </ContainedBox>
    )
}