import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { Avatar, Box, Button, Card } from '@mui/material';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';

import profileImage from '../../Files/Images/about/profile2.jpeg'
import cvFile from '../../Files/Files/Luca_Mario_Hohmann_CV.pdf'

import './LifePage.css'

export default function LifePage() {
  return (
    <Grid container spacing={2} columns={16} sx={{height: {xs: 'fit-content', md: '100%'}}}>
        <Grid xs={16} md={8} sx={{height: {xs: 0.3, sm: 0.5, md: 1}, textAlign: 'center'}} className='profilePic'>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100%"
        >
            <Avatar
            alt="Rounded picture of Luca Hohmann"
            src={profileImage}
            sx={{height: {xs: 200, sm: 300, md: 350}, width: {xs: 200, sm: 300,  md: 350}, borderRadius: 100, border: 2, borderColor: 'white'}}
            ></Avatar>
        </Box>
        </Grid>
        <Grid xs={16} md={8} sx={{height: 1}}>
          {/* Elements go from left to right, top to bottom */}
          {/* Top row */}
          <Grid container spacing={2} columns={16} sx={{height: {xs: 'fit-content', md: '100%'}, fontSize: {xs: 'smaller', md: 'small', lg:'medium'}}}>
            <Grid xs={8} sx={{height: {xs: 'fit-content', md: 0.5}, fontSize: '11pt'}}>
              <Card sx={{height:1, textAlign: 'left' }}>
                <h3>Education</h3>
                <p>- 3 years Bachelor's studies at TUM starting 2017</p>
                <p>- 1 year Master's exchange to Aalto University, Finland</p>
                <p>- 2 years Master's studies at TUM, graduation February 2023</p>
              </Card>
            </Grid>
            <Grid xs={8} sx={{height: {xs: 'fit-content', md: 0.5}, fontSize: '11pt'}}>
              <Card sx={{height: 1, textAlign: 'left'}} variant="outlined">
                <h3>Skills</h3>
                <p>- Business grade Java development with SpringBoot and Reactor</p>
                <p>- Security topics: security evaluation, secure system design, security domain knowledge</p>
                <p>- Interpersonal skills, such as team leadership, project planning and negotiations</p>
                <p>- Good stamina when going to sauna</p>
              </Card>
            </Grid>
            {/* Bottom Row */}
            <Grid xs={8} sx={{height: {xs: 'fit-content', md: 0.5}, fontSize: '11pt'}}>
              <Card sx={{height: 1, textAlign: 'left'}}>
              <h3>Experience</h3>
                <p><b>05/23-Now</b> Jr. SW Developer at Giesecke+Devrient in digital payments solutions</p>
                <p><b>10/20-09/21</b> Student assistant in field of E-Government and online platforms</p>
                <p><b>10/18-09/20</b> Student assistant in field of medical research with ML and AR</p>
              </Card>
            </Grid>
            <Grid xs={8} sx={{height: {xs: 'fit-content', md: 0.5}}}>
              <Card sx={{height: 1, textAlign: 'left', fontSize: '11pt'}}>
                <h3>More about me</h3>
                <p>Find my CV below, and also check out my projects further down the page</p>
                <Button variant="outlined" startIcon={<AssignmentIndOutlinedIcon />} href={cvFile} target="_blank">Get my CV</Button>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  )
}
