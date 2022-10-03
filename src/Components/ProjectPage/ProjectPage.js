import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { Card, Box, CardActionArea, Button } from '@mui/material';

import freeTubeLogo from '../../Files/Images/Projects/freetube.00d2002d.png'
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';

const handleBoxClick = (event) => {
  window.open("https://github.com/FreeTubeApp/FreeTube", "_blank")
}

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
              <Card sx={{height:1, textAlign: 'left', backgroundColor:'#1A2027', color:'white'}}>
                Industrial Engineering
              </Card>
            </Grid>
            <Grid xs={16/3} sx={{height: 0.5}}>
              <Card sx={{height:1, textAlign: 'left', backgroundColor:'#1A2027', color:'white'}}>
                Seminar Paper
              </Card>
            </Grid>
            {/* --------------------Split top, bottom--------------- */}
            <Grid xs={8/3} sx={{height: 0.5}}></Grid>
            <Grid xs={16/3} sx={{height: 0.5}}>
              <Card sx={{height: 1, textAlign: 'left', backgroundColor:'#1A2027', color:'white'}}>
              Bachelor Thesis
              </Card>
            </Grid>
            <Grid xs={16/3} sx={{height: 0.5}}>
              <Card sx={{height: 1, textAlign: 'left', backgroundColor:'#1A2027', color:'white'}}>
                Seminar Paper
              </Card>
            </Grid>
            <Grid xs={8/3} sx={{height: 0.5}}></Grid>
          </Grid>
        </Grid>
  )
}
