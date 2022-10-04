import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import HomePage from '../HomePage/HomePage';
import LifePage from '../LifePage/LifePage';
import ProjectPage from '../ProjectPage/ProjectPage';
import ContactPage from '../ContactPage/ContactPage';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode ='#1A2027',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const pageStructure = [HomePage, LifePage, ProjectPage, ContactPage];

export function BaseGrid() {
  console.log("Being", pageStructure)
  return (
    <Box sx={{ flexGrow: 1, width: 1}}>
      <Grid container spacing={2} columns={16} sx={{height: '100%'}}>
        {
            pageStructure.map((element, id) => {
              console.log("Element", element, id);
              return <Grid xs={16} sx={{height: 1}} key={id}><Item sx={{height: {xs: 'fit-content', md: '100vh'}}}>{element()}</Item></Grid>
            })
        }
      </Grid>
    </Box>
  );
}