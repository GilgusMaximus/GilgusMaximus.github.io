import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Card } from '@mui/material';


import logoImage from '../../Files/Images/home/logodesign1weiss-1024x879.png'
import './HomePage.css'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function HomePage() {
  console.log("Helo")
  return (
    <Grid container spacing={2} columns={16} sx={{height: '100%'}}>
      <Grid xs={16} sx={{height: '40%'}}>
        <Card
        sx={{height: '100%', backgroundColor: '#1A2027'}}
        >
          <Box
        component="img"
        sx={{
          height: '85%',
          paddingTop: 4
        }}
        alt="White logo of Luca Hohmann"
        src={logoImage}
      />
        </Card>
      </Grid>
      <Grid xs={16} sx={{height: 1}}>
        <Card
        sx={{backgroundColor: '#1A2027', color: 'white', height: '60%', fontSize: 'x-large'}}
        >
          <h1>Luca Hohmann</h1>
          <h2>M.Sc. Student Information Security, Privacy, Web Technology @TUM</h2>
          <p><LocationOnOutlinedIcon></LocationOnOutlinedIcon> Located in Munich, Germany</p>
        </Card>
      </Grid>
    </Grid>
  )
}
