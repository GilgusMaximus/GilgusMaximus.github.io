import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Card } from '@mui/material';


import logoImage from '../../Files/Images/home/logodesign1weiss-1024x879.png'
import './HomePage.css'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export default function HomePage() {
  console.log("Helo")
  return (
    <Grid container spacing={2} columns={16} sx={{height: '100%'}}>
      <Grid xs={16} sx={{height: '40%'}}>
        <Box
        sx={{height: '100%'}}
        >
          <Box
        component="img"
        sx={{
          height: {xs:175, md: '85%'},
          paddingTop: 4
        }}
        alt="White logo of Luca Hohmann"
        src={logoImage}
      />
        </Box>
      </Grid>
      <Grid xs={16} sx={{height: 1}}>
        <Card
        sx={{height: '60%', fontSize: {xs: 'large', sm: 'x-large'}}}
        >
          <h1>Luca Hohmann</h1>
          <h2>M.Sc. Student Information Security, Privacy, Web Technology @TUM</h2>
          <p><LocationOnOutlinedIcon></LocationOnOutlinedIcon> Located in Munich, Germany</p>
        </Card>
      </Grid>
    </Grid>
  )
}
