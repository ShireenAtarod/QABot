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
            body: 'From Consultation to Precision Testing: Crafting Quality in Every Step'
        },
        {
            header: 'Operation',
            body: 'Proactively Pioneering Efficiency in Your Digital Ecosystem.'
        },
        {
            header: 'Transfer',
            body: 'Reviewing Success, Forging a Structured Future: QA Excellence in Knowledge Transfer'
        }
    ]

    return(
        <Page sx={{background: 'var(--lightBlue)'}}>
            <Stack>
                <Grid container spacing={2} sx={{ width: 'auto', height: '58vh'}}>
                    {contects.map((content) => {
                        return(
                            <Grid item xs={4}>
                                <SimpleBox header={content.header} body={content.body} sx={{color: 'var(--orange)', textShadow: '2px 2px var(--shadowOrange)' }} />
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