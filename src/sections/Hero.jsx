// @mui
import { Grid, Stack, Typography } from "@mui/material"
// Components
import Page from "../components/Page"
// aseets
import logo from '../assets/QAbug.png'
// css
import './Hero.scss'

export default function Hero() {
    return(
        <Page sx={{background: 'linear-gradient(90deg, rgb(25, 54, 97) 0%, rgb(25, 54, 97) 50%, rgb(241, 90, 34) 100%)'}}>
            <Grid container className="hero-grid-container">
                <Grid item xs={3} className="hero-grid-item">
                    <img src={logo} alt="logo" style={{marginRight: '-50px'}} />
                </Grid>
                <Grid item xs={7} className="hero-grid-item">
                    <Stack sx={{margin: 'auto'}}>
                        <Typography variant="h1" className="hero-font">
                            Power On
                        </Typography>
                        <Typography variant="h2" className="hero-font" >
                            your product
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Page>
    )
}