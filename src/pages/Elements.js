import { Container, Typography, Button, Divider, Grid } from '@mui/material'
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
const Elements = () => {
  return (
    <>
      <Container>
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
    </>
  );
}

export default Elements
