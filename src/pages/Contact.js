import { Container,Grid,Box, Typography } from '@mui/material'
import React from 'react'
import Adress from '../components/Adress';
import Form from'../components/Form'
import Map from '../components/Map'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
const pgIcon={
  fontSize: "11px",
 }
 const blog={
  marginTop: "230px"
 }
function contact() {
  return (
    <>
    <Grid>
      <NavBar/>
    </Grid>
    <Grid item container>
        <Grid className='prdct-ban' item sm={12}>
        <Box className='bannerImg'>
            <Box className='ban-text'>
            <Typography sx={{color: "white", fontWeight: "900"}} variant="h3">CONTACT</Typography>
            <Typography sx={{color: "white", mt: 3}} variant="p">Home  <i style={pgIcon} class="fa-regular fa-greater-than"></i>  CONTACT</Typography>
            </Box>
          </Box>
        </Grid>
    </Grid>
    <Container sx={{marginBottom:10}} style={blog}>
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
    <Grid>
      <Footer/>
    </Grid>
    </>
  );
}

export default contact
