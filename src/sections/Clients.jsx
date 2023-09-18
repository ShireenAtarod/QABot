// components
import { Page, ClientBox } from '../components'
// @mui
import { Grid, Typography } from '@mui/material'
// assets
import person1 from '../assets/person1.jpg'
import person2 from '../assets/person2.jpg'
import person3 from '../assets/person3.jpg'

export default function Clients() {
    const data = [
        {name: 'Dempsey and Delta', quote: "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.", image: person1},
        {name: 'Noah Schumacher', quote: "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.", image: person2},
        {name: 'Stipple Unlimited', quote: "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.", image: person3},
    ]

    return(
        <Page sx={{background: 'var(--lightBlue)', zIndex: '2'}}>
            <Typography className='simple-header big' sx={{color: 'var(--navy)', textShadow: '2px 2px var(--shadowNavy)'}}>
                Our Projects
            </Typography>
            <Grid container spacing={7}>
                {data.map((client, index) => {
                    return(
                        <Grid item xs={3.5}> 
                            <ClientBox index={index} name={client.name} quote={client.quote} image={client.image} />
                        </Grid>
                    )
                })}
            </Grid>
        </Page>
    )
}