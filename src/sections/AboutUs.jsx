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
                            The QA-Bot Team: build-opration-transfromation was established with a clear vision in mind - to revolutionize the QA and test industry. With years of experience and expertise, we have developed a strong presence in the market, successfully assisting businesses in achieving their digital transformation goals. Our journey began with a passion for quality assurance and a commitment to delivering exceptional web, API, and mobile platform experiences.
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