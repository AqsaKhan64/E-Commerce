import { Container, Typography,Box, Button, Divider, Grid } from '@mui/material'
import React from 'react'
import "../index.css";
import ElementButtons from '../components/ElementButtons';
import ElementGallery from '../components/ElementGallery';
import Elementsidepane from '../components/Elementsidepane';
import ElementForm from '../components/ElementForm';
import ElementAlignment from '../components/ElementAlignment';
import ElementDefination from '../components/ElementDefination';
import ElementBlockqoute from '../components/ElementBlockqoute';
import ElementTable from '../components/ElementTable';
import ElementList from '../components/ElementList';
import ElemenTextSample from '../components/ElemenTextSample';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
const pgIcon={
  fontSize: "11px",
 }
 const blog={
  marginTop: "230px"
 }
const Elements = () => {
  return (
    <>
    <Grid>
      <NavBar/>
    </Grid>
    <Grid item container>
        <Grid className='prdct-ban' item sm={12}>
        <Box className='bannerImg'>
            <Box className='ban-text'>
            <Typography sx={{color: "white", fontWeight: "900"}} variant="h3">ELEMENTS</Typography>
            <Typography sx={{color: "white", mt: 3}} variant="p">Home  <i style={pgIcon} class="fa-regular fa-greater-than"></i> ELEMENTS</Typography>
            </Box>
          </Box>
        </Grid>
    </Grid>
      <Container style={blog}>
        <ElemenTextSample /> <Divider />
        <ElementButtons /> <Divider />
        <ElementAlignment /> <Divider />
        <ElementDefination /> <Divider />
        <ElementBlockqoute /> <Divider />
        <ElementTable /> <Divider />
        <ElementGallery /> <Divider />
       <ElementList /> <Divider />
        <Grid container spacing={4} sx={{marginBlock:3}}>
          <Grid item xs={12} sm={8} md={8} lg={8}>
            <ElementForm />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Elementsidepane />
          </Grid>
        </Grid>
      </Container>
      <Grid>
      <Footer/>
    </Grid>
    </>
  );
}

export default Elements
