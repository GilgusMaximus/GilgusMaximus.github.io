import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { Card, Box, CardActionArea, Button } from '@mui/material';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';

import emailIcon from '../../Files/Images/Contact/mail.ed17cd1d.png';
import linkedIcon from '../../Files/Images/Contact/linkedin.3d920609.png';
import githubIcon from '../../Files/Images/Contact/github.aa4c5e97.png';

export default function ContactPage() {
  return (
    <Grid xs={16} sx={{height: 1}}>
    <Grid container spacing={2} columns={16} sx={{height: '100%'}}>
      <Grid xs={16} sx={{height: 0.1, color:'white'}}>
        <h2>You can get in contact with me any time via one of the following 3 platforms</h2>
      </Grid>
      <Grid xs={16/3} sx={{height: 0.8}}>
        <Card sx={{height:1, color:'white'}}>
          <p>
          <CardActionArea
          href='mailto:business@lucahohmann.com'
          target='_blank'
          >
            <Box
              component="img"
              sx={{
                height: '25%',
                width: '25%'
              }}
              alt="Email icon"
              src={emailIcon}
            >
            </Box>
            </CardActionArea>
          </p>
          <h3><Button startIcon={<LaunchOutlinedIcon />} href={"mailto:business@lucahohmann.com"} target="_blank">business@lucahohmann.com</Button></h3>
          <p>My E-Mail address</p>
        </Card>
      </Grid>
      <Grid xs={16/3} sx={{height: 0.8}}>
      <Card sx={{height:1, color:'white'}}>
          <p>
          <CardActionArea
          href="https://de.linkedin.com/in/luca-hohmann"
          target='_blank'
          >
            <Box
              component="img"
              sx={{
                height: '25%',
                width: '25%'
              }}
              alt="LinkedIn logo"
              src={linkedIcon}
            >
            </Box>
            </CardActionArea>
          </p>
          <h3><Button startIcon={<LaunchOutlinedIcon />} href={"https://de.linkedin.com/in/luca-hohmann"} target="_blank">luca-hohmann</Button></h3>
          <p>My LinkedIn Profile</p>
        </Card>
        </Grid>
      <Grid xs={16/3} sx={{height: 0.8}}>
      <Card sx={{height:1, color:'white'}}>
          <p>
          <CardActionArea
          href={"https://github.com/gilgusmaximus"}
          target='_blank'
          >
            <Box
              component="img"
              sx={{
                height: '25%',
                width: '25%'
              }}
              alt="Github logo"
              src={githubIcon}
            >
            </Box>
            </CardActionArea>
          </p>
          <h3><Button startIcon={<LaunchOutlinedIcon />} href={"https://github.com/gilgusmaximus"} target="_blank">GilgusMaximus</Button></h3>
          <p>My Github Profile</p>
        </Card>
      </Grid>
    </Grid>
    </Grid>
  )
}
