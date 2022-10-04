import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { Avatar, Box, Button, Card } from '@mui/material';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';

import profileImage from '../../Files/Images/about/profile2.jpeg'
import cvFile from '../../Files/Files/Luca_Mario_Hohmann_CV.pdf'

import './LifePage.css'

export default function LifePage() {
  return (
    <Grid container spacing={2} columns={16} sx={{height: '100%'}}>
        <Grid xs={16} md={8} sx={{height: 1, textAlign: 'center'}} className='profilePic'>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100%"
        >
            <Avatar
            alt="Rounded picture of Luca Hohmann"
            src={profileImage}
            sx={{height: 350, width: 350, borderRadius: 100, border: 2, borderColor: 'white'}}
            ></Avatar>
        </Box>
        </Grid>
        <Grid xs={8} sx={{height: 1}}>
          <Grid container spacing={2} columns={16} sx={{height: '100%'}}>
            <Grid xs={8} sx={{height: 0.5}}>
              <Card sx={{height:1, textAlign: 'left'}}>
                <h3>Studies</h3>
                <p>- 3 years Bachelor's studies at TUM starting 2017</p>
                <p>- 1 year Master's exchange to Aalto University, Finland</p>
                <p>- Finishing up my Master's studies in January 2023</p>
                <p>- I am especially interested in building and designing secure systems as well as researching new security concepts</p>
              </Card>
            </Grid>
            <Grid xs={8} sx={{height: 0.5}}>
              <Card sx={{height: 1, textAlign: 'left'}} variant="outlined">
                <h3>Exchange</h3>
                <p>- 1 year living and studying in Espoo, Finland</p>
                <p>- What I learned & improved: Intercultural communication, spontaneous problem solving, approaching problems more calm & relaxed</p>
                <p>- Also got to know one of the best student lifes in the world and will be forever grateful</p>
                <p>- Also Sauna is the best</p>
              </Card>
            </Grid>
            <Grid xs={8} sx={{height: 0.5}}>
              <Card sx={{height: 1, textAlign: 'left'}}>
              <h3>What and Why am I doing</h3>
                <p>- FOSS developer since the pandemic in 2020</p>
                <p>- Worked as student assistant at TUM for 3 years</p>
                <p>- Whenever possible I can be found at events, such as tech meetings, hackathons...</p>
                <p>- Why I want to be in Security: <br/>"All practically relevant problems are theoretically solved. [...] Nonetheless the practical state of IT-Security is disastrous" - Linus Neumann, CCC</p>
              </Card>
            </Grid>
            <Grid xs={8} sx={{height: 0.5}}>
              <Card sx={{height: 1, textAlign: 'left'}}>
                <h3>More about me</h3>
                <p>Find my reduced CV below, and also check out my project further down the page</p>
                <Button variant="outlined" startIcon={<AssignmentIndOutlinedIcon />} href={cvFile} target="_blank">Get my CV</Button>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  )
}
