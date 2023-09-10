// components
import { Page } from '../components'
// @mui
import { Box, Grid, Stack, Typography } from '@mui/material'
// assets
import qaIamge from '../assets/qa-pic.png'

export default function AboutUs() {
    return(
        <Page sx={{background: 'var(--navy)'}}>
            <Grid container spacing={5} className='box-vert-mid'>
                <Grid item xs={7} spacing={2}>
                    <Stack spacing={2}>
                        <Typography className='outline-header'>
                            About Us
                        </Typography>
                        <Typography className='simple-body' color="var(--lightBlue)" align='justify'>
                            Write a paragraph that talks about your company here. You can talk about your company's background, history, mission, vision, or philosophy. Anything that will introduce your brand's persona to your clients. This will help build a connection between you and them, that hopefully leads into a working relationship.
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={5}>
                    <Box>
                        <img src={qaIamge} className='images' />
                    </Box>
                </Grid>
            </Grid>
        </Page>
    )
}