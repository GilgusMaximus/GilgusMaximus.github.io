import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { Card, Box, CardActionArea, Button } from '@mui/material';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';

import freeTubeLogo from '../../Files/Images/Projects/freetube.00d2002d.png'
import aaltoLogo from '../../Files/Images/Projects/Aalto_university_school_of_science_and_technology_logo.svg.png'
import tumLogo from '../../Files/Images/Projects/Logo_of_the_Technical_University_of_Munich.svg.png'

import industrialInternetFile from '../../Files/Files/Industrial_Internet_Final_Project.pdf'
import stackOverFlowFile from '../../Files/Files/Seminar_Paper_DataAnalytics_Polarity_Mining_Of_StackOverflow.pdf'
import bachelorFile from '../../Files/Files/Bachelor_Thesis.pdf'
import usecFile from '../../Files/Files/Blog_Post___USEC_Anonymous_Draft.pdf'
export default function ProjectPage() {
  return (
    <Grid xs={16} sx={{height: 1}}>
          <Grid container spacing={2} columns={16} sx={{height: '100%'}}>
            <Grid xs={16/3} sx={{height: 0.5}}>
              <Card sx={{height:1,  backgroundColor:'#1A2027', color:'white'}}>
                <p>
                <CardActionArea
                href='https://github.com/FreeTubeApp/FreeTube'
                target='_blank'
                >
                  <Box
                    component="img"
                    sx={{
                      height: '15%',
                      width: '15%'
                    }}
                    alt="Logo of FreeTubeApp project"
                    src={freeTubeLogo}
                  >
                  </Box>
                  </CardActionArea>
                </p>
                <h3><Button startIcon={<LaunchOutlinedIcon />} href={"https://github.com/FreeTubeApp/FreeTube"} target="_blank">FreeTube App</Button></h3>
                <p>Free, open source, privacy-focused YouTube desktop player, based on Electron, NodeJS and Vue.</p>
                <p>Enables anyone to utilize a large amount of feature from YouTube and add-ons in one place without any acoount registration.</p>
              </Card>
            </Grid>
            <Grid xs={16/3} sx={{height: 0.5}}>
            <Card sx={{height:1,  backgroundColor:'#1A2027', color:'white'}}>
                <p>
                <CardActionArea
                href={industrialInternetFile}
                target='_blank'
                >
                  <Box
                    component="img"
                    sx={{
                      height: '20%',
                      width: '20%'
                    }}
                    alt="Aalto university logo"
                    src={aaltoLogo}
                  >
                  </Box>
                  </CardActionArea>
                </p>
                <h3><Button startIcon={<LaunchOutlinedIcon />} href={industrialInternetFile} target="_blank">Seminar Industrial Internet</Button></h3>
                <p>Paper titled "Security challenges in Industrial Internet Of Things" written during the Industrial Internet Seminar.</p>
                <p>Discusses challenges in industrial internet and Industrie 4.0, about how IoT systems have to be deployed with security first in mind.</p>
              </Card>
            </Grid>
            <Grid xs={16/3} sx={{height: 0.5}}>
            <Card sx={{height:1,  backgroundColor:'#1A2027', color:'white'}}>
                <p>
                <CardActionArea
                href={stackOverFlowFile}
                target='_blank'
                >
                  <Box
                    component="img"
                    sx={{
                      height: '20%',
                      width: '20%'
                    }}
                    alt="Technical University Munich university logo"
                    src={tumLogo}
                  >
                  </Box>
                  </CardActionArea>
                </p>
                <h3><Button startIcon={<LaunchOutlinedIcon />} href={stackOverFlowFile} target="_blank">Seminar Data Analytics for Cybercrime & Undesirable Online Behavior</Button></h3>
                <p>Paper titled "Polarity mining of Stack Overflow answers in the C and Python subcommunities".</p>
                <p>Collected answers and analyzed whether Stack Overflow communities have become more toxic over time.</p>
              </Card>
            </Grid>
            {/* --------------------Split top, bottom--------------- */}
            <Grid xs={8/3} sx={{height: 0.5}}></Grid>
            <Grid xs={16/3} sx={{height: 0.5}}>
            <Card sx={{height:1,  backgroundColor:'#1A2027', color:'white'}}>
                <p>
                <CardActionArea
                href={bachelorFile}
                target='_blank'
                >
                  <Box
                    component="img"
                    sx={{
                      height: '20%',
                      width: '20%'
                    }}
                    alt="Technical University Munich university logo"
                    src={tumLogo}
                  >
                  </Box>
                  </CardActionArea>
                </p>
                <h3><Button startIcon={<LaunchOutlinedIcon />} href={bachelorFile} target="_blank">Bachelor Thesis: Classification of chronic wounds with machine learning (GRAPHIC)</Button></h3>
                <p>Thesis which analyzes whether off the shelve image recognition software is able to categorize chronic wound types.</p>
                <p>Additionally a simple to use, image annotation tool for non-tech users like nurses is built and evaluated.</p>
              </Card>
            </Grid>
            <Grid xs={16/3} sx={{height: 0.5}}>
            <Card sx={{height:1,  backgroundColor:'#1A2027', color:'white'}}>
                <p>
                <CardActionArea
                href={usecFile}
                target='_blank'
                >
                  <Box
                    component="img"
                    sx={{
                      height: '20%',
                      width: '20%'
                    }}
                    alt="Technical University Munich university logo"
                    src={tumLogo}
                  >
                  </Box>
                  </CardActionArea>
                </p>
                <h3><Button startIcon={<LaunchOutlinedIcon />} href={usecFile} target="_blank">Seminar Usable Security and Privacy</Button></h3>
                <p>Seminar paper titled 'Videogames can save your digital future - Why you should play games at work'</p>
                <p>The paper summarizes a given research paper about serious games in the context of cybersecurity and puts it into perspective</p>
              </Card>
            </Grid>
            <Grid xs={8/3} sx={{height: 0.5}}></Grid>
          </Grid>
        </Grid>
  )
}
