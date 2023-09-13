import { Box, Card, Stack, Typography } from "@mui/material";

export default function ClientBox(props) {
    return(
        <Card className={"client-box b" + props.index}>
            <Stack spacing={2}>
                <div className="client-image">
                    <img src={props.image} className="images" />
                </div>
                <Typography variant="h5">
                    {props.name}
                </Typography>
                <Typography variant="body1">
                    {props.quote}
                </Typography>
            </Stack>
        </Card>
    )
}