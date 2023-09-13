// @mui
import { Grid, Typography } from '@mui/material'
// components
import { Page, ReportBox } from '../components'
// assets
import { peopleIcon, chartIcon, glowIcon } from '../assets/icons'

export default function Report() {
    const data = [
        {image: peopleIcon, title: 'Customer served', value: '927'},
        {image: chartIcon, title: 'Products sold', value: '10403'},
        {image: glowIcon, title: 'Household improved', value: '658'},        
    ]
    return(
        <Page sx={{background: 'linear-gradient(180deg, rgba(25,54,97,1) 0%, rgba(25,54,97,1) 50%, rgba(234,247,246,1) 100%)'}}>
            <Typography align='left' className='simple-header big' sx={{color: 'var(--orange)', textShadow: '2px 2px var(--shadowOrange)' }}>
                What We've Done
            </Typography>
            <Grid container spacing={5} margin='auto'>
                {data.map((item) => {
                    return(
                        <Grid item xs={1} md={3} xl={3}>
                            <ReportBox image={item.image} title={item.title} value={item.value} />
                        </Grid>
                    )
                })}
            </Grid>
        </Page>
    )
}