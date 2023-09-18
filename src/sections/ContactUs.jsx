// @mui
import { Grid, Stack, Typography } from "@mui/material";
// @mui-icon
import { Facebook, LinkedIn, Twitter } from '@mui/icons-material';
// components
import { Page, ContainedBox } from "../components";
// assets
import BugIcon from '../assets/QAbug.png'

export default function ContactUs() {
    return(
        <Page sx={{background: 'var(--lightBlue)'}}>
            <img src={BugIcon} className="contact-us-bug" />
            <Stack>
                <Typography 
                    className="simple-header big"
                    sx={{color: 'var(--navy)', textShadow: '2px 2px var(--shadowNavy)'}}
                >
                    Ready to work with us?
                </Typography>
                <Typography className="simple-body" sx={{color: 'var(--navy)'}} >
                    Send us a message and let's talk about it.
                </Typography>
                <Grid container spacing={3} className="contact-us-box-cotainer">
                    <Grid item xs={1.5} className="flex-end column">
                        <Typography variant="body1" sx={{color: 'var(--navy)'}}>
                            CONTACT US
                        </Typography>
                    </Grid>
                    <Grid item xs={3.5}>
                        <ContainedBox>
                            <Stack spacing={5}>
                                <Typography variant="h6">
                                    Phone
                                </Typography>
                                <Typography variant="body2" className="flex-end">
                                    <a href="tel:00123456789">00123456789</a>
                                </Typography>
                            </Stack>
                        </ContainedBox>
                    </Grid>
                    <Grid item xs={3.5}>
                        <ContainedBox>
                            <Stack spacing={5}>
                                <Typography variant="h6">
                                    Email
                                </Typography>
                                <Typography variant="body2" className="flex-end">
                                    <a href="tmailto:info@qbot.com">info@qbot.com</a>
                                </Typography>
                            </Stack>
                        </ContainedBox>
                    </Grid>
                    <Grid item xs={3.5}>
                        <ContainedBox>
                            <Stack spacing={5}>
                                <Typography variant="h6">
                                    Social
                                </Typography>
                                <Stack direction="row" className="flex-end">
                                    <LinkedIn />
                                    <Facebook />
                                    <Twitter />
                                </Stack>
                            </Stack>
                        </ContainedBox>
                    </Grid>
                </Grid>
            </Stack>
        </Page>
    )
}