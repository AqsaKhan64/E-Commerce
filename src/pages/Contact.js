import { Container,Grid,Box, Typography } from '@mui/material'
import React from 'react'
import Adress from '../components/Adress';
import Form from'../components/Form'
import Map from '../components/Map'

function contact() {
  return (
    <Container sx={{marginBottom:10}}>
      <Map />
      <Typography sx={{fontSize:27, fontWeight:600, paddingBottom:3}}>Get in touch </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Form />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Adress />
        </Grid>
      </Grid>
    </Container>
  );
}

export default contact
