// components
import { Page , SimpleBox} from "../components"
// @mui
import { Box, Grid, Stack, Typography } from "@mui/material"
// assets
import bugs from '../assets/bugs.png';

export default function Introduction() {
    const contects = [
        {
            header: 'Build',
            body: 'Give a detailed description of the service being provided here.'
        },
        {
            header: 'Operation',
            body: 'Give a detailed description of the service being provided here.'
        },
        {
            header: 'Transfer',
            body: 'Give a detailed description of the service being provided here.'
        }
    ]

    return(
        <Page sx={{background: 'var(--lightBlue)'}}>
            <Stack>
                <Grid container spacing={2} sx={{margin: '5vw', width: 'auto', height: '58vh'}}>
                    {contects.map((content) => {
                        return(
                            <Grid item xs={4}>
                                <SimpleBox header={content.header} body={content.body} />
                            </Grid>
                        )
                    })}
                </Grid>
                <Box sx={{marginLeft: '5vw', width: '45vw'}}>
                    <img src={bugs} className="images" />
                </Box>
            </Stack>
        </Page>
    )
}